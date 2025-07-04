import React, { useState, useEffect } from "react";
import Home from "../sections/Home";
import Quote from "../components/Quote";
import BoxAnimation from "../components/BoxAnimation";
import DotsAnimation from "../components/DotsAnimation";
import About from "../sections/About";
import Skills from "../sections/Skills";
import ProjectCard from "../components/ProjectCard";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

const HomePage = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 820);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div className='w-full flex flex-col items-center p-4 z-[-100] gap-3'>
			<Home />
			<Quote />
			<div className='absolute top-[80%] left-[-10%]'>
				<BoxAnimation
					width={isMobile ? 100 : 200}
					height={isMobile ? 50 : 100}
				/>
			</div>
			<div className='absolute top-[120%] right-[5%] z-[-1]'>
				<DotsAnimation />
			</div>
			<div className='absolute top-[100%] right-[2%] z-[-1]'>
				<DotsAnimation />
			</div>
			<About />
			<Skills />
			<div>
				<Projects />
				<Contact />
			</div>
		</div>
	);
};

export default HomePage;
