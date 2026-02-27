import Image from "next/image";
import { BlogPosts } from "app/components/posts";

export default function Page() {
	return (
		<section>
			<div className="mb-8 flex items-center justify-end gap-4">
				<div className="text-right">
					<h1 className="mb-1 text-3xl font-semibold tracking-tighter">
						Guillermo Lopez Gomez
					</h1>
					<p className="text-lg text-neutral-600 dark:text-neutral-400">
						CTO & Backend Engineer
					</p>
				</div>
				<Image
					src="/pixel-image.png"
					alt="Guillermo Lopez Gomez"
					width={120}
					height={120}
					className="shrink-0 rounded-lg"
					priority
				/>
			</div>
			<p className="mb-8">
				From complex distributed systems with microservices to fullstack apps
				in Next.js or a simple monolith in Hono — the need dictates the
				architecture. I lead engineering teams, make technical decisions, and
				sometimes write frontend code — but don't tell anyone.
			</p>

			<h2 className="mb-4 text-xl font-semibold tracking-tighter">Stack</h2>
			<p className="mb-8 text-neutral-600 dark:text-neutral-400 text-sm">
				TypeScript · NestJS · Express · Hono · React · Next.js · React
				Native · Kafka · RabbitMQ · MQTT · Redis · MongoDB · PostgreSQL ·
				Docker · Kubernetes · Terraform · AWS
			</p>

			<h2 className="mb-4 text-xl font-semibold tracking-tighter">
				Open Source
			</h2>
			<ul className="mb-8 text-sm space-y-2">
				<li>
					<a
						href="https://www.npmjs.com/package/translate-kit"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2"
					>
						translate-kit
					</a>
					<span className="text-neutral-600 dark:text-neutral-400">
						{" "}— npm package to streamline i18n setup and maintenance in Next.js with AI
					</span>
				</li>
				<li>
					<a
						href="https://github.com/guillermolg00/nextjs-stripe-store"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2"
					>
						nextjs-stripe-store
					</a>
					<span className="text-neutral-600 dark:text-neutral-400">
						{" "}— ready-to-use Next.js + Stripe template with all the basics built in
					</span>
				</li>
				<li>
					<a
						href="https://github.com/guillermolg00/mongodb-mcp-vercel"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2"
					>
						mongodb-mcp-vercel
					</a>
					<span className="text-neutral-600 dark:text-neutral-400">
						{" "}— read-only MongoDB MCP server for serverless deployment on Vercel
					</span>
				</li>
				<li>
					<a
						href="https://github.com/triggerdotdev/trigger.dev"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium underline decoration-neutral-400 dark:decoration-neutral-600 underline-offset-2"
					>
						trigger.dev
					</a>
					<span className="text-neutral-600 dark:text-neutral-400">
						{" "}— one-time contributor
					</span>
				</li>
			</ul>

			<h2 className="mb-4 text-xl font-semibold tracking-tighter">
				Experience
			</h2>
			<table className="mb-8 w-full text-sm">
				<tbody>
					<tr className="border-b border-neutral-200 dark:border-neutral-800">
						<td className="py-2 pr-4 font-medium">Vlue Logistics</td>
						<td className="py-2 pr-4 text-neutral-600 dark:text-neutral-400">
							Backend Lead → CTO
						</td>
						<td className="py-2 text-neutral-600 dark:text-neutral-400">
							2023 — Present
						</td>
					</tr>
					<tr className="border-b border-neutral-200 dark:border-neutral-800">
						<td className="py-2 pr-4 font-medium">InformageStudio / Mutter</td>
						<td className="py-2 pr-4 text-neutral-600 dark:text-neutral-400">
							Backend & DevOps
						</td>
						<td className="py-2 text-neutral-600 dark:text-neutral-400">
							2022 — 2023
						</td>
					</tr>
					<tr className="border-b border-neutral-200 dark:border-neutral-800">
						<td className="py-2 pr-4 font-medium">Contapp Digital</td>
						<td className="py-2 pr-4 text-neutral-600 dark:text-neutral-400">
							PM & Backend Lead
						</td>
						<td className="py-2 text-neutral-600 dark:text-neutral-400">
							2021 — 2023
						</td>
					</tr>
					<tr>
						<td className="py-2 pr-4 font-medium">Freelance</td>
						<td className="py-2 pr-4 text-neutral-600 dark:text-neutral-400">
							Full Stack Developer
						</td>
						<td className="py-2 text-neutral-600 dark:text-neutral-400">
							2020 — Present
						</td>
					</tr>
				</tbody>
			</table>

			<h2 className="mb-4 text-xl font-semibold tracking-tighter">
				Recent Posts
			</h2>
			<div className="my-8">
				<BlogPosts />
			</div>
		</section>
	);
}
