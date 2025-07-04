import React from "react";

const ProjectCard = ({
	thumbnail,
	technologies,
	title,
	description,
	github,
	live
}) => {
	return (
		<div className='flex flex-col min-w-[200px] max-w-[400px] border-1 border-grayish'>
			{/* Image */}
			<div className='w-full border-1 border-grayish'>
				{" "}
				<img src={thumbnail} alt={title} />{" "}
			</div>
			{/* Technologies */}
			<div className='text-grayish p-2'>
				{technologies.map((tech, index) => (
					<span key={index}>{tech} </span>
				))}
			</div>
			{/* Project details */}
			<div className='p-2 border-grayish border-t-1 flex flex-col gap-y-3'>
				{/* Title */}
				<h1 className='text-whitish text-2xl'>{title}</h1>
				{/* Description */}
				<p className='text-grayish text-sm '>{description}</p>
				{/* Links */}
				<div className='flex flex-row justify-between'>
					<a
						href={github}
						target='_blank'
						rel='noopener noreferrer'
						className='button cursor-pointer'>
						Github
					</a>

					<a
						href={live}
						target='_blank'
						rel='noopener noreferrer'
						className='button cursor-pointer'>
						Live
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
