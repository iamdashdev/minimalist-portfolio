import React from "react";

const Home = () => {
	return (
		<section
			className='flex flex-col mt-20 lg:flex-row md:w-[90%] md:gap-4 '
			id='home'>
			<div className='items-start ml-12 mt-[10%] w-full flex flex-col gap-y-2'>
				<h1 className='text-4xl text-whitish font-extrabold text-left w-full'>
					Polly is a <span className='text-primary'>GIS developer</span> and
					<span className='text-primary'> Web Developer</span>
				</h1>
				<p className='text-grayish text-left'>
					Turning ideas into digital reality. Building digital solutions for
					todays digital world.
				</p>
				<a
					href='/cv'
					className='text-whitish p-2 border-2 border-primary font-semibold mt-8'>
					Go to CV ~~{">"}
				</a>
			</div>

			<div className='flex flex-col gap-0 w-[100%] items-center'>
				<div>
					<img
						src='./assets/img/hero.svg'
						alt='hero'
						className='w-[400px] md:w-[600px]'
					/>
				</div>
				<div className='border-whitish border-solid border-[1px] w-max relative flex flex-row gap-3 p-2 z-[-1] '>
					<div className='bg-primary h-5 w-5'></div>
					<p className='text-whitish'>
						Currently working on <strong>Portfolio</strong>
					</p>
				</div>
			</div>
		</section>
	);
};

export default Home;
