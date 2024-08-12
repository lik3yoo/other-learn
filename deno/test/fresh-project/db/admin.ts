import client from "./connect.ts";

const admin = {
	getUsers: async () => await client.query("SELECT * FROM users"),
	login: async (account: string, password: string) => {
		const sql =
			`SELECT * FROM users WHERE account = ${account} AND password = ${password}`;
		return await client.query(
			sql,
		);
	},
};

export default admin;
