'use client';

import { useState, useRef } from 'react';
import { Body, LineMask } from './styles';
import { motion, useInView, Variants } from 'framer-motion';

type MaskTextProps = {
  phrases: string[];
  tag: 'h1' | 'h2' | 'h3' | 'p';
};

const MaskText = ({ phrases, tag }: MaskTextProps) => {
  const body = useRef<HTMLDivElement>(null);
  const isInView = useInView(body, { once: true, margin: '-10%', amount: 0.4 });

  // Typed as Variants
  const animate: Variants = {
    initial: { y: '100%' }, // text starts below view
    open: (i: number) => ({
      y: '0%', // slide up
      transition: {
        duration: 1,
        delay: 0.1 * i,
        ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
      },
    }),
  };

  const MotionTag = (phraseTag: string) => {
    switch (phraseTag) {
      case 'h1':
        return motion.h1;
      case 'h2':
        return motion.h2;
      case 'h3':
        return motion.h3;
      default:
        return motion.p;
    }
  };

  const TagComponent = MotionTag(tag);

  return (
    <Body ref={body}>
      {phrases.map((phrase, index) => (
        <LineMask key={index}>
          <TagComponent
            variants={animate}
            initial="initial"
            animate={isInView ? 'open' : 'initial'}
            custom={index}
            style={{ display: 'block' }}
          >
            {phrase}
          </TagComponent>
        </LineMask>
      ))}
    </Body>
  );
};

export default MaskText;
