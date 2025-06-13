import Logo from "../assets/logo.webp";
import {
	BadgeCheck,
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-[#0f0f0f] text-white py-8">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Container for responsive layout */}
				<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
					{/* Logo for PC screens */}
					<div className="lg:mr-8 mb-8 lg:mb-0 flex justify-center lg:justify-start lg:w-[20%]">
						<img
							src={Logo}
							alt="Logo"
							className="h-12 sm:h-14 lg:h-20 w-auto"
						/>
					</div>

					{/* Footer Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-center lg:text-left w-full">
						{/* Phone */}
						<div>
							<h2 className="text-lg font-semibold flex items-center justify-center lg:justify-start mb-2">
								Phone <Phone className="ml-2" />
							</h2>
							<a
								href="tel:+919007790454"
								className="text-gray-400 hover:text-white transition duration-200"
							>
								+91 9007790454
							</a>
						</div>

						{/* Email */}
						<div>
							<h2 className="text-lg font-semibold flex items-center justify-center lg:justify-start mb-2">
								Email <Mail className="ml-2" />
							</h2>
							<a
								href="mailto:contact@globaladimpact.com"
								className="text-gray-400 hover:text-white transition duration-200"
							>
								contact@globaladimpact.com
							</a>
						</div>

						{/* Address */}
						<div>
							<h2 className="text-lg font-semibold flex items-center justify-center lg:justify-start mb-2">
								Address <MapPin className="ml-2" />
							</h2>
							<a
								href="https://www.google.com/maps/search/?api=1&query=46+Moti+Sil+Street,+Opp.+Regal+Cinema,+Kolkata+700013"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white transition duration-200"
							>
								46, Moti Sil Street, Opp. Regal Cinema,
								Kol-700013.
							</a>
						</div>

						{/* Socials */}
						<div>
							<h2 className="text-lg font-semibold flex items-center justify-center lg:justify-start mb-2">
								Socials <BadgeCheck className="ml-2" />
							</h2>
							<div className="flex justify-center lg:justify-start space-x-4 mt-2">
								<a
									href="https://www.facebook.com/people/Global-AdImpact/61564052496664/?is_tour_dismissed"
									aria-label="Facebook"
									className="text-gray-400 hover:text-[#1877F2] transition duration-200"
								>
									<Facebook size={20} />
								</a>
								<a
									href="https://www.linkedin.com/company/global-adimpact/about/?viewAsMember=true"
									aria-label="LinkedIn"
									className="text-gray-400 hover:text-[#0077B5] transition duration-200"
								>
									<Linkedin size={20} />
								</a>
								<a
									href="https://x.com/globaladimpact"
									aria-label="Twitter"
									className="text-gray-400 hover:text-[#1da1f2] transition duration-200"
								>
								/*<Twitter size={20} />*/
									<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50"
style="fill:#4D4D4D;">
<path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
</svg>
								</a>
								<a
									href="https://www.instagram.com/globaladimpact/"
									aria-label="Instagram"
									className="text-gray-400 hover:text-[#E1306C] transition duration-200"
								>
									<Instagram size={20} />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="mt-8 border-t border-gray-700 pt-4">
					<p className="text-center text-gray-500 text-sm">
						&copy; {new Date().getFullYear()} Global AdImpact. All
						rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
