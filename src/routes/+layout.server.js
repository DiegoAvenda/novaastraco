export function load({ locals }) {
	if (locals.user) {
		const username = locals.user.name;
		const customerLastMessageFrom = locals.user.lastMessageFrom;
		const admin = locals.user.admin;
		return { username, admin, customerLastMessageFrom };
	}
}
