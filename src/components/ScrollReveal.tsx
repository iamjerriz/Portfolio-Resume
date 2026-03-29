'use client';

import { useRef } from 'react';
import { motion, useInView, type TargetAndTransition } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const offsets: Record<Direction, TargetAndTransition> = {
  up: { opacity: 0, y: 60 },
  down: { opacity: 0, y: -60 },
  left: { opacity: 0, x: 60 },
  right: { opacity: 0, x: -60 },
  none: { opacity: 0, scale: 0.95 },
};

const visible: TargetAndTransition = {
  opacity: 1,
  x: 0,
  y: 0,
  scale: 1,
};

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className,
  once = true,
  amount = 0.2,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      initial={offsets[direction]}
      animate={isInView ? visible : offsets[direction]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
