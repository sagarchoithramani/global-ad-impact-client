import { SendHorizontal } from "lucide-react"; // Ensure you have this import

const Contact = () => {
	return (
		<div className="bg-[#0f0f0f] pt-16 lg:pt-20 px-4">
			<div className="md:max-w-[90vw] lg:max-w-[63vw] mx-auto">
				<h1 className="text-white text-4xl sm:text-5xl lg:text-[5rem] my-4 text-left">
					Contact
				</h1>
				<p className="text-gray-400 text-base sm:text-lg lg:text-2xl leading-relaxed pb-10 text-left">
					We welcome the opportunity to connect with you and provide
					our exceptional service and support. Please do not hesitate
					to contact us at your convenience. We look forward to
					hearing from you.
				</p>

				<div className="flex flex-col lg:flex-row lg:space-x-5 pb-10">
					<div className="lg:w-1/2">
						<h2 className="text-white text-3xl sm:text-4xl lg:text-5xl my-4 text-left">
							Let's Connect
						</h2>
						<p className="text-gray-400 text-base sm:text-lg lg:text-2xl leading-relaxed pb-4 text-left">
							Let's sit together and discuss your next advertising
							campaign.
						</p>
						<p className="text-gray-400 text-base sm:text-lg lg:text-2xl leading-relaxed pb-4 text-left">
							We are available from:
							<br />
							<span className="font-bold">Monday - Saturday</span>
							<br />
							<span className="font-bold">
								10 a.m. - 7 p.m. IST/GMT +5:30
							</span>
						</p>
					</div>

					{/* Form Section */}
					<div className="lg:w-1/2 bg-[#1c1c1c] rounded-lg p-4 lg:p-6 mt-6 lg:mt-0">
						<h2 className="text-white text-2xl mb-4">
							Leave a message
						</h2>
						<form className="flex flex-col">
							<label
								className="text-gray-300 mb-1"
								htmlFor="name"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								className="bg-[#0f0f0f] text-gray-200 border border-gray-500 rounded-md p-2 mb-4 focus:outline-none focus:border-gray-200 transition ease-in"
								placeholder="Your Name"
							/>

							<label
								className="text-gray-300 mb-1"
								htmlFor="email"
							>
								Email <span className="text-red-500">*</span>
							</label>
							<input
								type="email"
								id="email"
								required
								className="bg-[#0f0f0f] text-gray-200 border border-gray-500 rounded-md p-2 mb-4 focus:outline-none focus:border-gray-200 transition ease-in"
								placeholder="Your Email"
							/>

							<label
								className="text-gray-300 mb-1"
								htmlFor="message"
							>
								Message
							</label>
							<textarea
								id="message"
								className="bg-[#0f0f0f] text-gray-200 border border-gray-500 rounded-md p-2 mb-4 focus:outline-none  min-h-[100px] max-h-[200px] focus:border-gray-200 transition ease-in"
								placeholder="Your Message"
								rows={3}
							/>

							{/* Send Button */}
							<button
								type="submit"
								className="bg-[#0f0f0f] text-gray-200 font-medium py-2 px-4 sm:py-3 sm:px-6 rounded-md border border-gray-500 shadow-md hover:border-white transition-all duration-300 flex items-center space-x-2 group relative overflow-hidden w-max"
							>
								<span className="text-sm sm:text-base group-hover:text-white transition-all duration-300">
									Send Message
								</span>
								<SendHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform duration-300 group-hover:translate-x-2 motion-safe:animate-pulse" />
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
