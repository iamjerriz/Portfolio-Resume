'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
  amount?: number;
}

const container = {
  hidden: {},
  visible: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export default function StaggerReveal({
  children,
  className,
  stagger = 0.1,
  once = true,
  amount = 0.15,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      variants={container}
      custom={stagger}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}
