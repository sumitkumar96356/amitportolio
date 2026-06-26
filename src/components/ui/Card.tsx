'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  whileHover?: any;
}

export function Card({ children, className = '', delay = 0, whileHover }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={whileHover || { y: -5 }}
      className={`glass-card rounded-2xl p-6 relative overflow-hidden ${className}`}
    >
      {/* Subtle background corner glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary-blue/5 via-accent-sky/5 to-transparent blur-xl pointer-events-none rounded-full" />
      {children}
    </motion.div>
  );
}
