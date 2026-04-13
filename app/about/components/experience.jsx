"use client";
import Hr from "@/components/Hr";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const experiences = [
	{
		id: 1,
		startDate: "Aug 2023",
		endDate: "Feb 2025",
		company: "OPSWAT",
		position: "Software Developer",
		type: "Part-time",
		location: "Florida, U.S",
		description:
			`
			<ul class="pl-8">
			<li class="list-disc">Maintained and enhanced Linux MetaDefender Kiosk web applications using React,
			TypeScript, Redux Toolkit, and WebSocket to support mitigating removable media
			threats.</li>
			<li class="list-disc">Developed a React web application for modifying kiosk settings, improving data integrity
			through advanced validation with React-Hook-Form and custom regex patterns.</li>
			<li class="list-disc">Designed cross-document messaging (postMessage) to facilitate communication
			between the management site and the product iframe, ensuring framework agnostic
			integration across teams.</li>
			<li class="list-disc">Reduced UI-reported bugs by 50% by migrating select projects to TypeScript and
			implementing 300 unit tests with Jest and React Testing Library.</li>
			<li class="list-disc">Built media file selector and scan details features, optimizing performance and reducing
			memory usage by 70% compared to previous versions by utilizing virtualized lists.</li>
			<li class="list-disc">Improved TeamCity CI/CD pipeline build times by 10% with NPM workspaces.</li>
			<li class="list-disc">Decreased bundle sizes by 12% through the migration of component library build tools
			to Rollup.js.
			</li>
			</ul>
			`,
		skills: [
			"React",
			"Next.js",
			"Laravel",
			"MySQL",
			"JavaScript",
			"TypeScript",
			"Teamwork",
		],
	},
	{
		id: 2,
		startDate: "Jan 2022",
		endDate: "Jan 2023",
		company: "Fairmint",
		position: "Frontend Developer",
		type: "Contract (Remote)",
		location: "California, U.S",
		description:
			`
			<ul class="pl-8">
				<li class="list-disc">Led the end‑to‑end development of Fairmint.com, building a modular React +
				TypeScript frontend and a Node.js (Express) backend integrated with Hygraph 4
				GraphQL APIs for dynamic content delivery and Stripe for secure checkout.</li>
				<li class="list-disc">Architected dual payment infrastructure supporting both fiat (ACH/wire) and on-chain
				stablecoin transactions (USDC/USDT), including wallet integration, transaction signing,
				blockchain event/listener handling, and real-time settlement verification synchronized
				with backend investment and cap table systems.</li>
				<li class="list-disc">Built UI and data flows supporting cap table management, enabling separation of large
				VC investments and aggregation (“roll-up”) of smaller investors into a single entity entry.</li>
				<li class="list-disc">Enhanced UX and performance through responsive design, code‑splitting, lazy loading,
				and image optimization, ensuring fast load times across all devices.</li>
				<li class="list-disc">Implemented secure checkout and order‑processing workflows with robust API error
				handling, data validation, and reliability improvements for transaction flows.
				</li>
				<li class="list-disc">Collaborated closely with designers, QA engineers, and stakeholders in Agile sprints;
				documented technical decisions and supported deployment, monitoring, and ongoing
				maintenance
				</li>
			</ul>
		`,
		skills: [
			"Next.js",
			"Laravel",
			"MySQL",
			"PostgreSQL",
			"JavaScript",
			"TypeScript",
			"MongoDB",
			"Docker",
			"Teamwork",
		],
	},
	{
		id: 3,
		startDate: "Feb 2023",
		endDate: "Nov 2024",
		company: "TexasMattressMakers",
		position: "Full Stack Developer",
		type: "Full time",
		location: "Houston, U.S",
		description:
			`
			<ul class="pl-8">
				<li class="list-disc">Developed a fully headless e‑commerce experience by integrating WordPress +
				WooCommerce APIs with a custom Next.js frontend, improving performance,
				calability, and maintainability.</li>
				<li class="list-disc">Modeled structured content using Advanced Custom Fields (ACF) and Custom Post
				Types (CPT) to define flexible schemas, enabling reusable, component-driven content
				delivery across the frontend.
				</li>
				<li class="list-disc">Implemented secure Stripe payment processing, including checkout flows, server‑side
				validation, and webhook handling for order confirmation and fulfillment.
				</li>
				<li class="list-disc">Converted Figma designs into pixel‑perfect, mobile‑responsive UI, ensuring consistent
				branding and flawless user experience across all devices.
				</li>
				<li class="list-disc">Optimized API communication between the WordPress backend and the Next.js
				frontend, improving data fetching, caching, and overall site performance.
				</li>
				<li class="list-disc">Customized WooCommerce endpoints to support advanced product logic, dynamic
				pricing, and real‑time inventory updates.
				</li>
				<li class="list-disc">Collaborated with designers and stakeholders to refine UX, streamline user flows, and
				deliver a high‑quality, production‑ready headless storefront.
				</li>
				<li class="list-disc">Improved SEO and Core Web Vitals through optimized rendering, image handling, and
				performance tuning in Next.js.
				</li>
			</ul>
			`,
		skills: [
			"Next.js",
			"Generative AI",
			"RAG",
			"Product Engineering",
		],
	},
	{
		id: 4,
		startDate: "Dec 2024",
		endDate: "Apr 2026",
		company: "CoachUp, Inc",
		position: "Lead Full-Stack Engineer",
		type: "Full-time (Remote)",
		location: "Massachusetts, U.S",
		description:
			`<ul class="pl-8">
				<li class="list-disc">Designed and built the entire trainer booking platform end‑to‑end, including
				authentication, booking flows, trainer profiles, messaging, and session management.
				</li>
				<li class="list-disc">Developed a clean, scalable architecture using Next.js, React, Node.js, and modern API
				patterns. </li>
				<li class="list-disc">Reduced frontend bundle size and improved performance by replacing heavy
				dependencies like Redux with TanStack React Query and Zustand, modernizing form
				handling with React Hook Form + Zod, and implementing code-splitting, lazy loading,
				and optimized builds using Next.js, Webpack Analyzer, and Turbopack.</li>
				<li class="list-disc">Implemented media upload pipelines using AWS S3, including secure file handling,
				pre-signed URLs, and optimized storage/access patterns for images and videos.</li>
				<li class="list-disc">Integrated global payment and communication systems, including PayPal, Stripe,
				Mailgun, and automated email flows.</li>
				<li class="list-disc">Implemented analytics and growth tools (GA4, tracking funnels, user behavior insights)
				to support marketing and onboarding.</li>
				<li class="list-disc">Optimized performance and SEO, improving load times, Core Web Vitals, and organic
				discoverability.</li>
				<li class="list-disc">Collaborated with trainers, athletes, and early adopters to refine features and improve
				user experience.</li>
			</ul>`,
		skills: [
			"Java Spring Boot",
			"Microservices",
			"Docker",
			"PostgreSQL",
			"React.js",
		],
	},
];

experiences.reverse();

function Title() {
	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,
						type: "spring",
					}}>
					Professional Experience
				</motion.h1>
			</div>
		</div>
	);
}

function TimelineCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.15, duration: 0.5 }}
			className={`flex ps-10 md:ps-0 ${isEven
				? "md:justify-center md:translate-x-68"
				: "md:justify-center md:-translate-x-68"
				} justify-center mb-4`}>
			<div className="bg-gradient-to-r from-black to-gray-800 text-white px-12 py-3 rounded-xl shadow-lg border border-gray-600 min-w-max">
				<div className="flex items-center justify-center gap-6">
					<div className="text-center">
						<div className="text-sm font-bold">{experience.startDate}</div>
						<div className="text-xs text-gray-300">Start</div>
					</div>
					<div className="w-px h-8 bg-gray-500"></div>
					<div className="text-center">
						<div className="text-sm font-bold">{experience.endDate}</div>
						<div className="text-xs text-gray-300">End</div>
					</div>					<div className="w-px h-8 bg-gray-500"></div>
					<div className="text-center">
						<div className="text-sm font-medium text-gray-400">
							{experience.location}
						</div>
						<div className="text-xs text-gray-300">Location</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

function ExperienceCard({ experience, index, isEven }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.2, duration: 0.6 }}
			className={`relative group ${isEven ? "md:ml-auto md:pl-12" : "md:mr-auto md:pr-12"
				} md:w-1/2`}>
			{" "}
			{/* Card */}
			<div
				className={`bg-white/20 backdrop-blur-sm border border-gray-300/30 rounded-2xl p-6 shadow-lg 
				hover:shadow-xl hover:bg-white/30 transition-all duration-300 ml-12 md:ml-0`}>
				{/* Company & Position */}
				<div className="mb-4">
					<h3 className="font-bold text-xl text-black mb-1">
						{experience.company}
					</h3>
					<h4 className="font-medium text-lg text-gray-700">
						{experience.position}
						<span className="text-sm font-normal text-gray-500 ml-2">
							• {experience.type}
						</span>
					</h4>
				</div>

				{/* Description */}
				<p className="text-gray-600 text-justify leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: experience.description }}>
				</p>

				{/* Skills */}
				<div className="flex flex-wrap gap-2">
					{experience.skills.map((skill, idx) => (
						<span
							key={idx}
							className="bg-gray-200/60 hover:bg-gray-300/60 border border-gray-400/40 text-black px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105">
							{skill}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container px-6 py-10">
			<div
				className="flex justify-center items-center flex-col">
				{children}
			</div>
		</div>
	);
}

export default function Experience() {
	const [showAll, setShowAll] = useState(false);
	const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

	return (
		<>
			<Title />
			<Wrapper>
				{" "}
				<div className="relative w-full max-w-6xl mx-auto">
					{" "}
					{/* Timeline line - hidden on mobile, visible on md+ */}
					<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>
					{/* Mobile timeline line */}
					<div className="md:hidden absolute left-0 w-1 bg-gradient-to-b from-black via-gray-400 to-transparent h-full"></div>{" "}
					{/* Experience cards */}
					<div className="space-y-12 md:space-y-16 relative">
						<AnimatePresence>
							{displayedExperiences.map((experience, index) => (
								<div key={experience.id} className="relative">
									{/* Timeline period card - flows naturally above content */}
									<TimelineCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>

									{/* Timeline dot - positioned at the start of the experience card */}
									<div
										className={`absolute w-6 h-6 bg-black rounded-full border-4 border-white shadow-lg z-30
										md:left-1/2 md:-translate-x-1/2 md:top-4
										left-0 -translate-x-1/2 top-5`}
									/>

									{/* Experience content card */}
									<ExperienceCard
										experience={experience}
										index={index}
										isEven={index % 2 === 1}
									/>
								</div>
							))}
						</AnimatePresence>
					</div>
					{/* Expand/Collapse button */}
					{experiences.length > 3 && (
						<motion.div
							className="flex justify-center mt-12"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.5 }}>
							<button
								onClick={() => setShowAll(!showAll)}
								className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium 
									transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2">
								{showAll ? (
									<>
										Show Less
										<svg
											className="w-4 h-4 transform rotate-180"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								) : (
									<>
										View More Experience
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</>
								)}
							</button>
						</motion.div>
					)}{" "}
					{/* Gradient fade effect at bottom */}
					{!showAll && (
						<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stale-300 to-transparent pointer-events-none"></div>
					)}
				</div>
			</Wrapper>
		</>
	);
}
