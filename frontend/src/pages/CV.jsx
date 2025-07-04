import React from "react";
import { FaGithub, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import DotsAnimation from "../components/DotsAnimation";

const ContactItem = ({ icon, text }) => (
	<div className='flex flex-row items-center gap-1 sm:gap-2 p-2 border border-grayish w-max h-max cursor-pointer'>
		{icon}
		<p className='text-grayish text-xs sm:text-sm md:text-md'>{text}</p>
	</div>
);

const SectionHeader = ({ title }) => (
	<h3 className='text-sm sm:text-base md:text-lg text-white font-bold border border-grayish p-2'>
		{title}
	</h3>
);

const TimelineItem = ({ dates }) => (
	<div className='border border-grayish flex flex-col text-grayish text-xs sm:text-sm md:text-md w-max p-2 sm:p-4 align-middle'>
		<p>{dates[0]}</p>
		<p>{dates[1]}</p>
	</div>
);

const Connector = () => (
	<div className='flex flex-col items-center'>
		<div className='border border-grayish w-0.5 h-24 sm:h-24 md:h-24 lg:h-24'></div>
	</div>
);

const EducationBox = ({ institution, details }) => (
	<div className='w-full max-w-[500px] flex flex-col border border-grayish gap-0'>
		<h3 className='text-xs sm:text-sm md:text-base text-white font-bold border-b border-grayish p-2'>
			{institution}
		</h3>
		<ul className='text-grayish text-xs sm:text-sm md:text-base p-2 list-disc list-inside'>
			{details.map((detail, index) => (
				<li key={index}>{detail}</li>
			))}
		</ul>
	</div>
);

const ExperienceBox = ({ company, details }) => (
	<div className='w-full max-w-[500px] flex flex-col border border-grayish gap-0'>
		<h3 className='text-xs sm:text-sm md:text-base text-white font-bold border-b border-grayish p-2'>
			{company}
		</h3>
		<ul className='text-grayish text-xs sm:text-sm md:text-base p-2 list-disc list-inside'>
			{details.map((detail, index) => (
				<li key={index}>{detail}</li>
			))}
		</ul>
	</div>
);

const LanguageItem = ({ language, proficiency }) => (
	<div className='flex flex-row justify-between text-xs sm:text-sm md:text-base text-grayish'>
		<span>{language}</span>
		<span>{proficiency}</span>
	</div>
);

const SkillItem = ({ skills }) => (
	<div className='flex flex-wrap gap-1 sm:gap-1 text-grayish p-1 text-xs sm:text-sm md:text-base'>
		{skills.map((skill, index) => (
			<span key={index}>{skill}</span>
		))}
	</div>
);

const CV = () => {
	const contactItems = [
		{
			icon: <FaGithub className='text-grayish text-sm md:text-md' />,
			text: "iamdashdev"
		},
		{
			icon: <IoLocationSharp className='text-grayish text-sm md:text-md' />,
			text: "Nyeri, Kenya"
		},
		{
			icon: <MdEmail className='text-grayish text-sm md:text-md' />,
			text: "mwangipolly@gmail.com"
		},
		{
			icon: <FaLinkedin className='text-grayish text-sm md:text-md' />,
			text: "polly-mwangi"
		},
		{
			icon: <FaPhoneAlt className='text-grayish text-sm md:text-md' />,
			text: "+254 740 100 476"
		}
	];

	const educationData = [
		{
			dates: ["Sep 2022", "Present"],
			institution: "Dedan Kimathi University of Technology",
			details: ["Bsc in Geospatial Information Systems and Remote sensing"]
		},
		{
			dates: ["Apr 2023", "Dec 2023"],
			institution: "W3 Schools",
			details: [
				"Covered HTML, CSS, and JavaScript basics",
				"Built several websites using HTML, CSS, and JavaScript",
				"Covered React basics"
			]
		},
		{
			dates: ["Jan 2024", "Dec 2024"],
			institution: "Code basics",
			details: [
				"Learnt Python basics",
				"Learnt Machine Learning basics",
				"Made a simple House price prediction model"
			]
		}
	];

	const experienceData = [
		{
			dates: ["Jan 2025", "May 2025"],
			company: "GDEV(Geospatial Developers Club)",
			details: [
				"Worked as a frontend developer for the Geospatial Developers Club",
				"Developed GDEV platform with the team",
				"Presented the team project"
			]
		},
		{
			dates: ["Jan 2025", "Mar 2025"],
			company: "GDEV(Geospatial Developers Club)",
			details: [
				"Conducted a training bootcamp in web development",
				"Taught about HTML, CSS basics"
			]
		},
		{
			dates: ["Jan 2026", "Apr 2026"],
			company: "Kengen(Internship)",
			details: [
				"Internshiped at KenGen HQ",
				"Did something and learnt something",
				"Made something and helped around a bit"
			]
		}
	];

	const languages = [
		{ language: "English", proficiency: "C2" },
		{ language: "Swahili", proficiency: "Native" },
		{ language: "Kikuyu", proficiency: "Native" },
		{ language: "French", proficiency: "A1" }
	];

	const skills = {
		skills: ["HTML", "CSS", "React", "Node JS", "Flask", "Tailwind", "Express"],
		tools: [
			"ArcGIS pro",
			"QGIS",
			"Agisoft metashape",
			"ENVI",
			"ERDAS",
			"Google Earth Engine",
			"Git"
		],
		programmingLanguages: ["Python", "JavaScript", "C#", "TypeScript"],
		hobbies: ["Reading novels", "Coding personal projects"]
	};

	return (
		<div className='w-full items-center bg-gray-950 flex justify-center pt-10 sm:pt-20 pb-10 sm:pb-20 h-full'>
			<div className='w-[95%] sm:w-[85%] md:w-[80%] bg-background p-5 sm:p-10 min-h-[100vh] flex flex-col gap-3'>
				<div className='flex lg:flex-row flex-col justify-between gap-4'>
					{/* Header Logo */}
					<div className='flex flex-col gap-1'>
						<div className='flex flex-row items-center gap-2'>
							<img src='logo.svg' alt='logo' className='w-10 sm:w-12' />
							<div className='text-white text-2xl sm:text-3xl md:text-4xl font-bold'>
								Polly Mwangi
							</div>
						</div>
						<div className='text-primary text-xs sm:text-sm md:text-md font-bold'>
							<p>Full-stack developer</p>
							<p>GIS developer</p>
						</div>
					</div>
					<div className='flex flex-wrap gap-2 sm:gap-4 justify-end sm:justify-start lg:w-[50%] sm:w-[90%]'>
						{contactItems.map((item, index) => (
							<ContactItem key={index} icon={item.icon} text={item.text} />
						))}
					</div>
				</div>

				<div className='w-full flex flex-col border border-grayish gap-2 sm:gap-4'>
					<SectionHeader title='Summary' />
					<p className='text-grayish text-xs sm:text-sm md:text-md p-2 sm:p-3'>
						I am a Full-stack and GIS developer with experience and passion in
						building spatial solutions. I have experience in working with GIS
						and Web development technologies.
					</p>
				</div>

				<div className='flex flex-col lg:flex-row gap-6 md:gap-10'>
					<div className='flex flex-col gap-6 md:gap-10'>
						{/* Education Section */}
						<div className='flex flex-col gap-2 sm:gap-3'>
							<SectionHeader title='Education' />
							<div className='flex flex-row gap-6 sm:gap-10 lg:gap-20'>
								<div className='flex flex-col gap-0 w-[80px] sm:w-[100px]'>
									{educationData.map((edu, index) => (
										<React.Fragment key={index}>
											<TimelineItem dates={edu.dates} />
											{index < educationData.length - 1 && <Connector />}
										</React.Fragment>
									))}
								</div>
								<div className='flex flex-col gap-4'>
									{educationData.map((edu, index) => (
										<EducationBox
											key={index}
											institution={edu.institution}
											details={edu.details}
										/>
									))}
								</div>
							</div>
						</div>

						{/* Experience Section */}
						<div className='flex flex-col gap-2 sm:gap-3'>
							<SectionHeader title='Experience' />
							<div className='flex flex-row gap-6 sm:gap-10 lg:gap-20'>
								<div className='flex flex-col gap-0 w-[80px] sm:w-[100px]'>
									{experienceData.map((exp, index) => (
										<React.Fragment key={index}>
											<TimelineItem dates={exp.dates} />
											{index < experienceData.length - 1 && <Connector />}
										</React.Fragment>
									))}
								</div>
								<div className='flex flex-col gap-4'>
									{experienceData.map((exp, index) => (
										<ExperienceBox
											key={index}
											company={exp.company}
											details={exp.details}
										/>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Side Column */}
					<div className='lg:flex lg:flex-col lg:gap-6 grid grid-cols-1 sm:grid-cols-2  gap-x-2 gap-y-3 relative'>
						{[
							{
								title: "Languages",
								content: languages.map((lang, i) => (
									<LanguageItem key={i} {...lang} />
								))
							},
							{
								title: "Skills",
								content: <SkillItem skills={skills.skills} />
							},
							{ title: "Tools", content: <SkillItem skills={skills.tools} /> },
							{
								title: "Programming Languages",
								content: <SkillItem skills={skills.programmingLanguages} />
							},
							{
								title: "Hobbies",
								content: <SkillItem skills={skills.hobbies} />
							}
						].map((section, idx) => (
							<div
								key={idx}
								className='w-full max-w-[250px] flex flex-col border border-grayish gap-2'>
								<SectionHeader title={section.title} />
								<div className='p-2'>{section.content}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CV;
