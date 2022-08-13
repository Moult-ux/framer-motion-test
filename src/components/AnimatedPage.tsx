import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  children: ReactNode;
  menuIsGoingDown: number;
  selectedMenuId: number;
}

const exitDistance = 600;
const animationDuration = 0.2;
const pageMotionVariants: Variants = {
  top: {
    opacity: 0,
    y: -exitDistance,
    transition: { duration: animationDuration },
  },
  bottom: {
    opacity: 0,
    y: exitDistance,
    transition: { duration: animationDuration },
  },
  normal: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeIn", duration: animationDuration },
  },
};

const AnimatedPage = ({ children, ...props }: Props) => {
  return (
    <motion.div
      key={props.selectedMenuId}
      variants={pageMotionVariants}
      initial={props.menuIsGoingDown === 1 ? "bottom" : "top"}
      animate={"normal"}
      exit={props.menuIsGoingDown === 1 ? "top" : "bottom"}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
