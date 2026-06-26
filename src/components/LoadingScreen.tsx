'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500; // 1.5 seconds loading time
    const intervalTime = 15;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300); // slight pause at 100%
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070b14] text-white"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="max-w-md w-full px-6 flex flex-col items-center">
        {/* Animated Initials */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-accent-sky to-indigo-500 mb-2 font-sans"
        >
          AMIT KUMAR PAL
        </motion.div>

        {/* Subheading */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xs uppercase tracking-wider text-slate-400 font-medium mb-8 text-center"
        >
          E-commerce Manager
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-48 h-[3px] bg-slate-800 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-blue to-accent-sky rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage text */}
        <motion.span
          className="text-[10px] text-slate-500 font-mono mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {Math.round(progress)}%
        </motion.span>
      </div>
    </motion.div>
  );
}
