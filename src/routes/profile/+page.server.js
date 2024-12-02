import { redirect } from '@sveltejs/kit';
import client from '$lib/server/db.js';

export const load = async ({ locals }) => {
	if (!locals.user) {
		return redirect(302, '/login');
	}

	const username = locals.user.name;
	const customerId = locals.user.googleId;

	try {
		const mongoClient = await client.connect();
		const db = mongoClient.db('chili');
		const ordersCollection = db.collection('orders');
		const query = { customerId };
		const options = {
			sort: { createdAt: 1 }
		};

		const rawOrders = await ordersCollection.find(query, options).toArray();

		const orders = rawOrders.map((order) => ({
			...order,
			_id: order._id.toString(),
			items: order.items.map((item) => ({
				...item,
				reading: item.reading ? item.reading.toString('base64') : null
			}))
		}));

		const deliveredOrders = orders.filter((order) => order.delivered);
		const pendingOrders = orders.filter((order) => !order.delivered);

		return {
			deliveredOrders,
			pendingOrders,
			username
		};
	} catch (e) {
		console.log(e);
	}
};
