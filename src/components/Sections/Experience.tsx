'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Briefcase, ChevronDown, Check, Building } from 'lucide-react';
import { Card } from '../ui/Card';

interface Job {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
  platforms?: string[];
}

const EXPERIENCES: Job[] = [
  {
    company: 'Nutex Apparel Limited',
    role: 'E-commerce Manager',
    duration: 'Feb 2017 – Present',
    responsibilities: [
      'Managed complete e-commerce operations across multiple marketplaces.',
      'Managed a catalog of 18,000+ products.',
      'Handled approximately 2,000 customer orders daily with the operations team.',
      'Managed product listings, inventory, pricing and catalog optimization.',
      'Worked on Shopify store management.',
      'Created Amazon A+ Content and optimized listings.',
      'Managed Google Ads and SEO activities.',
      'Prepared business reports using Excel (VLOOKUP, Pivot Tables & Data Validation).',
      'Handled portal settlements, TDS claims and coordination with internal teams.'
    ],
    platforms: ['Amazon', 'Flipkart', 'Meesho', 'Snapdeal', 'Paytm', 'Limeroad', 'Shopify']
  },
  {
    company: 'ABGS Group Data Outsources Pvt. Ltd.',
    role: 'Product Uploading / Data Uploading Executive',
    duration: 'Jan 2016 – Jan 2017',
    responsibilities: [
      'Product uploads, marketplace operations, inventory updates and data validation.'
    ],
    platforms: ['Amazon', 'Flipkart', 'Snapdeal', 'Paytm', 'Meesho', 'Shopify']
  },
  {
    company: 'ICICI Bank (3i-Infotech Payroll)',
    role: 'Data Entry Executive',
    duration: 'Jan 2014 – Dec 2015',
    responsibilities: [
      'Customer database management and Excel reporting.'
    ]
  }
];

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default first item open

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-accent-sky border border-primary-blue/10 mb-4"
          >
            <Briefcase size={12} />
            Career History
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Professional Experience
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-blue to-accent-sky rounded-full mt-4" />
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative pl-6 md:pl-10 border-l border-slate-200 dark:border-slate-800 flex flex-col gap-12">
          
          {EXPERIENCES.map((job, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={idx} className="relative group">
                
                {/* Timeline Connector Dot */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`absolute -left-[31px] md:-left-[47px] top-6 w-5 h-5 rounded-full border-4 border-white dark:border-[#070b14] shadow-sm z-10 flex items-center justify-center transition-colors duration-300 ${
                    isExpanded 
                      ? 'bg-primary-blue dark:bg-accent-sky' 
                      : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-primary-blue/50'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isExpanded ? 'bg-white' : 'bg-transparent'}`} />
                </motion.div>

                {/* Job Card */}
                <Card
                  delay={idx * 0.1}
                  whileHover={false} // Disable default translate-y hover to use toggle action
                  className={`bg-white dark:bg-slate-900/30 border ${
                    isExpanded 
                      ? 'border-primary-blue/30 dark:border-accent-sky/30 shadow-lg shadow-blue-500/5' 
                      : 'border-slate-900/5 dark:border-white/5 shadow-sm'
                  } transition-all duration-300`}
                >
                  {/* Card Header (Always Visible) */}
                  <div
                    onClick={() => toggleExpand(idx)}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                          <Building size={16} />
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary-blue dark:group-hover:text-accent-sky transition-colors">
                          {job.company}
                        </h3>
                      </div>
                      <p className="text-sm font-semibold text-primary-blue dark:text-accent-sky">
                        {job.role}
                      </p>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-3 shrink-0">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-semibold bg-slate-100 dark:bg-slate-800/60 px-3 py-1.5 rounded-lg border border-slate-900/5 dark:border-white/5">
                        <Calendar size={12} />
                        {job.duration}
                      </div>
                      
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-slate-400 hover:text-slate-600 dark:hover:text-white"
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Card Expandable Body */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 20 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden border-t border-slate-100 dark:border-slate-800/50 pt-5 flex flex-col gap-5"
                      >
                        {/* Responsibilities list */}
                        <div className="flex flex-col gap-3">
                          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Responsibilities</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {job.responsibilities.map((resp, respIdx) => (
                              <li key={respIdx} className="flex gap-2.5 items-start text-xs leading-relaxed text-slate-650 dark:text-slate-300">
                                <span className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20 shrink-0 mt-0.5">
                                  <Check size={10} className="stroke-[3px]" />
                                </span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Platforms tag cloud */}
                        {job.platforms && (
                          <div className="flex flex-col gap-2.5">
                            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Marketplaces & Channels Managed</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.platforms.map((plat, platIdx) => (
                                <span
                                  key={platIdx}
                                  className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-650 dark:bg-slate-850 dark:text-slate-300 border border-slate-900/5 dark:border-white/5 hover:border-primary-blue/30 dark:hover:border-accent-sky/30 transition-colors"
                                >
                                  {plat}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                      </motion.div>
                    )}
                  </AnimatePresence>

                </Card>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
