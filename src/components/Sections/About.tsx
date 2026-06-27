'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '../ui/Card';
import { Sparkles, Database, CheckSquare, Target } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: <Database className="text-primary-blue dark:text-accent-sky" size={20} />,
    title: 'Multi-Channel Sync',
    desc: 'Synchronizing stock flows across 8+ major e-commerce marketplaces.'
  },
  {
    icon: <Target className="text-emerald-500" size={20} />,
    title: 'Listing Optimization',
    desc: 'Refining content templates to achieve search visibility scores of 95%+.'
  },
  {
    icon: <CheckSquare className="text-amber-500" size={20} />,
    title: 'Data Precision',
    desc: 'Using Excel VLOOKUP and mapping logic for zero-error sheet processing.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
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
            <Sparkles size={12} />
            Professional Profile
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-blue to-accent-sky rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Profile Picture (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-full lg:max-w-[380px] aspect-square rounded-2xl overflow-hidden glass-card p-2 group shadow-2xl">
              {/* Outer decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-blue via-accent-sky to-indigo-500 opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl" />
              
              {/* Profile Image Wrapper */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                <Image
                  src="/assets/profile.png"
                  alt="Amit Kumar Pal"
                  fill
                  sizes="(max-w-768px) 100vw, 350px"
                  priority
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Decorative floating widget */}
              <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-900 border border-slate-900/10 dark:border-white/10 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 group-hover:-translate-y-1 transition-transform duration-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-semibold text-slate-800 dark:text-white">Active Now</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text content (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6 text-slate-700 dark:text-slate-300"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Bridging catalog structures and marketplace algorithms.
            </h3>
            
            <p className="text-sm md:text-base leading-relaxed">
              I am an experienced E-commerce Manager with more than 10 years of expertise in managing online marketplaces, product catalog operations, inventory management, order processing, and data administration. Throughout my career, I have successfully worked with leading marketplaces including <span className="font-semibold text-slate-900 dark:text-white">Amazon, Flipkart, Meesho, Myntra, Snapdeal, Paytm, Limeroad, and Shopify</span> store management.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              My expertise lies in product listing optimization, inventory management, Shopify store management, Amazon A+ Content optimization, Google Ads management, SEO (On-Page & Off-Page), portal settlements, and TDS claims reconciliation.
            </p>

            <div className="border-t border-slate-900/10 dark:border-white/10 pt-6 grid grid-cols-2 gap-4">
              <div>
                <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">Expertise</span>
                <span className="block text-sm font-bold mt-1 text-slate-800 dark:text-white">E-commerce Manager</span>
              </div>
              <div>
                <span className="block text-xs text-slate-400 font-semibold uppercase tracking-wider">Email Contact</span>
                <a 
                  href="mailto:amitpal.125@gmail.com" 
                  className="block text-sm font-bold mt-1 text-primary-blue dark:text-accent-sky hover:underline transition-colors"
                >
                  amitpal.125@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Highlights Row (Below the main info) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {HIGHLIGHTS.map((item, index) => (
            <Card
              key={index}
              delay={index * 0.1}
              whileHover={{ y: -8 }}
              className="flex gap-4 items-start bg-white dark:bg-slate-900/40 p-6 border border-slate-900/5 dark:border-white/5 shadow-md"
            >
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-bold text-base text-slate-800 dark:text-white">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
