"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ScaleInProps = {
  children: ReactNode;
  className?: string;
};

export default function ScaleIn({ children, className }: ScaleInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
