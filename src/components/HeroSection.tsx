import React from "react";
import HeroVid from "../assets/herovid.mp4";
import HeroImg from "../assets/heroimg.webp";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
	return (
		<div className="relative w-full h-screen overflow-hidden bg-[#0f0f0f]">
			{/* Video Background */}
			<video
				className="absolute top-0 right-0 h-full w-full md:w-[75%] object-cover pointer-events-none"
				autoPlay
				loop
				muted
				playsInline
			>
				<source src={HeroVid} type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Overlay and Content */}
			<div className="absolute inset-0 flex flex-col-reverse md:flex-row items-center justify-center md:hidden px-4 md:mt-0 md:px-8 md:w-[70%] md:mx-auto h-full pb-5 pt-10 md:pt-0 md:pb-0">
				<div className="w-[70vw] md:w-1/3 lg:w-2/5">
					<img
						src={HeroImg}
						alt="GAI"
						className="w-full h-auto max-w-xs md:max-w-[80%] lg:w-[75%] rounded-lg object-cover"
					/>
				</div>
				<div className="w-full md:w-2/3 flex flex-col justify-center items-stretch text-left space-y-3 text-white h-full">
					<h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
						Enhance Tradition and Innovation for an Exceptional
						Outdoor Experience
					</h1>
					<p className="text-sm md:text-lg lg:text-xl">
						Global AdImpact excels in delivering powerful
						out-of-home (OOH) advertising through both digital and
						traditional channels. We combine cutting-edge technology
						with classic methods to enhance your brand's visibility.
						Our solutions are designed to create memorable
						impressions and drive impactful results.
					</p>
					<button className="bg-[#0f0f0f] align-baseline text-gray-200 font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-md border border-gray-500 shadow-md hover:border-white transition-all duration-300 flex items-center space-x-2 group relative overflow-hidden w-max">
						<span className="text-sm sm:text-base group-hover:text-white transition-all duration-300">
							Boost Your Brand Visibility Now
						</span>
						<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform duration-300 group-hover:translate-x-2 motion-safe:animate-pulse" />
					</button>
				</div>
			</div>

			{/* HeroSection tablet and pc */}
			<div className="absolute h-full w-full items-center justify-center px-4 hidden md:flex">
				<div className="flex gap-10 md:flex-row text-white md:w-[90vw] lg:w-[67vw]">
					<div className="bg-[#0f0f0f] p-5 w-max rounded-xl">
						<img className="rounded-lg" src={HeroImg} alt="" />
					</div>
					<div className="w-full md:w-[90vw] lg:w-[60%] flex md:flex-col justify-evenly">
						<h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
							Enhance Tradition and Innovation for an Exceptional
							Outdoor Experience
						</h1>
						<p className="text-sm md:text-lg lg:text-xl">
							Global AdImpact excels in delivering powerful
							out-of-home (OOH) advertising through both digital
							and traditional channels. We combine cutting-edge
							technology with classic methods to enhance your
							brand's visibility. Our solutions are designed to
							create memorable impressions and drive impactful
							results.
						</p>
						<button className="bg-[#0f0f0f] align-baseline text-gray-200 font-medium py-3 px-6 rounded-md border border-gray-500 shadow-md hover:border-white transition-all duration-300 flex items-center space-x-2 group relative overflow-hidden w-max">
							<span className="group-hover:text-white transition-all duration-300">
								Boost Your Brand Visibility Now
							</span>
							<ArrowRight className="w-5 h-5 text-gray-400 transition-transform duration-300 group-hover:translate-x-2 motion-safe:animate-pulse" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
