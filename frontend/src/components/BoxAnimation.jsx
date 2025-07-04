import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BoxAnimation = ({
  width = 250,
  height = 150,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="">
      <div
        className="relative z-[-1]"
        ref={ref}
        style={{ width, height }}
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${height}`}
          className="absolute top-0 left-0"
        >
          <motion.rect
            x="0"
            y="0"
            width={width}
            height={height}
            stroke="white"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default BoxAnimation;
