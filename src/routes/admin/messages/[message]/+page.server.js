import { redirect } from '@sveltejs/kit';
import client from '$lib/server/db.js';

export const load = async ({ locals, params }) => {
	if (!locals.user?.admin) {
		return redirect(302, '/');
	}

	const adminPicture = locals.user.picture;
	const customerId = params.message;

	try {
		const mongoClient = await client.connect();
		const db = mongoClient.db('chili');
		const messages = db.collection('messages');
		const query = { customerId };
		const options = {
			sort: { createdAt: 1 },
			projection: { _id: 0, content: 1, sender: 1 }
		};
		const conversation = await messages.find(query, options).toArray();

		const users = db.collection('users');
		const query2 = { googleId: customerId };
		const options2 = { projection: { _id: 0, name: 1, picture: 1 } };
		const customer = await users.findOne(query2, options2);

		return {
			conversation,
			customerId,
			customer,
			adminPicture
		};
	} catch (e) {
		console.log(e);
	}
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const content = data.get('message');
		const customerId = data.get('customerId');
		try {
			const mongoClient = await client.connect();
			const db = mongoClient.db('chili');
			const messages = db.collection('messages');

			await messages.insertOne({
				customerId,
				sender: 'vendor',
				content,
				createdAt: new Date()
			});

			const users = db.collection('users');
			const filter = { googleId: customerId };
			const updateDoc = {
				$set: {
					lastMessageFrom: 'vendor'
				}
			};

			await users.updateOne(filter, updateDoc);
			return { success: true };
		} catch (e) {
			console.error(e);
		}
	}
};
