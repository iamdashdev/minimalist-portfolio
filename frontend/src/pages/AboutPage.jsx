import React from "react";
import DotsAnimation from "../components/DotsAnimation";
import BoxAnimation from "../components/BoxAnimation";
import skills from "../assets/skills";
const AboutPage = () => {
	return (
		<div className='flex flex-col p-20'>
			<h1 className='text-white text-md lg:text-2xl font-bold'>
				<span className='text-primary'>/</span>About me
			</h1>
			<p className='text-grayish text-sm'>
				Here are some things you should know about me
			</p>
			<div className='mt-10 w-full p-12'>
				<div className='flex flex-col lg:flex-row relative'>
					<div className='mt-5'>
						<article className='text-grayish text-left xl:text-xl'>
							Hello, I'm Polly
							<br />
							<br />
							I'm a self-taught GIS and Web Developer passionate about creating
							meaningful digital solutions that bridge technology and real-world
							needs.
							<br />
							<br />
							Over the past year, I've been transforming my creativity and
							technical skills into modern, responsive websites and
							applications. I've helped various clients establish a strong
							online presence, always exploring the latest technologies,
							frameworks, and design trends to deliver engaging user
							experiences.
							<br />
							<br />
							Beyond web development, I have a deep interest in GIS and Remote
							Sensing. By integrating spatial data and analysis into my
							projects, I aim to build tools that solve real-world challenges —
							especially in areas like agriculture, market access, and
							sustainable development. My goal is to empower people and
							organizations to make data-driven decisions that have a tangible
							impact.
							<br />
							<br />
							I'm always learning, experimenting, and excited to bring ideas to
							life at the intersection of code, design, and geospatial
							intelligence.
						</article>
					</div>
					<div className='w-full flex  flex-col items-center justify-center relative'>
						<img
							src='./assets/img/about.svg'
							alt='hero'
							className='w-[400px] md:w-[600px] max-w-[400px] translate-y-[-20%] mt-15 md:mt-0'
						/>
						<div className='h-0.25 w-[300px] bg-primary top-[80%] md:left-[30%] lg:left-[10%] absolute'></div>
					</div>
					<div className='absolute top-[45%] lg:top-[0%] w-full h-full pointer-events-none'>
						<div className='absolute right-[5%] top-[30%] lg:top-[50%] lg:right-[2%]'>
							<DotsAnimation />
						</div>
						<div className='absolute right-[30%] top-[15%] lg:top-[30%] lg:right-[10%]'>
							<DotsAnimation />
						</div>
						<div className='absolute right-[55%] top-[0%] lg:top-[10%] lg:right-[20%]'>
							<DotsAnimation />
						</div>
					</div>
				</div>
			</div>
			<div className='mt-0 w-full p-12 '>
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
			</div>
		</div>
	);
};

export default AboutPage;
