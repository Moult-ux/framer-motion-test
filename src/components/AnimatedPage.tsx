import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  children: ReactNode;
  menuIsGoingDown: number;
}

const exitDistance = 600;
const pageMotionVariants: Variants = {
  top: {
    opacity: 0,
    y: -exitDistance,
  },
  bottom: {
    opacity: 0,
    y: exitDistance,
  },
  normal: {
    opacity: 1,
    y: 0,
  },
};

const AnimatedPage = ({ children, ...props }: Props) => {
  return (
    <motion.div
      variants={pageMotionVariants}
      initial={props.menuIsGoingDown === 1 ? "bottom" : "top"}
      animate={"normal"}
      exit={props.menuIsGoingDown === 1 ? "top" : "bottom"}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
