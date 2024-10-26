import { SendHorizontal } from "lucide-react"; // Ensure you have this import
import { useState } from "react";

const Contact = () => {
	const [status, setStatus] = useState<{
		type: "success" | "error" | "sending" | null;
		message: string;
	}>({ type: null, message: "" });

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formObject = Object.fromEntries(formData.entries());

		try {
			setStatus({ type: "sending", message: "Submitting..." });
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					access_key: "8c1dc3df-296d-44ba-93a2-e9509af8c47c", // Replace with your Web3Forms access key
					...formObject,
				}),
			});

			if (response.ok) {
				setStatus({
					type: "success",
					message: "Thanks for submitting!",
				});
				e.target.reset();
			} else {
				setStatus({
					type: "error",
					message: "Submission failed. Please try again.",
				});
			}
		} catch (error) {
			setStatus({
				type: "error",
				message: "Network error. Please try again.",
			});
		}

		// Remove status message after 5 seconds
		setTimeout(() => setStatus({ type: null, message: "" }), 5000);
	};

	return (
		<div className="bg-[#0f0f0f] pt-16 lg:pt-20 px-4">
			<div className="md:max-w-[90vw] lg:max-w-[65vw] mx-auto">
				<h1 className="text-white text-4xl sm:text-5xl lg:text-[5rem] my-8 md:my-8 lg:my-12 text-left md:text-center">
					Contact
				</h1>
				<p className="text-gray-400 text-base sm:text-lg lg:text-2xl leading-7 pb-10 md:my-8 lg:my-12 text-left">
					We welcome the opportunity to connect with you and provide
					our exceptional service and support. Please do not hesitate
					to contact us at your convenience. We look forward to
					hearing from you.
				</p>

				<div className="flex flex-col lg:flex-row lg:justify-between md:mt-8 lg:mt-20 pb-10">
					<div className="lg:w-[40%]">
						<h2 className="text-white text-3xl sm:text-4xl lg:text-5xl my-2 lg:my-4 text-left">
							Let's Connect
						</h2>
						<p className="text-gray-400 text-base sm:text-lg lg:text-2xl leading-relaxed pb-4 mt-5 md:my-12 text-left">
							Let's sit together and discuss your next advertising
							campaign.
						</p>
						<p className="text-gray-400 text-base sm:text-lg lg:text-2xl leading-relaxed pb-4 text-left">
							We are available from:
							<br />
							<span className="font-bold">Monday - Saturday</span>
							<br />
							<span className="font-bold">10 a.m. - 7 p.m.</span>
						</p>
					</div>

					{/* Form Section */}
					<div className="lg:w-[30vw] bg-[#1c1c1c] rounded-lg p-4 lg:p-6 mt-6 lg:mt-0">
						<h2 className="text-white text-2xl mb-4">
							Leave a message
						</h2>
						<form className="flex flex-col" onSubmit={handleSubmit}>
							<label
								className="text-gray-300 mb-1"
								htmlFor="name"
							>
								Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								className="bg-[#0f0f0f] text-gray-200 border border-gray-500 rounded-md p-2 mb-4 focus:outline-none focus:border-gray-200 transition ease-in"
								placeholder="Your Name"
								required
							/>

							<label
								className="text-gray-300 mb-1"
								htmlFor="email"
							>
								Email <span className="text-red-500">*</span>
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="bg-[#0f0f0f] text-gray-200 border border-gray-500 rounded-md p-2 mb-4 focus:outline-none focus:border-gray-200 transition ease-in"
								placeholder="Your Email"
								required
							/>

							<label
								className="text-gray-300 mb-1"
								htmlFor="message"
							>
								Message
							</label>
							<textarea
								name="message"
								id="message"
								className="bg-[#0f0f0f] text-gray-200 border border-gray-500 rounded-md p-2 mb-4 focus:outline-none min-h-[100px] max-h-[200px] focus:border-gray-200 transition ease-in"
								placeholder="Your Message"
								rows={3}
								required
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

							{/* Status Message */}
							{status.type && (
								<p
									className={`mt-4 text-center text-sm sm:text-base ${
										status.type === "success"
											? "text-green-300"
											: status.type === "sending"
											? "text-gray-300"
											: "text-red-400"
									}`}
								>
									{status.message}
								</p>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
