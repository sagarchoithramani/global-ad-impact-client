import Billboard from "../assets/billboardServices.webp";
import Gantry from "../assets/gantryServices.webp";
import TrafficBooth from "../assets/trafficboothServices.webp";
import PoleKiosk from "../assets/polekioskServices.webp";
import BusShelter from "../assets/busshelterServices.webp";

const servicesArray = [
	{
		name: "BILLBOARDS",
		img: Billboard,
		desc: "Billboard OOH advertising utilizes large, prominent displays—static, illuminated, or digital—on major roads. These strategically placed ads enhance brand visibility and boost awareness effectively.",
	},
	{
		name: "GANTRY",
		img: Gantry,
		desc: "Gantry OOH advertising features large, elevated structures with illuminated or digital panels placed above major roadways. These high-visibility installations capture the attention of drivers and passengers, maximizing reach and impact for broad, high-profile campaigns.",
	},
	{
		name: "TRAFFIC BOOTH",
		img: TrafficBooth,
		desc: "Traffic booth OOH advertising employs kiosks with large ad panels or digital screens at busy locations. These strategically placed units deliver impactful, targeted messages to both drivers and pedestrians.",
	},
	{
		name: "POLE KIOSK",
		img: PoleKiosk,
		desc: "Pole kiosk OOH advertising features units mounted on poles at high-traffic intersections and transit stops, equipped with illuminated or digital displays. Their elevated position and dynamic design ensure maximum visibility and engagement with both pedestrians and drivers.",
	},
	{
		name: "BUS SHELTER",
		img: BusShelter,
		desc: "Bus shelters in OOH advertising feature illuminated or digital ads and include seating and info displays. Positioned in high-traffic areas, they ensure high visibility and targeted engagement.",
	},
];

const Services = () => {
	return (
		<div className="bg-[#0f0f0f] pt-20 lg:pt-24 px-4">
			<div className="md:max-w-[90vw] lg:max-w-[63vw] mx-auto">
				<h1 className="text-white text-4xl sm:text-5xl lg:text-[5rem] my-4 md:my-8 lg:my12 text-left">
					Services
				</h1>
				<p className="text-gray-400 text-base sm:text-lg lg:text-2xl md:my-8 lg:my-12 pb-10 text-left leading-7">
					Discover unparalleled reach with our outdoor advertising
					agency by leveraging a blend of traditional and digital
					out-of-home (OOH) advertising. Our approach combines the
					broad visibility of classic OOH with the dynamic
					capabilities of digital displays, ensuring your message
					resonates across diverse audiences. This integrated strategy
					maximizes impact, driving engagement and enhancing brand
					presence. Explore how our diverse advertising solutions can
					elevate your campaign and achieve exceptional results.
					Partner with us to broaden your reach and capture attention
					effectively.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-12">
					{servicesArray.map((service) => (
						<div
							key={service.name}
							className="bg-[#1a1a1a] p-4 lg:p-6 rounded-lg"
						>
							<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 text-center">
								{service.name}
							</h2>
							<div className="border-t border-gray-600 w-full mb-4"></div>
							<img
								src={service.img}
								alt={service.name}
								className="w-full mb-6 object-contain"
							/>
							<p className="text-gray-400 text-base lg:text-lg text-left">
								{service.desc}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
