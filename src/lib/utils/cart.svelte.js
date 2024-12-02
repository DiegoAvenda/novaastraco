// eslint-disable-next-line no-undef
export let cart = $state([]);

export function addToCart(product, personalization, readingId) {
	cart.push({ ...product, personalization, readingId });
}

export function removeFromCart(productId) {
	const index = cart.findIndex((item) => item.id === productId);
	if (index !== -1) {
		cart.splice(index, 1);
	}
}
