import TrafficBooth from "../assets/trafficboothclip.webp";
import BillBoard from "../assets/billboardclip.webp";
import PoleKiosk from "../assets/polekioskclip.webp";
import Gantry from "../assets/gantryclip.webp";
import BusShelter from "../assets/busshelterclip.webp";
import { Link } from "react-router-dom";

const services = [
	{ title: "Traffic Booth", img: TrafficBooth },
	{ title: "Billboards", img: BillBoard },
	{ title: "Pole Kiosk", img: PoleKiosk },
	{ title: "Gantry", img: Gantry },
	{ title: "Bus Shelter", img: BusShelter },
];

const ServicesHome = () => {
	return (
		<div className="bg-[#0f0f0f] text-white py-12 pb-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-center text-2xl md:text-3xl lg:text-5xl font-semibold mb-10">
					Our Services
				</h2>
				<div className="flex flex-wrap justify-center gap-8">
					{services.map((service, index) => (
						<Link
							key={index}
							className=" rounded-lg p-6 flex flex-col items-center lg:transition-transform lg:duration-200 lg:hover:scale-105 w-full sm:w-[48%] md:w-[30%]"
							to={"/services"}
							onClick={() => {
								window.scrollTo({
									top: 0,
								});
							}}
						>
							<img
								src={service.img}
								alt={service.title}
								className="w-24 h-24 mb-4"
							/>
							<h3 className="text-xl font-semibold">
								{service.title}
							</h3>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default ServicesHome;
