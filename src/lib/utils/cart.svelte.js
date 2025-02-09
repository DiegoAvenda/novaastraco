// eslint-disable-next-line no-undef
export let cart = $state([]);

export function addToCart(product, personalization, readingId) {
	const isDuplicate = cart.some(
		(item) =>
			item.readingId === readingId &&
			item.personalization.toLowerCase() === personalization.toLowerCase()
	);

	if (!isDuplicate) {
		cart.push({ ...product, personalization, readingId, quantity: 1 });
		return true;
	}

	return false;
}

export function removeFromCart(productId) {
	const index = cart.findIndex((item) => item.id === productId);
	if (index !== -1) {
		cart.splice(index, 1);
	}
}
