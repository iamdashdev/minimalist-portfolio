import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const Navbar = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 820);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 820);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<nav className='flex justify-between p-4 fixed w-full bg-background z-50'>
			<div className='flex justify-between flex-row gap-x-4 relative'>
				{!isMobile ? (
					<div className='flex flex-col items-center gap-y-4 absolute top-[0px] bg-background z-100'>
						<div className='h-40 w-0.5 bg-gray-600'></div>
						<a
							href='https://github.com/iamdashdev'
							target='_blank'
							className='socials bg-background'>
							<FaGithub />
						</a>
						<a
							href='https://www.linkedin.com/in/polly-mwangi-a0099b2a5/'
							target='_blank'
							className='socials bg-background'>
							<FaLinkedin />
						</a>
						<a
							href='mailto:mwangipolly904@gmail.com'
							target='_blank'
							className='socials bg-background'>
							<FaEnvelope />
						</a>
					</div>
				) : (
					<></>
				)}
				<a href='/'>
					<div className='ml-12 inline-flex flex-row gap-1'>
						<img src='./assets/icons/logo.svg' alt='logo' className='h-8' />
						<h1 className='text-xl text-whitish font-extrabold'>Polly</h1>
					</div>
				</a>
			</div>

			{isMobile ? (
				<>
					<motion.button
						onClick={() => setNavbarOpen(!navbarOpen)}
						whileTap={{ scale: 0.9 }}
						className='z-20 relative'>
						<img
							src={
								navbarOpen
									? "./assets/icons/close.svg"
									: "./assets/icons/toggle.svg"
							}
							alt='menu'
							className='h-6 w-6'
						/>
					</motion.button>

					<AnimatePresence>
						{navbarOpen && (
							<motion.div
								initial={{ y: "-100%" }}
								animate={{ y: 0 }}
								exit={{ y: "-100%" }}
								transition={{ duration: 0.35, ease: [0.75, -0.02, 0.85, 0.1] }}
								className='fixed top-12 left-0 w-full h-[60vh] bg-background !bg-opacity-100 justify-between flex flex-col gap-10 py-10 px-6 shadow-md z-1000'>
								<ul className='flex flex-col gap-6 items-start'>
									<li>
										<a href='#home' className='nav-link'>
											<span className='text-primary'>#</span>home
										</a>
									</li>
									<li>
										<a href='#about' className='nav-link'>
											<span className='text-primary'>#</span>about-me
										</a>
									</li>
									<li>
										<a href='#skills' className='nav-link'>
											<span className='text-primary'>#</span>skills
										</a>
									</li>
									<li>
										<a href='#projects' className='nav-link'>
											<span className='text-primary'>#</span>projects
										</a>
									</li>
									<li>
										<a href='#contact' className='nav-link'>
											<span className='text-primary'>#</span>contact
										</a>
									</li>
								</ul>
								<div className='flex flex-row gap-4 w-full items-center justify-center justify-self-end self-baseline'>
									<a href='github.com' className='socials'>
										<FaGithub />
									</a>
									<a href='linkedin.com' className='socials'>
										<FaLinkedin />
									</a>
									<a href='gmail.com' className='socials'>
										<FaEnvelope />
									</a>
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</>
			) : (
				<ul className='flex gap-6 mr-12 bg-background'>
					<li>
						<a href='#home' className='nav-link'>
							<span className='text-primary'>#</span>home
						</a>
					</li>
					<li>
						<a href='#about' className='nav-link'>
							<span className='text-primary'>#</span>about-me
						</a>
					</li>
					<li>
						<a href='#skills' className='nav-link'>
							<span className='text-primary'>#</span>skills
						</a>
					</li>
					<li>
						<a href='#projects' className='nav-link'>
							<span className='text-primary'>#</span>projects
						</a>
					</li>
					<li>
						<a href='#contact' className='nav-link'>
							<span className='text-primary'>#</span>contact
						</a>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
