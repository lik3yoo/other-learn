import {} from "$fresh/server.ts";
import client from "../../db/connect.ts";

export const handler = async (req: Request, ctx) => {
	const { username, password } = await req.json();
	console.log(username, password);
	if (!username || !password) {
		return new Response(JSON.stringify({ message: "请输入用户名和密码" }), {
			status: 400,
		});
	}
	try {
		const r = await client.query(
			`SELECT * FROM users WHERE username = ${username} AND password = ${password}`,
		);
		if (r?.length) {
			const headers = new Headers();
			headers.set(
				"Set-Cookie",
				"msToken=q72fLQriEjhOp4ZHNdzWxJvsj5-auLK5PiyMH28tMHaP6IginXG3M1ReghvDA3x6JoLgL9xyPkLbYtK-JzGBx6NMWetSpgcNvFTxJBI8lfD_mZnH-1FNVNsLgBV1RH1c; expires=Thu, 15 Aug 2024 07:20:07 GMT; domain=localhost; path=/; secure",
			);
			return new Response(JSON.stringify({ message: "登录成功" }), {
				headers,
				status: 200,
			});
		} else {
			return new Response(JSON.stringify({ message: "账号密码错误" }), {
				status: 500,
			});
		}
	} catch (err) {
		return new Response(JSON.stringify({ message: "账号密码错误", err }), {
			status: 500,
		});
	}
};
