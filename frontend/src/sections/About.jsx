import React from "react";
import DotsAnimation from "../components/DotsAnimation";
import { FaArrowRight } from "react-icons/fa";
const About = () => {
	return (
		<section className='mt-10 w-full p-12' id='about'>
			<div className='flex flex-row items-center gap-0'>
				<h1 className='text-xl lg:text-3xl text-white  font-black min-w-[200px]'>
					<span className='text-primary'>#</span>about-me{" "}
				</h1>
				<div className='h-0.5 w-1/2 bg-primary ml-[-15%] lg:ml-[-2%]'></div>
			</div>
			<div className='flex flex-col lg:flex-row relative'>
				<div className='mt-5'>
					<article className='text-grayish text-left  xl:text-xl'>
						Hello, I'm Polly <br />
						<br />
						I'm a GIS developer and Web Developer. I'm a self-taught developer
						and I'm passionate about building digital solutions for todays
						digital world.
						<br />
						<br />
						Transforming my creativity and knowledge into websites has been my
						passion for over a year. I have been helping various clients to
						establish their online precence. I always strive to learn about the
						newest technologies and frameworks.
					</article>
					<a
						href='/about'
						className='text-whitish p-2 border-2 z-10 border-primary font-semibold mt-8 inline-flex items-center justify-center cursor-pointer'>
						Read More
						<FaArrowRight className='inline ml-2' />
					</a>
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
		</section>
	);
};

export default About;
