import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
	const cookies = req.headers.get("cookie");
	const token = cookies?.split(";").find((c) => c.trim().startsWith("msToken="))
		?.split("=")[1];
	const isLogin = req.url.includes("login");

	if (!token && !isLogin) {
		ctx.state.logout = true;
		return new Response("", {
			status: 307,
			headers: { Location: "/login" },
		});
	}
	const resp = await ctx.next();
	return resp;
}
