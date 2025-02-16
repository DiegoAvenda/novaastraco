import { redirect } from '@sveltejs/kit';
import client from '$lib/server/db.js';

export const load = async ({ locals }) => {
	if (!locals.user) {
		return redirect(302, '/login');
	}

	const customerId = locals.user.googleId;
	const username = locals.user.name;

	try {
		const mongoClient = await client.connect();
		const db = mongoClient.db('chili');
		const ordersCollection = db.collection('orders');
		const query = { customerId, delivered: false };
		const options = {
			sort: { createdAt: 1 }
		};

		const rawOrders = await ordersCollection.find(query, options).toArray();

		const orders = rawOrders.map((order) => ({
			...order,
			_id: order._id.toString(),
			createdAt: order.createdAt.toLocaleTimeString('en-US', {
				minute: '2-digit',
				hour: '2-digit',
				day: '2-digit',
				month: '2-digit',
				year: '2-digit',
				hour12: false
			})
		}));

		return {
			orders,
			username
		};
	} catch (e) {
		console.log(e);
	}
};
