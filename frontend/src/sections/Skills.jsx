import React from "react";
import DotsAnimation from "../components/DotsAnimation";
import BoxAnimation from "../components/BoxAnimation";
import skills from "../assets/skills";

const Skills = () => {
	return (
		<section className='mt-0 w-full p-12 ' id='skills'>
			<div>
				{/* Heading */}
				<div className='flex flex-row items-center gap-0'>
					<h1 className='text-xl lg:text-3xl text-white font-black min-w-[200px]'>
						<span className='text-primary'>#</span>skills
					</h1>
					<div className='h-0.5 w-1/2 bg-primary ml-[-20%] md:ml-[-10%] lg:ml-[-5%]'></div>
				</div>

				{/* Section content */}
				<div className='flex flex-row lg:flex-row'>
					{/* Graphics on large screens */}
					<div className='hidden lg:grid grid-cols-3 gap-4 relative w-1/2'>
						<div className='absolute top-[20%] left-[5%] z-[-1]'>
							<DotsAnimation />
						</div>
						<div className='absolute top-[50%] left-[25%] z-[-1]'>
							<DotsAnimation />
						</div>

						<div className='absolute top-[20%] left-[50%] z-[-1]'>
							<BoxAnimation width={100} height={100} />
						</div>
						<div className='absolute top-[60%] left-[60%] z-[-1]'>
							<BoxAnimation width={100} height={100} />
						</div>

						<div className='absolute top-[70%] left-[-5%] z-[-1]'>
							<img
								src='./assets/img/logo-outline.svg'
								alt='logo'
								className='w-[150px]'
							/>
						</div>
					</div>
					{/* Skills */}
					<div className='flex flex-wrap gap-6 mt-8 lg:w-2/3 text-white w-full justify-center'>
						{skills.map((skill, index) => (
							<div
								key={index}
								className='border border-white/20  py-2 max-w-[300px]'>
								<h2 className='font-bold text-white mb-2 border-b border-white/20 w-full'>
									{skill.cartegory}
								</h2>
								<div className='flex flex-wrap gap-x-2'>
									{skill.name.map((item, i) => (
										<span key={i} className='text-white'>
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
