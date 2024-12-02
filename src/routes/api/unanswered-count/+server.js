import client from '$lib/server/db.js';

export async function GET() {
	try {
		const mongoClient = await client.connect();
		const db = mongoClient.db('chili');
		const users = db.collection('users');
		const query = { lastMessageFrom: 'customer' };

		const count = await users.countDocuments(query);
		return new Response(String(count));
	} catch (e) {
		console.log(e);
	}
}
