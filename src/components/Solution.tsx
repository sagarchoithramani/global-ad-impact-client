import ImageGallery from "./ImageGallery";

const Solution = () => {
	return (
		<div className="min-h-screen bg-[#0f0f0f] pt-20 md:pt-24 p-4">
			{/* Container for text content */}
			<div className="grid place-items-start text-white mb-4 md:mb-12 md:place-items-center">
				<h2 className="text-md md:text-lg lg:text-3xl font-semibold">
					Best Solutions
				</h2>
				<h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
					For Your Business
				</h1>
				<p className="text-sm md:text-base lg:text-2xl text-[#b8b8b8] mt-2">
					Elevate your brand with effective targeted campaigns for
					your success.
				</p>
			</div>
			<ImageGallery />
		</div>
	);
};

export default Solution;
