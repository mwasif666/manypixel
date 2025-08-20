import React from "react";
import { motion, useAnimation } from "framer-motion";

const ChevronLeft = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#0099f6",
  ...props
}) => {
  const controls = useAnimation();

  const chevronVariants = {
    normal: {
      x: 0,
      opacity: 1,
    },
    animate: {
      x: [-4, 0],
      opacity: [0.3, 1],
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      style={{
        cursor: "pointer",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="m15 18-6-6 6-6"
          variants={chevronVariants}
          animate={controls}
          initial="normal"
        />
      </svg>
    </div>
  );
};

export default ChevronLeft;
