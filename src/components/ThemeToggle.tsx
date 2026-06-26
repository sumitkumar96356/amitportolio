'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by waiting until client-side mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 animate-pulse border border-slate-300/10" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/40 dark:bg-[#0f172a]/40 border border-slate-900/10 dark:border-white/10 hover:border-primary-blue/50 dark:hover:border-accent-sky/50 cursor-pointer shadow-sm backdrop-blur-md transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark/light mode"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 0 : 1,
          rotate: theme === 'dark' ? 90 : 0,
          opacity: theme === 'dark' ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute text-slate-800"
      >
        <Sun size={20} className="stroke-[2px]" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === 'dark' ? 1 : 0,
          rotate: theme === 'dark' ? 0 : -90,
          opacity: theme === 'dark' ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute text-accent-sky"
      >
        <Moon size={20} className="stroke-[2px]" />
      </motion.div>
    </motion.button>
  );
}
