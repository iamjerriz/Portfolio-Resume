'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GlitchTextProps {
  words: string[];
  prefixes?: string[];
  pauseDuration?: number;
  className?: string;
  prefixClassName?: string;
}

export default function TypeWriter({ words, prefixes, pauseDuration = 2000, className, prefixClassName }: GlitchTextProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);
  const currentPrefix = prefixes?.[wordIndex] ?? '';

  // Random micro-glitches between transitions
  useEffect(() => {
    const scheduleFlicker = () => {
      const delay = 1500 + Math.random() * 2000;
      return setTimeout(() => {
        setIsGlitching(true);
        const off = setTimeout(() => setIsGlitching(false), 150 + Math.random() * 200);
        flickerCleanup = off;
        timer = scheduleFlicker();
      }, delay);
    };

    let flickerCleanup: ReturnType<typeof setTimeout>;
    let timer = scheduleFlicker();

    return () => {
      clearTimeout(timer);
      clearTimeout(flickerCleanup);
    };
  }, []);

  // Word cycling — loops forever
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);

      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setTimeout(() => setIsGlitching(false), 300);
      }, 300);
    }, pauseDuration);

    return () => clearInterval(interval);
  }, [wordIndex, words.length, pauseDuration]);

  return (
    <span className={`glitch-wrapper ${className ?? ''}`}>
      {prefixes && (
        <AnimatePresence mode='wait'>
          <motion.span
            key={currentPrefix}
            className={prefixClassName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {currentPrefix}
          </motion.span>
        </AnimatePresence>
      )}
      <AnimatePresence mode='wait'>
        <motion.span
          key={words[wordIndex]}
          className={`glitch-text inline-block ${isGlitching ? 'glitching' : ''}`}
          data-text={words[wordIndex]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {words[wordIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
