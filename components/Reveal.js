"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Reveal({ children, className = "", delay = 0, y = 24 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function FadeImage({ src, alt, className = "" }) {
  return (
    <motion.div
      initial={{ scale: 1.05, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />
    </motion.div>
  );
}