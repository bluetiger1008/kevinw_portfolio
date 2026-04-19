import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

export const metadata = {
	metadataBase: new URL("https://kevinw-portfolio.vercel.app"),
	title: "Kevin Wang | Portofolio",

	description:
		"Kevin Wang, Product-Minded Software Engineer specializing in Next.js, Spring Boot, and AI Solutions. Founder & CTO of SportyConnects.",

	author: "Kevin Wang",
	siteUrl: "https://kevinw-portfolio.vercel.app",
	applicationName: "Kevin",

	keywords: [
		"kevinwang",
		"kevinwang",
		"kevin wang",
		"wang",
		"kevin porto",
	],

	openGraph: {
		type: "website",
		url: "https://kevinw-portfolio.vercel.app",
		title: "Kevin Wang | Portofolio",
		siteName: "Kevin Wang | Portofolio",
		description: "My name is Kevin Wang, This is my portofolio website.",
		images: [
			{
				url: "/og_kevin_new.png",
				alt: "Kevin Wang Portofolio",
				width: 1200,
				height: 630,
			},
		],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Kevin Wang",
	url: "https://www.kevinwangport.online",
	jobTitle: "Full Stack Software Engineer",
	worksFor: [
		{ "@type": "Organization", name: "MGG Software" },
		{ "@type": "Organization", name: "Intervyou" },
	],
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "Universitas of Calgary",
	},
	sameAs: [
		"https://github.com/bluetiger1008",
		"https://www.linkedin.com/in/",
		"https://www.instagram.com/bluetiger1008/",
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				{/* <Chat /> */}
				<Analytics />
			</body>
		</html>
	);
}
