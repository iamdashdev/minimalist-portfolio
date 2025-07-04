import React from "react";
import projects from "../assets/projects.js";
import ProjectCard from "../components/ProjectCard";
import BoxAnimation from "../components/BoxAnimation.jsx";

const Projects = () => {
	return (
		<section
			className='relative w-full px-4 sm:px-8 md:px-12 py-8 sm:py-12'
			id='projects'>
			<div className='flex flex-col'>
				{/* Header */}
				<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center w-full'>
					<div className='flex items-center gap-2 w-full sm:w-auto'>
						<h1 className='text-xl md:text-2xl lg:text-3xl text-white font-black'>
							<span className='text-primary'>#</span>projects
						</h1>
						<div className='hidden sm:block h-0.5 flex-grow bg-primary ml-2'></div>
					</div>
					<a href='/projects' className='mt-4 sm:mt-0'>
						<div className='flex items-center text-white cursor-pointer text-base md:text-lg lg:text-xl hover:underline'>
							<span>View more ~~{">"}</span>
						</div>
					</a>
				</div>

				{/* Section content */}
				<div className='mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
					{projects.slice(0, 3).map((project, index) => (
						<ProjectCard
							key={index}
							thumbnail={project.thumbnail}
							technologies={project.technologies}
							title={project.title}
							description={project.description}
							github={project.github}
							live={project.live}
						/>
					))}
				</div>
			</div>

			<div className='hidden md:block absolute top-[50%] left-[99%] z-[-1]'>
				<BoxAnimation width={100} height={100} />
			</div>
		</section>
	);
};

export default Projects;
