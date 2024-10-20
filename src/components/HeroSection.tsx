import React from "react";
import HeroVid from "../assets/herovid.mp4";
import HeroImg from "../assets/heroimg.webp";

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
			<div className="absolute inset-0 flex flex-col-reverse md:flex-row items-center justify-center px-4 md:mt-0 md:px-8 md:w-[70%] md:mx-auto h-full pb-5 pt-4 md:pt-0 md:pb-0">
				{/* Image */}
				<div className="w-[70vw] md:w-1/3 lg:w-2/5">
					<img
						src={HeroImg}
						alt="GAI"
						className="w-full h-auto max-w-xs md:max-w-[80%] lg:w-11/12 rounded-lg object-cover border-2 border-gray-500"
					/>
				</div>

				{/* Text Content */}
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
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
