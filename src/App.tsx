import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/services"
					element={<h2 className="pt-20">Services page</h2>}
				/>
				<Route
					path="/contact"
					element={<h2 className="pt-20">Contact page</h2>}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
