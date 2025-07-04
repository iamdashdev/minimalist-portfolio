import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
	return (
		<section className='mt-0 w-full p-12 z-[-1] relative' id='contact'>
			{/* Header */}
			<div className='flex flex-row items-center gap-0 w-[80%]'>
				<h1 className='text-xl lg:text-3xl text-white font-black min-w-[200px]'>
					<span className='text-primary'>#</span>contact
				</h1>
				<div className='h-0.5 w-1/2 bg-primary ml-[-10%] md:ml-[-10%] lg:ml-[-5%]'></div>
			</div>
			{/* Section content */}
			<div className='flex flex-col md:flex-row w-full gap-10'>
				<p className='text-white text-lg mt-6 w-[100%] md:w-[60%]'>
					I am interested in Freelance opportunities, part-time remote jobs and
					full time jobs in any region across Kenya. my inbox is always open.
					Whether you have a question or just want to say hi, I’ll try my best
					to get back to you!
				</p>
				<div className='border-gray-600 border-2 p-4 mt-6 flex flex-col gap-6  justify-center h-[200px] w-max lg:w-[300px] text-whitish'>
					<a
						href='https://www.linkedin.com/in/polly-mwangi-a0099b2a5/'
						className='flex flex-row items-center gap-2'>
						<FaLinkedin />
						<p>Polly Mwangi</p>
					</a>
					<a
						href='mailto:njoki6708@gmail.com'
						className='flex flex-row items-center gap-2'>
						<MdOutlineEmail />
						<p className='text-white'>njoki6708@gmail.com</p>
					</a>
					<a
						href='tel:254740100476'
						className='flex flex-row items-center gap-2'>
						<FaPhoneAlt />
						<p className='text-white'>+254740100476</p>
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
