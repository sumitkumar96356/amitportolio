'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, TrendingUp, CheckCircle, Package, RefreshCw, Check } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DashboardMockup() {
  const [synced, setSynced] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSynced((prev) => !prev);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-video md:aspect-[4/3] lg:aspect-[1.35/1] glass-card rounded-2xl p-4 md:p-6 overflow-hidden flex flex-col gap-4 text-xs font-sans max-w-2xl mx-auto shadow-2xl">
      {/* Top Header of Mockup */}
      <div className="flex items-center justify-between border-b border-slate-900/10 dark:border-white/10 pb-3">
        <div className="flex items-center gap-2">
          {/* Mock Window Controls */}
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80 block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80 block" />
          </div>
          <span className="ml-2 font-mono text-[9px] text-slate-400 dark:text-slate-500">inventory_ops_sheet.xls</span>
        </div>
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: synced ? 360 : 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="text-primary-blue dark:text-accent-sky"
          >
            <RefreshCw size={12} />
          </motion.div>
          <span className="text-[10px] text-slate-500 font-medium">
            {synced ? 'Marketplace Feeds Synced' : 'Syncing inventory sheets...'}
          </span>
        </div>
      </div>

      {/* Grid of KPI Widgets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Metric 1 */}
        <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-900/5 dark:border-white/5 flex flex-col gap-1">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-[10px]">Sales Volume</span>
            <TrendingUp size={12} className="text-emerald-500" />
          </div>
          <span className="text-sm font-bold font-mono text-slate-800 dark:text-white">₹14.8M</span>
          <span className="text-[9px] text-emerald-500 font-semibold flex items-center gap-0.5">
            +18.4% <span className="text-slate-400 dark:text-slate-500">MoM</span>
          </span>
        </div>

        {/* Metric 2 */}
        <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-900/5 dark:border-white/5 flex flex-col gap-1">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-[10px]">Catalog SKUs</span>
            <ShoppingBag size={12} className="text-primary-blue dark:text-accent-sky" />
          </div>
          <span className="text-sm font-bold font-mono text-slate-800 dark:text-white">18k+</span>
          <span className="text-[9px] text-slate-400 dark:text-slate-500">Products Live</span>
        </div>

        {/* Metric 3 */}
        <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-900/5 dark:border-white/5 flex flex-col gap-1">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-[10px]">Order SLA</span>
            <CheckCircle size={12} className="text-emerald-500" />
          </div>
          <span className="text-sm font-bold font-mono text-slate-800 dark:text-white">99.8%</span>
          <span className="text-[9px] text-emerald-500 font-semibold">Processed</span>
        </div>

        {/* Metric 4 */}
        <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-900/5 dark:border-white/5 flex flex-col gap-1">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-[10px]">Sync Rate</span>
            <Package size={12} className="text-amber-500" />
          </div>
          <span className="text-sm font-bold font-mono text-slate-800 dark:text-white">100%</span>
          <span className="text-[9px] text-slate-400 dark:text-slate-500">Zero Stockouts</span>
        </div>
      </div>

      {/* Main Charts & Feeds layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
        {/* Sales Graph - taking 2 cols */}
        <div className="md:col-span-2 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-900/5 dark:border-white/5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300">Product Listing Performance</span>
            <span className="text-[9px] text-slate-500 font-mono">12-Month Traffic</span>
          </div>

          {/* SVG Animated Line Graph */}
          <div className="w-full h-24 relative">
            <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line x1="0" y1="20" x2="300" y2="20" stroke="currentColor" className="text-slate-200 dark:text-slate-800/40" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="0" y1="50" x2="300" y2="50" stroke="currentColor" className="text-slate-200 dark:text-slate-800/40" strokeWidth="0.5" strokeDasharray="3 3" />
              <line x1="0" y1="80" x2="300" y2="80" stroke="currentColor" className="text-slate-200 dark:text-slate-800/40" strokeWidth="0.5" strokeDasharray="3 3" />

              {/* Area path */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                d="M 0 90 Q 30 50 60 65 T 120 30 T 180 25 T 240 20 T 300 10 L 300 100 L 0 100 Z"
                fill="url(#chart-grad)"
              />

              {/* Line path */}
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
                d="M 0 90 Q 30 50 60 65 T 120 30 T 180 25 T 240 20 T 300 10"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2"
                className="dark:stroke-accent-sky"
              />

              {/* Dots on peak points */}
              <circle cx="120" cy="30" r="2.5" fill="#2563EB" className="dark:fill-accent-sky" />
              <circle cx="180" cy="25" r="2.5" fill="#2563EB" className="dark:fill-accent-sky" />
              <circle cx="300" cy="10" r="2.5" fill="#2563EB" className="dark:fill-accent-sky" />
            </svg>
          </div>

          {/* Graph Legend */}
          <div className="flex justify-between text-[9px] text-slate-400 dark:text-slate-500 font-mono mt-1">
            <span>Jan</span>
            <span>Apr</span>
            <span>Jul</span>
            <span>Oct</span>
            <span>Dec</span>
          </div>
        </div>

        {/* Channels/Platforms Feed */}
        <div className="p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-900/5 dark:border-white/5 flex flex-col justify-between">
          <span className="font-semibold text-slate-700 dark:text-slate-300 mb-2">Marketplace APIs</span>
          <div className="flex flex-col gap-2">
            {[
              { name: 'Amazon IN', status: 'Optimal', color: 'bg-emerald-500' },
              { name: 'Flipkart', status: 'Synced', color: 'bg-emerald-500' },
              { name: 'Meesho', status: 'Active', color: 'bg-emerald-500' },
              { name: 'Shopify Store', status: 'Synced', color: 'bg-emerald-500' },
            ].map((p, idx) => (
              <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-900/5 dark:border-white/5 last:border-none">
                <span className="font-medium text-slate-600 dark:text-slate-300">{p.name}</span>
                <div className="flex items-center gap-1">
                  <span className={`w-1.5 h-1.5 rounded-full ${p.color} animate-pulse`} />
                  <span className="text-[9px] text-slate-500">{p.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 text-[9px] text-slate-400 dark:text-slate-500 font-medium">
            API Health: <span className="text-emerald-500">100%</span>
          </div>
        </div>
      </div>

      {/* Spreadsheet / Excel Data Grid */}
      <div className="hidden md:flex flex-col gap-1.5 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-900/5 dark:border-white/5">
        <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
          <span>Formula: =VLOOKUP(SKU_ID, inventory_sync, 3, FALSE)</span>
          <span className="text-emerald-500 flex items-center gap-0.5">
            <Check size={10} /> Auto-Sync Successful
          </span>
        </div>
        <div className="grid grid-cols-5 gap-1 text-[9px] font-mono text-slate-500">
          <span className="font-bold border-b border-slate-200 dark:border-slate-800 pb-0.5 text-slate-700 dark:text-slate-300">SKU Code</span>
          <span className="font-bold border-b border-slate-200 dark:border-slate-800 pb-0.5 text-slate-700 dark:text-slate-300">Amazon SKU</span>
          <span className="font-bold border-b border-slate-200 dark:border-slate-800 pb-0.5 text-slate-700 dark:text-slate-300">Flipkart SKU</span>
          <span className="font-bold border-b border-slate-200 dark:border-slate-800 pb-0.5 text-slate-700 dark:text-slate-300">Meesho SKU</span>
          <span className="font-bold border-b border-slate-200 dark:border-slate-800 pb-0.5 text-slate-700 dark:text-slate-300">Catalog Score</span>

          <span>NTX-APP-01</span>
          <span>420 units</span>
          <span>420 units</span>
          <span>420 units</span>
          <span className="text-emerald-500 font-bold">98% (A+)</span>

          <span>NTX-APP-02</span>
          <span>1,050 units</span>
          <span>1,050 units</span>
          <span>1,050 units</span>
          <span className="text-emerald-500 font-bold">99% (A+)</span>

          <span>NTX-APP-03</span>
          <span>85 units</span>
          <span>85 units</span>
          <span>85 units</span>
          <span className="text-emerald-500 font-bold">95% (A)</span>
        </div>
      </div>
    </div>
  );
}
