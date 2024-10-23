import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuItems = ["Home", "About", "Services", "Contact"];

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	const location = useLocation();

	return (
		<nav className="fixed w-full z-50 h-16 lg:h-20 bg-black/60 backdrop-blur-lg shadow-md transition-all duration-300">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16 lg:h-20">
					{/* Logo */}
					<div className="flex-shrink-0">
						<img src={Logo} alt="Logo" className="h-12 w-auto" />
					</div>

					{/* Menu for larger screens */}
					<div className="hidden md:flex space-x-4">
						<ul className="flex items-center space-x-6">
							{menuItems.map((item, index) => (
								<li key={index}>
									<Link
										to={
											item === "Home"
												? "/"
												: item.toLowerCase()
										}
										className={`text-white hover:text-black hover:bg-white/70 hover:backdrop-blur-lg px-2 py-1 rounded-full font-medium text-lg transition-all duration-200 hover:scale-105 ${
											location.pathname ===
												"/" + item.toLowerCase() &&
											"text-gray-400"
										}`}
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Hamburger Menu for smaller screens */}
					<div className="md:hidden flex items-center">
						<button
							onClick={toggleMenu}
							className="text-white focus:outline-none"
						>
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								{isMenuOpen ? (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								) : (
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`fixed inset-0 bg-black/90 h-screen backdrop-blur-lg transform ${
					isMenuOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 ease-in-out md:hidden z-50`}
			>
				{/* Wrap the close button and menu items in a single container */}
				<div className="flex flex-col h-full">
					{/* Close Button */}
					<div className="flex justify-end p-4">
						<button
							onClick={toggleMenu}
							className="text-white focus:outline-none"
						>
							<svg
								className="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					{/* Menu Items */}
					<ul className="flex flex-col justify-center items-center space-y-6 h-full text-center">
						{menuItems.map((item, index) => (
							<li key={index}>
								<Link
									to={
										item === "Home"
											? "/"
											: item.toLowerCase()
									}
									className="text-white hover:text-black hover:bg-white/70 hover:backdrop-blur-lg px-2 py-1 rounded-sm text-xl font-medium transition-all duration-200 hover:scale-105"
									onClick={toggleMenu}
								>
									{item}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
