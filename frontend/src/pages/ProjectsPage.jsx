import React from "react";
import projects from "../assets/projects";
import ProjectCard from "../components/ProjectCard";

const ProjectsPage = () => {
	return (
		<div className='flex flex-col gap-3 p-20'>
			<h1 className='text-white text-md lg:text-2xl font-bold'>
				<span className='text-primary'>/</span>projects
			</h1>
			<p className='text-grayish text-sm'>
				Here are some projects I have worked on
			</p>
			{/* Section content */}
			<div className='mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
				{projects.map((project, index) => (
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
	);
};

export default ProjectsPage;
