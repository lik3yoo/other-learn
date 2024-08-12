// TODO: 1.跳转到注册 2.登录加密
import { RouteConfig } from "$fresh/server.ts";
import { useState } from "preact/hooks";

export const config: RouteConfig = {
	skipInheritedLayouts: true,
};

export default function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: Event) => {
		console.log(username, password);
		e.preventDefault();
		try {
			const res = await fetch("/api/login", {
				method: "POST",
				body: JSON.stringify({ username, password }),
			});
			const data = await res.json();
			console.log(data);
			// window.location.href = "/";
			globalThis.history.pushState({}, "", "/");
			globalThis.dispatchEvent(new Event("popstate"));
		} catch (err) {
			setMessage(err);
		}
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						alt="logo"
						src="/logo.svg"
						className="mx-auto h-10 w-auto"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						登录你的账号
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form action="" onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="account"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								账号
							</label>
							<div className="mt-2">
								<input
									value={username}
									onChange={(e: any) => setUsername(e.target.value)}
									id="account"
									name="account"
									className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									密码
								</label>
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-indigo-600 hover:text-indigo-500"
									>
										忘记密码?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									value={password}
									onChange={(e: any) => setPassword(e.target.value)}
								/>
							</div>
						</div>
						{!!message && <p className="text-red-500">{message}</p>}
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								登录
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						还没有账号?
						<a
							href="#"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-2"
						>
							注册
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
