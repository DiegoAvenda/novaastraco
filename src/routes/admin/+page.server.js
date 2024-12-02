import client from '$lib/server/db.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
	if (!locals.user.admin) {
		return redirect(302, '/');
	}

	try {
		const mongoClient = await client.connect();
		const db = mongoClient.db('chili');
		const ordersCollection = db.collection('orders');
		const query = { paymentCompleted: true };
		const options = { sort: { createdAt: 1 } };

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

		if (locals.user) {
			return {
				deliveredOrders,
				pendingOrders,
				userPicture: locals.user.picture,
				username: locals.user.name
			};
		}
		return {
			deliveredOrders,
			pendingOrders
		};
	} catch (e) {
		console.log(e);
	}
};
