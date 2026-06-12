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
	metadataBase: new URL("https://www.kenjihayashiport.online"),
	title: "Kenji Hayashi | Portofolio",

	description:
		"Kenji Hayashi, Product-Minded Software Engineer specializing in Next.js, Spring Boot, and AI Solutions. Founder & CTO of SportyConnects.",

	author: "Kenji Hayashi",
	siteUrl: "https://www.kenjihayashiport.online",
	applicationName: "Kenji",

	keywords: [
		"kenjihayashi",
		"kenji hayashi",
		"hayashi",
		"kenji porto",
	],

	openGraph: {
		type: "website",
		url: "https://www.kenjihayashiport.online",
		title: "Kenji Hayashi | Portofolio",
		siteName: "Kenji Hayashi | Portofolio",
		description: "My name is Kenji Hayashi, This is my portofolio website.",
		images: [
			{
				url: "/og_kenji_new.png",
				alt: "Kenji Hayashi Portofolio",
				width: 1200,
				height: 630,
			},
		],
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Kenji Hayashi",
	url: "https://www.kenjihayashiport.online",
	jobTitle: "Full Stack Software Engineer",
	worksFor: [
		{ "@type": "Organization", name: "MGG Software" },
		{ "@type": "Organization", name: "Intervyou" },
	],
	alumniOf: {
		"@type": "CollegeOrUniversity",
		name: "University of Florida",
	},
	sameAs: [
		"https://github.com/bluetiger1008",
		"https://www.linkedin.com/in/ikenjihayashi",
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
