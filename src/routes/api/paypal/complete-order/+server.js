import { get_access_token, endpoint_url } from '$ib/server/paypal.js';
import { json, error } from '@sveltejs/kit';

export async function POST({ request }) {
	try {
		const { order_id, intent } = await request.json();

		//Get the paypal access token
		const access_token = await get_access_token();

		const res = await fetch(endpoint_url + '/v2/checkout/orders/' + order_id + '/' + intent, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${access_token}`
			}
		});

		//handle the response
		const jsonResponse = await res.json();

		//return the JSON response
		return json(jsonResponse); //send minimal data to client
	} catch (err) {
		console.log(err);
		error(500, 'Internal server error');
	}
}
