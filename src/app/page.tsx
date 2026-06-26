'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Experience from '@/components/Sections/Experience';
import Skills from '@/components/Sections/Skills';
import Achievements from '@/components/Sections/Achievements';
import Services from '@/components/Sections/Services';
import Education from '@/components/Sections/Education';
import Contact from '@/components/Sections/Contact';
import { ArrowUp } from 'lucide-react';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Premium Loader Overlay */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col min-h-screen bg-[#f8fafc] text-[#0f172a] dark:bg-[#070b14] dark:text-[#f1f5f9] selection:bg-primary-blue/20 selection:text-primary-blue"
        >
          {/* Header/Navbar */}
          <Navbar />

          {/* Main Portfolio Sections */}
          <main className="flex-grow">
            <Hero />
            <About />
            <Experience />
            <Achievements />
            <Skills />
            <Services />
            <Education />
            <Contact />
          </main>

          {/* Footer */}
          <footer className="border-t border-slate-900/10 dark:border-white/10 py-12 bg-white dark:bg-[#040810] transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-blue to-accent-sky flex items-center justify-center font-bold text-white text-sm shadow-md shadow-blue-500/15">
                  A
                </div>
                <span className="font-bold text-base text-slate-800 dark:text-white">
                  Amit Kumar Pal
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                &copy; 2026 Amit Kumar Pal. All Rights Reserved.
              </p>
              <div className="flex gap-4 text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                <span>E-commerce Manager</span>
              </div>
            </div>
          </footer>

          {/* Scroll to Top Trigger */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 z-40 w-10 h-10 flex items-center justify-center rounded-xl bg-primary-blue hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20 cursor-pointer transition-all duration-300 hover:-translate-y-1"
                aria-label="Scroll to top"
              >
                <ArrowUp size={18} className="stroke-[2.5px]" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </>
  );
}
