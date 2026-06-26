'use client';

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import {
  Tag,
  Boxes,
  Globe,
  ShoppingBag,
  CheckSquare,
  FileSpreadsheet,
  Sparkles,
  Receipt,
  Activity
} from 'lucide-react';

const SERVICES = [
  {
    icon: <Tag size={20} className="text-primary-blue dark:text-accent-sky" />,
    title: 'Product Listing Management',
    desc: 'Creating optimized, search-friendly product listings (both single and bulk) on major marketplaces to maximize customer visibility and conversion rates.'
  },
  {
    icon: <Boxes size={20} className="text-emerald-500" />,
    title: 'Inventory Management',
    desc: 'Maintaining real-time inventory synchronization across multi-channel retail portals to eliminate double-selling, stockout risks, and dispatch delays.'
  },
  {
    icon: <Globe size={20} className="text-amber-500" />,
    title: 'Marketplace Operations',
    desc: 'End-to-end administration of seller panels on Amazon, Flipkart, Meesho, Snapdeal, and others, aligning with performance metrics and platform policies.'
  },
  {
    icon: <ShoppingBag size={20} className="text-indigo-500" />,
    title: 'Shopify Store Management',
    desc: 'Configuring, building, and maintaining Shopify stores, including catalog integration, theme setup, application configurations, and checkout flows.'
  },
  {
    icon: <CheckSquare size={20} className="text-rose-500" />,
    title: 'Order Processing',
    desc: 'Fulfilling daily orders within SLA margins, audit tracking, generation of shipping manifest batches, and handling prompt returns/reconciliations.'
  },
  {
    icon: <Receipt size={20} className="text-teal-500" />,
    title: 'Portal Settlements & TDS Claims',
    desc: 'Managing financial settlements, coordinating marketplace payouts, commission audits, and processing TDS tax claims to recover margins.'
  },
  {
    icon: <FileSpreadsheet size={20} className="text-cyan-500" />,
    title: 'Advanced Excel Analysis',
    desc: 'Generating analytical reports using VLOOKUP, SUMIFS, and Pivot Tables. Delivering visual charts to analyze marketplace commissions and sales trend metrics.'
  },
  {
    icon: <Sparkles size={20} className="text-purple-500" />,
    title: 'Amazon A+ Content & SEO',
    desc: 'Creating high-converting A+ Content, optimizing listing copy, managing Google Ads campaigns, and implementing On-Page/Off-Page SEO strategies.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
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
            <Activity size={12} />
            Services Offered
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans"
          >
            What I Do
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-blue to-accent-sky rounded-full mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, index) => (
            <Card
              key={index}
              delay={index * 0.05}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white dark:bg-slate-900/40 p-6 flex flex-col gap-4 border border-slate-900/5 dark:border-white/5"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                {srv.icon}
              </div>
              
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-base text-slate-800 dark:text-white">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                  {srv.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
