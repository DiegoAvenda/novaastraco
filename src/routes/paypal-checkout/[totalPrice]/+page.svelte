<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { loadScript } from '@paypal/paypal-js';
	import { PUBLIC_PAYPAL_CLIENT_ID } from '$env/static/public';
	import { cart } from '$lib/utils/cart.svelte.js';

	let { data } = $props();
	let totalPrice = $page.params.totalPrice;

	const clientId = PUBLIC_PAYPAL_CLIENT_ID;
	let price = 0;
	const intent = 'capture';
	const currency = 'USD';
	let alerts = $state('');

	async function initPaypalButtons() {
		if (data.customerId === null) {
			alerts = 'autenticate primero';
			return;
		}

		let paypal;
		try {
			paypal = await loadScript({
				'client-id': clientId
			});
		} catch (error) {
			console.log('failed to load the paypal js sdk script', error);
		}

		if (paypal) {
			if (data.customerId === null) {
				toggle = true;
				return;
			}
			try {
				let paypal_buttons = await paypal.Buttons({
					style: {
						layout: 'vertical',
						color: 'blue',
						shape: 'rect',
						label: 'paypal'
					},
					createOrder: function (data, actions) {
						//https://developer.paypal.com/docs/api/orders/v2/#orders_create
						return fetch('/api/paypal/create-order', {
							method: 'post',
							headers: { 'Content-Type': 'application/json; charset=utf-8' },
							body: JSON.stringify({ intent: intent, items: cart, totalPrice: totalPrice })
						})
							.then((response) => response.json())
							.then((order) => {
								return order.id;
							});
					},
					onApprove: async function (data, actions) {
						let order_id = data.orderID;
						console.log('order_id: ', order_id);
						return fetch('http://localhost:5173/api/paypal/complete-order', {
							method: 'post',
							headers: { 'Content-Type': 'application/json; charset=utf-8' },
							body: JSON.stringify({
								intent: intent,
								order_id: order_id
							})
						})
							.then((response) => response.json())
							.then((order_details) => {
								console.log('paypal order details: ', order_details); //https://developer.paypal.com/docs/api/orders/v2/#orders_capture!c=201&path=create_time&t=response
								let intent_object = intent === 'auhtorize' ? 'authorizations' : 'captures';
								//Custom Successful Message
								alerts = 'Thank you for your payment :)';
								//close out the paypal buttons that were rendered
								paypal_buttons.close();
							});
					},
					onCancel: function (data) {
						alerts = 'order canceled';
					},
					onError: function (err) {
						console.log('payment error', err);
					}
				});
				paypal_buttons.render('#paypal-container');
			} catch (error) {
				console.log(error);
			}
			return paypal;
		}
		return null;
	}

	onMount(async () => {
		initPaypalButtons();
	});
</script>

paypal checkout Total price: ${totalPrice}
<div id="paypal-container"></div>
{#if alerts !== ''}
	<p>{alerts}</p>
{/if}
