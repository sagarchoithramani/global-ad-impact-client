import Billboard from "../assets/billboard.webp";

const About = () => {
	return (
		<div className="bg-[#0f0f0f] pt-16 lg:pt-20 flex justify-center">
			<div className="w-full md:max-w-[90vw] lg:max-w-[70vw]">
				<div className="relative lg:mb-24">
					<img
						src={Billboard}
						alt="Billboard advert"
						className="w-full lg:max-w-[70%] h-auto lg:h-[45vh]"
					/>
					<div className="lg:absolute lg:grid lg:place-items-start left-1/2 bg-[#0f0f0f] lg:p-[7rem] lg:w-[65%] lg:-translate-x-[10%] lg:-translate-y-[75%]">
						<h1 className="text-white text-4xl sm:text-5xl lg:text-[5rem] px-4 my-4 text-nowrap">
							About Us
						</h1>
					</div>
				</div>
				<div className="px-4">
					<h2 className="text-white text-3xl sm:text-4xl lg:text-5xl pb-8 text-left">
						All About Global AdImpact
					</h2>
					<p className="text-gray-400 text-base sm:text-lg lg:text-2xl leading-relaxed lg:my-10">
						Global AdImpact is a distinguished advertising agency
						that offers specialized services in both traditional OOH
						and digital OOH advertising. Our extensive experience in
						the industry has enabled us to deliver effective
						advertising strategies that have helped numerous
						businesses achieve their marketing goals. <br /> <br />{" "}
						At Global AdImpact, we understand that every business is
						unique, and that's why we take a personalized approach
						to every project we undertake. Our team of seasoned
						professionals is committed to providing bespoke services
						that are tailored to meet the specific needs of each
						client. We work closely with our clients to understand
						their business objectives, target audience, and budget,
						and then develop a comprehensive advertising strategy
						that delivers results. <br /> <br /> Whether you're
						looking to increase brand awareness, drive sales, or
						launch a new product, Global AdImpact has the expertise
						and experience to help you achieve your goals. We pride
						ourselves on delivering exceptional service and results,
						and we're dedicated to helping our clients succeed.
						Contact us today to learn more about how we can assist
						the growth of your business.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
