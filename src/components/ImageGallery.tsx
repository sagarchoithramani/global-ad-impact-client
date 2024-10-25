import React from "react";
import Traditional from "../assets/traditional.webp";
import Digital from "../assets/digital.webp";

const ImageGallery: React.FC = () => {
	const images = [
		{
			src: Traditional,
			text: "TRADITIONAL OOH",
		},
		{
			src: Digital,
			text: "DIGITAL OOH",
		},
	];

	return (
		<div className="flex flex-col md:flex-row gap-4 mt-4 md:justify-center">
			{images.map((image, index) => (
				<div
					key={index}
					className="relative overflow-hidden rounded-lg shadow-lg group w-full lg:w-[45%]"
				>
					<img
						src={image.src}
						alt={`Image ${index + 1}`}
						className="w-full h-[35vh] md:h-[50vh] lg:h-[65vh] aspect-square object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
					/>

					{/* Text Overlay */}
					<div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent text-white p-2 text-center cursor-pointer">
						<p className="text-md md:text-lg lg:text-2xl border-[0.5px] border-[#b3b3b3] rounded-md bg-black/60">
							{image.text}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ImageGallery;
