'use client';

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Layers, Wrench, Monitor, ShieldCheck } from 'lucide-react';

const SKILL_BARS = [
  { name: 'End-to-End E-commerce Operations', percent: 98 },
  { name: 'Catalog & Listing Optimization', percent: 98 },
  { name: 'Inventory & Order Management', percent: 97 },
  { name: 'Advanced Excel (VLOOKUP, Pivot Tables)', percent: 97 },
  { name: 'Shopify Store Management', percent: 95 },
  { name: 'SEO & Google Ads', percent: 92 },
  { name: 'Portal Settlement & TDS Claims', percent: 94 },
  { name: 'Team Collaboration', percent: 95 }
];

const TECHNICAL_CATEGORIES = [
  {
    title: 'Marketplace & Platforms',
    icon: <Layers size={20} className="text-primary-blue dark:text-accent-sky" />,
    skills: ['Amazon', 'Flipkart', 'Meesho', 'Snapdeal', 'Paytm', 'Limeroad', 'Shopify Store']
  },
  {
    title: 'E-commerce Operations',
    icon: <Wrench size={20} className="text-emerald-500" />,
    skills: ['Amazon A+ Content', 'Google Ads', 'SEO (On-Page & Off-Page)', 'Inventory & Order Management', 'Catalog Management', 'Portal Settlements', 'TDS Claims']
  },
  {
    title: 'Tools & Qualifications',
    icon: <Monitor size={20} className="text-amber-500" />,
    skills: ['MS Excel (VLOOKUP, Pivot)', 'Data Validation', 'Tally 7.2', 'Hardware & Networking']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
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
            <ShieldCheck size={12} />
            Core Capabilities
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Skills & Technical Expertise
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-blue to-accent-sky rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Skill Bars (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-sans">
              Operational Performance
            </h3>
            <div className="flex flex-col gap-5">
              {SKILL_BARS.map((skill, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-slate-700 dark:text-slate-350">{skill.name}</span>
                    <span className="text-primary-blue dark:text-accent-sky font-mono">{skill.percent}%</span>
                  </div>
                  {/* Skill track */}
                  <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: index * 0.05, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-primary-blue to-accent-sky rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Cards Layout (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 font-sans">
                Technical Toolkit
              </h3>
              <div className="flex flex-col gap-6">
                {TECHNICAL_CATEGORIES.map((category, index) => (
                  <Card
                    key={index}
                    delay={index * 0.15}
                    whileHover={{ y: -4 }}
                    className="bg-white dark:bg-slate-900/40 p-5 border border-slate-900/5 dark:border-white/5"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center">
                        {category.icon}
                      </div>
                      <h4 className="font-bold text-base text-slate-850 dark:text-white">
                        {category.title}
                      </h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100/60 text-slate-650 dark:bg-slate-800/60 dark:text-slate-300 border border-slate-900/5 dark:border-white/5 hover:border-primary-blue/30 dark:hover:border-accent-sky/30 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
