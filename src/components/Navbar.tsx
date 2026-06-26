'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-white/70 dark:bg-[#070b14]/70 backdrop-blur-md border-b border-slate-900/10 dark:border-white/10 shadow-sm'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-blue to-accent-sky flex items-center justify-center font-bold text-white shadow-md shadow-blue-500/20">
              A
            </div>
            <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-white transition-colors duration-300">
              Amit Kumar Pal
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary-blue dark:hover:text-accent-sky transition-colors relative py-1 group cursor-pointer"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary-blue dark:bg-accent-sky transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="h-5 w-[1px] bg-slate-300 dark:bg-slate-800" />

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-primary-blue hover:bg-blue-600 rounded-xl shadow-md shadow-blue-500/15 hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
              >
                Hire Me
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-900/5 dark:border-white/5 text-slate-800 dark:text-white cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[75px] left-6 right-6 z-30 p-6 rounded-2xl bg-white/95 dark:bg-[#070b14]/95 border border-slate-900/10 dark:border-white/10 shadow-xl backdrop-blur-lg flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-base font-semibold py-2 border-b border-slate-100 dark:border-slate-800/50 text-slate-700 dark:text-slate-300 hover:text-primary-blue dark:hover:text-accent-sky transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="w-full py-3 flex items-center justify-center gap-2 text-sm font-semibold text-white bg-primary-blue rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all cursor-pointer"
            >
              Hire Me
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
