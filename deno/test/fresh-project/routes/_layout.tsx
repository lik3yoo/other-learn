import { Handlers, PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {



	return (
		<div class="layout">
			<div className="menu">
				<a href="/">Home</a>
			</div>
			<Component />
		</div>
	);
}
