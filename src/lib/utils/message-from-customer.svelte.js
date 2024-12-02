// eslint-disable-next-line no-undef
export const messageFromCustomer = $state({ count: 0 });

export function oneMessageFromCustomerLess() {
	messageFromCustomer.count -= 1;
}
