import { Head } from "$fresh/runtime.ts";
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
	GET(req, ctx) {
		const { logout } = ctx.state;

		if (logout) {
			return new Response("", {
				status: 301,
				headers: { Location: "/login" },
			});
		}
		return ctx.render();
	},
};

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<div class="px-4 py-8 mx-auto bg-[#86efac]">
				<div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
					<img
						class="my-6"
						src="/logo.svg"
						width="128"
						height="128"
						alt="the Fresh logo: a sliced lemon dripping with juice"
					/>
					<h1 class="text-4xl font-bold">Home</h1>
					<p class="my-4">
						Welcome to the home page.
					</p>
				</div>
			</div>
		</>
	);
}
