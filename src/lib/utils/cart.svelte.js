// eslint-disable-next-line no-undef
export let cart = $state([]);

export function addToCart(product, personalization, readingId) {
	// Verificar si ya existe una lectura con la misma personalización
	const isDuplicate = cart.some(
		(item) =>
			item.readingId === readingId &&
			item.personalization.toLowerCase() === personalization.toLowerCase()
	);

	// Solo agregar si no es un duplicado
	if (!isDuplicate) {
		cart.push({ ...product, personalization, readingId });
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
