import crc32 from 'buffer-crc32';
import fs from 'fs/promises';
import crypto from 'crypto';
import client from '$lib/server/db.js';
import { ObjectId } from 'mongodb';
import { notifUser } from '$lib/server/db/subscriptionDb';

// Variables de configuración
const CACHE_DIR = '.';
const WEBHOOK_ID = '1V350785J5059511A';
const adminGoogleId = '100935988500638449773';

// Función para descargar y guardar en caché
async function downloadAndCache(url, cacheKey) {
	if (!cacheKey) {
		cacheKey = url.replace(/\W+/g, '-');
	}
	const filePath = `${CACHE_DIR}/${cacheKey}`;

	// Revisa si ya está en caché
	const cachedData = await fs.readFile(filePath, 'utf-8').catch(() => null);
	if (cachedData) {
		return cachedData;
	}

	// Descarga el archivo si no está en caché
	const response = await fetch(url);
	const data = await response.text();
	await fs.writeFile(filePath, data);

	return data;
}

// Lógica para verificar la firma del webhook
async function verifySignature(event, headers) {
	const transmissionId = headers.get('paypal-transmission-id');
	const timeStamp = headers.get('paypal-transmission-time');
	const certUrl = headers.get('paypal-cert-url');
	const signature = headers.get('paypal-transmission-sig');

	if (!transmissionId || !timeStamp || !certUrl || !signature) {
		console.error('Faltan headers requeridos para la validación.');
		return false;
	}

	const crc = parseInt('0x' + crc32(event).toString('hex'), 16);
	const message = `${transmissionId}|${timeStamp}|${WEBHOOK_ID}|${crc}`;
	//console.log(`Original signed message: ${message}`);

	const certPem = await downloadAndCache(certUrl);

	const signatureBuffer = Buffer.from(signature, 'base64');
	const verifier = crypto.createVerify('SHA256');
	verifier.update(message);

	return verifier.verify(certPem, signatureBuffer);
}

// Manejador de solicitudes POST al webhook
export const POST = async ({ request }) => {
	try {
		const rawBody = await request.arrayBuffer(); // Obtén el cuerpo crudo
		const headers = request.headers; // Encabezados
		const event = Buffer.from(rawBody); // Convierte el buffer crudo a un formato manejable
		const data = JSON.parse(event.toString()); // Parse JSON para manipular datos

		// Verifica la firma
		const isSignatureValid = await verifySignature(event, headers);
		if (isSignatureValid) {
			//console.log('Signature is valid.');
			//console.log(`Received event:`, JSON.stringify(data, null, 2));

			const orderId = data.resource.custom_id;

			const objectId = new ObjectId(orderId);

			const mongoClient = await client.connect();
			const db = mongoClient.db('chili');
			const orders = db.collection('orders');

			const filter = { _id: objectId };
			const updateDoc = {
				$set: {
					paymentCompleted: true
				}
			};

			await orders.updateOne(filter, updateDoc);

			console.log('New order received');
			notifUser(adminGoogleId, 'Tienes un nuevo pedido');
		} else {
			console.log(`Signature is not valid for ${data?.id} ${headers.get('correlation-id')}`);
		}

		// Responde con éxito a PayPal
		return new Response('Webhook received', { status: 200 });
	} catch (error) {
		console.error('Error processing webhook:', error);
		return new Response('Error', { status: 500 });
	}
};
