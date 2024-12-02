// eslint-disable-next-line no-undef
export const messageFromAdmin = $state({ count: 0 });

export function newMessageFromAdmin() {
	messageFromAdmin.count = 1;
}

export function noMessageFromAdmin() {
	messageFromAdmin.count = 0;
}
