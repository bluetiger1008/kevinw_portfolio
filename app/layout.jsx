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
	metadataBase: new URL("https://www.alvalens.my.id"),
	title: "Kevin Wang | Portofolio",

	description:
		"Kevin Wang, Product-Minded Software Engineer specializing in Next.js, Spring Boot, and AI Solutions. Founder & CTO of SportyConnects.",

	author: "Kevin Wang",
	siteUrl: "https://www.alvalens.my.id",
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
		url: "https://www.alvalens.my.id",
		title: "Kevin Wang | Portofolio",
		siteName: "Kevin Wang | Portofolio",
		description: "My name is Kevin Wang, This is my portofolio website.",
		images: [
			{
				url: "/og-image-rev.png",
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
	url: "https://www.alvalens.my.id",
	jobTitle: "Full Stack Software Engineer",
	worksFor: [
		{ "@type": "Organization", name: "MGG Software" },
		{ "@type": "Organization", name: "Intervyou" },
	],
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "Universitas of Florida",
	},
	sameAs: [
		"https://github.com/Alvalens",
		"https://www.linkedin.com/in/alvalen-shafel-8a081a254/",
		"https://www.instagram.com/alvalens_/",
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
