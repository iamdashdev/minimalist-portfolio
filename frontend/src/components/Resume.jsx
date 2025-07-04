import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DotsAnimation from "../components/DotsAnimation";
const CV = () => {
	return (
		// Container for CV section
		<div className='w-full items-center bg-gray-950 flex justify-center pt-20 pb-20 h-full '>
			{/* Letter sized card for CV */}
			<div className='w-[80%] bg-background p-10 min-h-[100vh] flex flex-col gap-3'>
				{/* Header */}
				<div className='flex justify-between'>
					<div className='flex flex-col gap-1'>
						{/* Logo and name */}
						<div className='flex flex-row items-center gap-2'>
							{/* Logo */}
							<div>
								<img src='logo.svg' alt='logo' className='w-[50px]' />
							</div>
							{/* Name */}
							<div className='text-white text-4xl font-bold'>Polly Mwangi</div>
						</div>
						{/* Credentials */}
						<div className='text-primary text-md font-bold'>
							<p>Full-stack developer </p>
							<p>GIS developer</p>
						</div>
					</div>
					{/* Contacts */}
					<div className='flex flex-wrap w-[50%] gap-4 justify-end'>
						<div className='flex flex-row items-center gap-2 p-2 border border-grayish w-max h-max cursor-pointer'>
							<FaGithub className='text-grayish text-md' />
							<p className='text-grayish text-md'>iamdashdev</p>
						</div>
						<div className='flex flex-row items-center gap-2 p-2 border border-grayish w-max h-max cursor-pointer'>
							<IoLocationSharp className='text-grayish text-md' />
							<p className='text-grayish text-md'>Nyeri, Kenya</p>
						</div>
						<div className='flex flex-row items-center gap-2 p-2 border border-grayish w-max h-max cursor-pointer'>
							<MdEmail className='text-grayish text-md' />
							<p className='text-grayish text-md'>mwangipolly@gmail.com</p>
						</div>
						<div className='flex flex-row items-center gap-2 p-2 border border-grayish w-max h-max cursor-pointer'>
							<FaLinkedin className='text-grayish text-md' />
							<p className='text-grayish text-md'>polly-mwangi</p>
						</div>
						<div className='flex flex-row items-center gap-2 p-2 border border-grayish w-max h-max cursor-pointer'>
							<FaPhoneAlt className='text-grayish text-md' />
							<p className='text-grayish text-md'>+254 740 100 476</p>
						</div>
					</div>
				</div>
				{/* Summary */}
				<div className='w-full flex flex-col border-1 border-grayish gap-4'>
					<h3 className='text-2xl text-white font-bold border-b-1 border-grayish p-2'>
						Summary
					</h3>
					<p className='text-grayish text-md p-3'>
						I am a Full-stack and GIS developer with experience and passion in
						building spatial solutions. I have experience in working with GIS
						and Web development technologies.
					</p>
				</div>
				{/* Content container */}
				<div className='flex flex-row gap-10'>
					{/* education & experience Contents */}
					<div className='flex flex-col gap-10'>
						{/* Education */}\
						<div>
							<h3 className='text-2xl text-white font-bold '>Education</h3>
							<div className='flex flex-row gap-20'>
								{/* Timeline */}
								<div className='flex flex-col gap-0 align-middle w-[100px]'>
									{/* date box */}
									<div className='border-1 border-grayish flex flex-col text-grayish text-md w-max p-4 align-middle'>
										<p>Sep 2022</p>
										<p>Present</p>
									</div>
									{/* connector */}
									<div className='flex flex-col items-center'>
										<div className='border-1 border-grayish w-0.5 h-20'></div>
									</div>
									{/* date box */}
									<div className='border-1 border-grayish flex flex-col text-grayish text-md w-max p-4 align-middle'>
										<p>Apr 2023</p>
										<p>Dec 2023</p>
									</div>
									{/* connector */}
									<div className='flex flex-col items-center'>
										<div className='border-1 border-grayish w-0.5 h-20'></div>
									</div>
									{/* date box */}
									<div className='border-1 border-grayish flex flex-col text-grayish text-md w-max p-4 align-middle'>
										<p>Jan 2024</p>
										<p>Dec 2024</p>
									</div>
								</div>
								{/* Description */}
								<div className='flex flex-col gap-15'>
									{/* Education box */}
									<div className='w-[500px] flex flex-col border-1 border-grayish gap-0'>
										<h3 className='text-[12px] text-white font-bold border-b-1 border-grayish p-2'>
											Dedan Kimathi University of Technology
										</h3>
										<ul className='text-grayish text-sm p-2 list-disc list-inside'>
											<li>
												Bsc in Geospatial Information Systems and Remote sensing
											</li>
										</ul>
									</div>
									{/* Education box */}
									<div className='w-[500px] flex flex-col border-1 border-grayish gap-0 mt-2'>
										<h3 className='text-[12px] text-white font-bold border-b-1 border-grayish p-2'>
											W3 Schools
										</h3>
										<ul className='text-grayish text-sm p-2 list-disc list-inside'>
											<li>Covered HTML, CSS, and JavaScript basics</li>
											<li>
												Built several websites using HTML, CSS, and JavaScript
											</li>
											<li>Covered React basics</li>
										</ul>
									</div>
									{/* Education box */}
									<div className='w-[500px] flex flex-col border-1 border-grayish gap-0 mt-[-8px]'>
										<h3 className='text-[12px] text-white font-bold border-b-1 border-grayish p-2'>
											Code basics
										</h3>
										<ul className='text-grayish text-sm p-2 list-disc list-inside'>
											<li>Learnt Python basics</li>
											<li>Learnt Machine Learning basics</li>
											<li>Made a simple House price prediction model</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						{/* Experience */}
						<div>
							<h3 className='text-2xl text-white font-bold '>Experience</h3>
							<div className='flex flex-row gap-20'>
								{/* Timeline */}
								<div className='flex flex-col gap-0 align-middle w-[100px]'>
									{/* date box */}
									<div className='border-1 border-grayish flex flex-col text-grayish text-md w-max p-4 align-middle'>
										<p>Jan 2025</p>
										<p>May 2025</p>
									</div>
									{/* connector */}
									<div className='flex flex-col items-center'>
										<div className='border-1 border-grayish w-0.5 h-24'></div>
									</div>
									{/* date box */}
									<div className='border-1 border-grayish flex flex-col text-grayish text-md w-max p-4 align-middle'>
										<p>Jan 2025</p>
										<p>Mar 2025</p>
									</div>
									{/* connector */}
									<div className='flex flex-col items-center'>
										<div className='border-1 border-grayish w-0.5 h-20'></div>
									</div>
									{/* date box */}
									<div className='border-1 border-grayish flex flex-col text-grayish text-md w-max p-4 align-middle'>
										<p>Jan 2026</p>
										<p>Apr 2026</p>
									</div>
								</div>
								{/* Description */}
								<div className='flex flex-col gap-15'>
									{/* Experience box */}
									<div className='w-[500px] flex flex-col border-1 border-grayish gap-0'>
										<h3 className='text-[12px] text-white font-bold border-b-1 border-grayish p-2'>
											GDEV(Geospatial Developers Club)
										</h3>
										<ul className='text-grayish text-sm p-2 list-disc list-inside'>
											<li>
												Worked as a frontend developer for the Geospatial
												Developers Club
											</li>
											<li>Developed GDEV platform with the team</li>
											<li>Presented the team project</li>
										</ul>
									</div>
									{/* Experience box */}
									<div className='w-[500px] flex flex-col border-1 border-grayish gap-0 mt-[-20px]'>
										<h3 className='text-[12px] text-white font-bold border-b-1 border-grayish p-2'>
											GDEV(Geospatial Developers Club)
										</h3>
										<ul className='text-grayish text-sm p-2 list-disc list-inside'>
											<li>Conducted a training bootcamp in web development</li>
											<li>Taught about HTML, CSS basics</li>
										</ul>
									</div>
									{/* Experience box */}
									<div className='w-[500px] flex flex-col border-1 border-grayish gap-0 mt-[8px]'>
										<h3 className='text-[12px] text-white font-bold border-b-1 border-grayish p-2'>
											Kengen(Internship)
										</h3>
										<ul className='text-grayish text-sm p-2 list-disc list-inside'>
											<li>Internshiped at KenGen HQ</li>
											<li>Did something and learnt something</li>
											<li>Made something and helped around a bit</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Languages and skills */}
					<div className='flex flex-col gap-6 mt-24 relative'>
						{/* Languages */}
						<div className='w-[250px] flex flex-col border-1 border-grayish gap-2'>
							<h3 className='text-md text-white font-bold border-b-1 border-grayish p-2'>
								Languages
							</h3>
							<div className='flex flex-col text-grayish p-2'>
								<div className='flex flex-row justify-between'>
									<span>English</span>
									<span>C2</span>
								</div>
								<div className='flex flex-row justify-between'>
									<span>Swahili</span>
									<span>Native</span>
								</div>
								<div className='flex flex-row justify-between'>
									<span>Kikuyu</span>
									<span>Native</span>
								</div>
								<div className='flex flex-row justify-between'>
									<span>French</span>
									<span>A1</span>
								</div>
							</div>
						</div>

						{/* Skills */}
						<div className='w-[250px] flex flex-col border-1 border-grayish gap-2'>
							<h3 className='text-md text-white font-bold border-b-1 border-grayish p-2'>
								Skills
							</h3>
							<div className='flex flex-wrap gap-3 text-grayish p-2'>
								<span>HTML</span>
								<span>CSS</span>
								<span>React</span>
								<span>Node JS</span>
								<span>Flask</span>
								<span>Tailwind</span>
								<span>Express</span>
							</div>
						</div>
						{/* Tools */}
						<div className='w-[250px] flex flex-col border-1 border-grayish gap-2'>
							<h3 className='text-md text-white font-bold border-b-1 border-grayish p-2'>
								Tools
							</h3>
							<div className='flex flex-wrap gap-3 text-grayish p-2'>
								<span>ArcGIS pro</span>
								<span>QGIS</span>
								<span>Agisoft metashape</span>
								<span>ENVI</span>
								<span>ERDAS</span>
								<span>Google Earth Engine</span>
								<span>Git</span>
							</div>
						</div>
						{/* Programming Languages */}
						<div className='w-[250px] flex flex-col border-1 border-grayish gap-2'>
							<h3 className='text-md text-white font-bold border-b-1 border-grayish p-2'>
								Programming Languages
							</h3>
							<div className='flex flex-wrap gap-3 text-grayish p-2'>
								<span>Python</span>
								<span>JavaScript</span>
								<span>C#</span>
								<span>TypeScript</span>
							</div>
						</div>
						{/* Hobbies */}
						<div className='w-[250px] flex flex-col border-1 border-grayish gap-2'>
							<h3 className='text-md text-white font-bold border-b-1 border-grayish p-2'>
								Hobbies
							</h3>
							<div className='flex flex-wrap gap-2 text-grayish p-2'>
								<span>Reading novels</span>
								<span>Coding personal projects</span>
							</div>
						</div>
						<div className='relative'>
							<div className='absolute top-[80%] right-[20%] z-[1]'>
								<DotsAnimation />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CV;
