import client from '$lib/server/db.js';
import { ObjectId } from 'mongodb';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals, params }) => {
	if (!locals.user) {
		return redirect(302, '/login');
	}
	const orderId = params.details;
	const objectId = new ObjectId(orderId);

	try {
		const mongoClient = await client.connect();
		const db = mongoClient.db('chili');
		const orders = db.collection('orders');
		const rawOrder = await orders.findOne({ _id: objectId });

		const order = {
			...rawOrder,
			_id: rawOrder._id.toString(),
			createdAt: rawOrder.createdAt.toLocaleTimeString('en-US', {
				day: '2-digit',
				month: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			}),
			deliveredAt: rawOrder.deliveredAt
				? rawOrder.deliveredAt.toLocaleTimeString('en-US', {
						day: '2-digit',
						month: '2-digit',
						hour: '2-digit',
						minute: '2-digit',
						hour12: false
					})
				: null,
			items: rawOrder.items.map((item) => ({
				...item,
				reading: item.reading ? item.reading.toString('base64') : null
			}))
		};

		return {
			order
		};
	} catch (e) {
		console.log(e);
	}
};
