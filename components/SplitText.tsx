"use client";

import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  delay?: number;
}

export default function SplitText({ text, as: Tag = 'h2', className = '', delay = 30 }: SplitTextProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: delay / 1000 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  const MotionTag = motion[Tag as keyof typeof motion] as any;

  return (
    <MotionTag
      className={`ht-split-text ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {words.map((word, wi) => (
        <span key={`word-${wi}`} className="word" style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, ci) => (
            <motion.span key={`${wi}-${ci}`} variants={child} style={{ display: 'inline-block' }}>
              {char}
            </motion.span>
          ))}
          {wi < words.length - 1 && (
            <span style={{ display: 'inline-block', width: '0.28em' }}>{'\u00A0'}</span>
          )}
        </span>
      ))}
    </MotionTag>
  );
}
