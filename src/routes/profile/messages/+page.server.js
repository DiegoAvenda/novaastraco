import { redirect } from '@sveltejs/kit';
import client from '$lib/server/db.js';
import { notifUser } from '$lib/server/push-subscription';
import { ADMIN_GOOGLE_ID } from '$env/static/private';

export const load = async ({ locals }) => {
	if (!locals.user) {
		return redirect(302, '/login');
	}

	const customerId = locals.user.googleId;
	const customerPicture = locals.user.picture;
	const customerName = locals.user.name;
	const customerChatLastMessageFrom = locals.user.lastMessageFrom;

	try {
		const mongoClient = await client.connect();
		const db = mongoClient.db('chili');
		const messages = db.collection('messages');
		const query = { customerId };
		const options = {
			sort: { createdAt: 1 },
			projection: { _id: 0 }
		};

		const conversation = await messages.find(query, options).toArray();

		return {
			conversation,
			customerPicture,
			customerName,
			customerChatLastMessageFrom
		};
	} catch (e) {
		console.log(e);
	}
};

export const actions = {
	default: async ({ request, locals }) => {
		const customerId = locals.user?.googleId;
		const data = await request.formData();
		const content = data.get('message');

		try {
			const mongoClient = await client.connect();
			const db = mongoClient.db('chili');
			const messages = db.collection('messages');

			await messages.insertOne({
				customerId,
				sender: 'customer',
				content,
				createdAt: new Date()
			});

			const users = db.collection('users');
			const filter = { googleId: customerId };
			const updateDoc = {
				$set: {
					lastMessageFrom: 'customer'
				}
			};

			await users.updateOne(filter, updateDoc);
			notifUser(ADMIN_GOOGLE_ID, 'You have a new message');
			return { success: true };
		} catch (e) {
			console.error(e);
		}
	}
};
