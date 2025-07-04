import React from "react";
import { motion } from "framer-motion";

const DotsAnimation = () => {
	// Create an array of 25 dots (5 x 5)
	const dots = Array.from({ length: 25 });

	return (
		<div className='z-[-1000] pointer-events-none'>
			<div className='grid grid-cols-5 gap-4'>
				{dots.map((_, index) => (
					<motion.div
						key={index}
						className='w-1 h-1 rounded-full bg-white'
						animate={{
							opacity: [0.2, 1, 0.2]
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							repeatType: "loop",
							ease: "easeInOut",
							delay: (index % 5) * 0.1 + Math.floor(index / 5) * 0.1 // staggered flicker
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default DotsAnimation;
