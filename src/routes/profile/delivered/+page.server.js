import { redirect } from '@sveltejs/kit';
import client from '$lib/server/db.js';

export const load = async ({ locals }) => {
	if (!locals.user) {
		return redirect(302, '/login');
	}

	const customerId = locals.user.googleId;

	try {
		const mongoClient = await client.connect();
		const db = mongoClient.db('chili');
		const ordersCollection = db.collection('orders');
		const query = { customerId, delivered: true };
		const options = {
			sort: { createdAt: 1 }
		};

		const rawOrders = await ordersCollection.find(query, options).toArray();

		const orders = rawOrders.map((order) => ({
			...order,
			_id: order._id.toString(),
			createdAt: order.createdAt.toLocaleTimeString('en-US', {
				day: '2-digit',
				month: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			}),
			deliveredAt: order.createdAt.toLocaleTimeString('en-US', {
				day: '2-digit',
				month: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
				hour12: false
			}),
			items: order.items.map((item) => ({
				...item,
				reading: item.reading ? item.reading.toString('base64') : null
			}))
		}));

		return {
			orders
		};
	} catch (e) {
		console.log(e);
	}
};
