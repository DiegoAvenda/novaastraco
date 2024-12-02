import { redirect } from '@sveltejs/kit';
import client from '$lib/server/db.js';

export const load = async ({ locals }) => {
	if (!locals.user?.admin) {
		return redirect(302, '/');
	}

	try {
		const mongoClient = await client.connect();
		const db = mongoClient.db('chili');
		const users = db.collection('users');
		const query = { lastMessageFrom: 'customer' };
		const options = {
			sort: { createdAt: 1 },
			projection: { _id: 0, googleId: 1, name: 1 }
		};
		const conversations = await users.find(query, options).toArray();

		return {
			conversations
		};
	} catch (e) {
		console.log(e);
	}
};
