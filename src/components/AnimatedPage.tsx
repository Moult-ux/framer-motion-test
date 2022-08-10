import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  fromTop: boolean;
}

const exitDistance = 400;
const AnimatedPage = ({ children, ...props }: Props) => {
  const sideToggle = props.fromTop ? 1 : -1;

  return (
    <motion.div
      initial={{ opacity: 0, y: sideToggle * exitDistance }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -1 * sideToggle * exitDistance }}
      transition={{ duration: 2 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
