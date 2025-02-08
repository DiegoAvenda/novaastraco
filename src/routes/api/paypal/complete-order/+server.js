import { get_access_token, endpoint_url } from '$lib/server/paypal.js';
import { json, error } from '@sveltejs/kit';

export async function POST({ request }) {
	try {
		const { order_id, intent } = await request.json();

		const access_token = await get_access_token();

		const res = await fetch(endpoint_url + '/v2/checkout/orders/' + order_id + '/' + intent, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${access_token}`
			}
		});

		const jsonResponse = await res.json();

		return json(jsonResponse); //send minimal data to client
	} catch (err) {
		console.log(err);
		error(500, 'Internal server error');
	}
}
