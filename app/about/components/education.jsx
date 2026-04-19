import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMedal,
	faGraduationCap,
	faTrophy,
	faAward,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Me4 from "@/public/image/me4.jpeg";
import Me5 from "@/public/image/me5.jpg";
import Me6 from "@/public/image/me6.jpg";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
			<motion.div
				className="flex justify-center items-start flex-col mb-5"
				initial={{
					opacity: 0,
					y: 50,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 0.3,
					duration: 0.8,
					type: "spring",
					stiffness: 100,
				}}>
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	const [isExpanded, setIsExpanded] = useState(false);

	const achievementsByYear = {
		2025: [
			{
				icon: faMedal,
				title: "1st place (Gold Medal)",
				subtitle: "Fesmaro IT Business Competition",
				date: "Mar 2025",
				color: "from-yellow-400 to-orange-500",
			},
			{
				icon: faAward,
				title: "Finalist",
				subtitle: "Hackfest Build to Billion 2025",
				date: "Apr 2025",
				color: "from-blue-500 to-purple-600",
			},
			{
				icon: faMedal,
				title: "3rd place (Bronze Medal)",
				subtitle: "Faculty of Engineering Most Outstanding Student",
				date: "Feb 2025",
				color: "from-amber-600 to-yellow-600",
			},
		],
		2024: [
			{
				icon: faTrophy,
				title: "Special Award | Gold Medal | Incubation Opportunity",
				subtitle: "Indonesia Inventor Day 2024 (IID)",
				date: "Aug 2024",
				color: "from-yellow-400 to-orange-500",
			},
			{
				icon: faMedal,
				title: "1st place (Gold Medal)",
				subtitle: "Tech & Trade Expo 2024",
				date: "Jul 2024",
				color: "from-yellow-400 to-orange-500",
			},
			{
				icon: faMedal,
				title: "2nd place (Silver Medal)",
				subtitle: "IdeaFest 2024",
				date: "Jul 2024",
				color: "from-slate-400 to-slate-500",
			},
			{
				icon: faAward,
				title: "Finalist",
				subtitle: "37th National Student Science Week (PIMNAS)",
				date: "Oct 2024",
				color: "from-blue-500 to-purple-600",
			},
			{
				icon: faMedal,
				title: "3rd place (Bronze Medal)",
				subtitle: "Student Digital Innovation Competition (LIDM)",
				date: "Jun 2024",
				color: "from-amber-600 to-yellow-600",
			},
			{
				icon: faMedal,
				title: "3rd place (Bronze Medal)",
				subtitle: "Fesmaro UI/UX Design",
				date: "Jun 2024",
				color: "from-amber-600 to-yellow-600",
			},
		],
		2023: [
			{
				icon: faAward,
				title: "Finalist",
				subtitle: "36th National Student Science Week (PIMNAS)",
				date: "Nov 2023",
				color: "from-blue-500 to-purple-600",
			},
			{
				icon: faMedal,
				title: "3rd place (Bronze Medal)",
				subtitle: "FORKAFEST 3.0 Web Development competition",
				date: "Jan 2023",
				color: "from-amber-600 to-yellow-600",
			},
		],
	};

	// Flatten all achievements into a single array for easier limiting
	const allAchievements = Object.entries(achievementsByYear)
		.sort(([a], [b]) => parseInt(b) - parseInt(a))
		.flatMap(([year, achievements]) =>
			achievements.map((achievement) => ({ ...achievement, year }))
		);

	const visibleAchievements = isExpanded
		? allAchievements
		: allAchievements.slice(0, 6);
	const hasMoreAchievements = allAchievements.length > 6;

	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				{" "}
				{/* Header */}
				<motion.div
					className="text-center space-y-2"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						Education
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						Get to know more about my educational background.
					</p>
				</motion.div>
				{/* Main Content */}
				<div className="grid grid-cols-1 gap-8">
					{/* Education Section - Left */}
					<motion.div
						className="px-5"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<div className="font-medium text-lg mb-4">
							Aug 2016 - Dec 2020
						</div>
						<div>
							<h2 className="font-semibold text-xl">
								University of Calgary
							</h2>
							<h3 className="text-md font-normal mb-3">
								Bachelor | Computer Science
							</h3>
							{/* <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me5}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me4}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
								<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
									<Image
										src={Me6}
										width={400}
										height={225}
										alt="University"
										className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
									/>
								</div>
							</div> */}
							<div className="flex items-center gap-2">
								<p className="text-gray-600 text-justify title text-lg">
									I graduated as one of the{" "}
									<span className="text-black font-medium">
										Most Outstanding Students
									</span>{" "}
									from{" "}
									<span className="text-black font-medium">
										Universiy of Calgary
									</span>
									, completing my Bachelor in{" "}
									<span className="text-black font-medium">
										Computer Science
									</span>{" "}
									with a perfect GPA. My academic journey
									was defined by a balance of rigorous
									technical research and high-stakes
									execution.
									<br />
									{/* <br /> */}
									{/* As the{" "}
									<span className="text-black font-medium">
										Co-Lead of Google Developer Group on
										Campus (GDGoC)
									</span>
									, I spearheaded technical initiatives and
									mentored a community of developers. Beyond
									the classroom, I secured multiple national
									and international honors, including being a{" "}
									<span className="text-black font-medium">
										two-time PIMNAS Finalist and an
										Indonesia Inventor Day Gold Medalist
									</span>
									. */}
									{/* <br /> */}
									<br />
									My education served as the engineering
									foundation for my current work in{" "}
									<span className="text-black font-medium">
										Enterprise Architecture
									</span>{" "}
									and{" "}
									<span className="text-black font-medium">
										AI Implementation
									</span>
									. I remain committed to bridging academic
									innovation with production-ready, scalable
									software solutions.
								</p>
							</div>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
									GPA: 4 out of 4
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</Wrapper>
	);
}
