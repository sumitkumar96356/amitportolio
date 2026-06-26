'use client';

import { motion } from 'framer-motion';
import { Calendar, Layers, Package, HeartHandshake, Award } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

function Counter({ value, suffix = '', duration = 1500 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalSteps = Math.min(end, 60); // limit update iterations for smooth UI rendering
    const stepTime = duration / totalSteps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / totalSteps;
      const nextCount = Math.floor(end * progress);
      
      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(nextCount);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref} className="font-mono">{count.toLocaleString()}{suffix}</span>;
}

const STATS = [
  {
    icon: <Calendar className="text-primary-blue dark:text-accent-sky" size={24} />,
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    desc: 'Expertise in multi-channel e-commerce operations.'
  },
  {
    icon: <Package className="text-emerald-500" size={24} />,
    value: 18000,
    suffix: '+',
    label: 'SKUs Managed',
    desc: 'Large catalog optimization and listings synchronization.'
  },
  {
    icon: <Layers className="text-amber-500" size={24} />,
    value: 2000,
    suffix: '+',
    label: 'Daily Orders Handled',
    desc: 'Supporting high-volume e-commerce fulfillment.'
  },
  {
    icon: <HeartHandshake className="text-rose-500" size={24} />,
    value: 100,
    suffix: '%',
    label: 'Operational Accuracy',
    desc: 'Ensuring zero stockouts and perfect TDS/portal reconciliation.'
  }
];

export default function Achievements() {
  return (
    <section className="relative py-20 overflow-hidden bg-slate-900 text-white dark:bg-[#040810] border-y border-slate-850">
      {/* Background ambient blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-slate-300 border border-white/10 mb-4"
          >
            <Award size={12} />
            Key Benchmarks
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-white font-sans"
          >
            Milestones & Statistics
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-blue to-accent-sky rounded-full mt-4" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center gap-4 transition-all duration-300 hover:border-white/20 hover:bg-white/10"
            >
              <div className="p-3.5 rounded-xl bg-white/5 flex items-center justify-center">
                {stat.icon}
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs font-bold text-slate-200 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
              
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
