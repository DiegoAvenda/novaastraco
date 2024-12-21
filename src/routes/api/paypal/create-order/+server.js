import { json, error } from '@sveltejs/kit';
import { get_access_token, endpoint_url } from '$lib/server/paypal.js';
import client from '$lib/server/db.js';

export async function POST({ request, locals }) {
	const customerId = locals.user.googleId;

	try {
		//get the paypal access token
		const access_token = await get_access_token();

		const { intent, items, totalPrice } = await request.json();

		const totalPriceNum = Number(totalPrice);
		const totalValue = totalPriceNum.toFixed(2);

		// Mapeo de los items al formato PayPal
		const purchaseItems = items.map((item) => ({
			name: item.name,
			quantity: '1',
			unit_amount: {
				currency_code: 'USD',
				value: item.price.toFixed(2)
			}
		}));

		const mongoClient = await client.connect();
		const db = mongoClient.db('chili');

		const users = db.collection('users');
		const query = { googleId: customerId };
		const user = await users.findOne(query);

		const customerName = user.name;

		const orders = db.collection('orders');

		const result = await orders.insertOne({
			items,
			customerId,
			customerName,
			totalPrice,
			createdAt: new Date(),
			delivered: false,
			paymentCompleted: false
		});

		// Formato del pedido para PayPal
		const order_data_json = {
			intent: intent.toUpperCase(),
			purchase_units: [
				{
					amount: {
						currency_code: 'USD',
						value: totalValue,
						breakdown: {
							item_total: {
								currency_code: 'USD',
								value: totalValue
							}
						}
					},
					custom_id: result.insertedId,
					items: purchaseItems
				}
			]
		};

		//send the request to paypal
		const res = await fetch(endpoint_url + '/v2/checkout/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${access_token}`
			},
			body: JSON.stringify(order_data_json)
		});

		//handle the response
		const jsonResponse = await res.json();

		//return the JSON response
		return json(jsonResponse); //send minimal data to client
	} catch (err) {
		console.log(err);
		error(500, 'Internal server error');
	}
}
