import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CV from "./pages/CV";
import ProjectsPage from "./pages/ProjectsPage";
function App() {
	const [count, setCount] = useState(0);

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/projects' element={<ProjectsPage />} />
				{/* <Route path='/contact' element={<ContactPage />} /> */}
				<Route path='/cv' element={<CV />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
