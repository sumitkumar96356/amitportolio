'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, Briefcase, MapPin, Mail } from 'lucide-react';
import DashboardMockup from '../DashboardMockup';

export default function Hero() {
  const handleContactScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Generate a simple text resume file download dynamically
    const resumeText = `AMIT KUMAR PAL
E-commerce Manager
Phone: +91-9555910226
Email: amitpal.125@gmail.com
Location: New Delhi, India

PROFESSIONAL SUMMARY:
Results-driven E-commerce Manager with 10+ years of experience managing complete marketplace operations. Experienced in handling 18,000+ SKUs and supporting 2,000+ daily orders across Amazon, Flipkart, Meesho, Snapdeal and other marketplaces. Strong expertise in Shopify, Google Ads, SEO, Amazon A+ Content, inventory management, catalog optimization and advanced MS Excel.

PROFESSIONAL EXPERIENCE:
1. Nutex Apparel Limited | E-commerce Manager | Feb 2017 - Present
   - Managed complete e-commerce operations across multiple marketplaces.
   - Managed a catalog of 18,000+ products.
   - Handled approximately 2,000 customer orders daily with the operations team.
   - Managed product listings, inventory, pricing and catalog optimization.
   - Worked on Shopify store management.
   - Created Amazon A+ Content and optimized listings.
   - Managed Google Ads and SEO activities.
   - Prepared business reports using Excel (VLOOKUP, Pivot Tables & Data Validation).
   - Handled portal settlements, TDS claims and coordination with internal teams.

2. ABGS Group Data Outsources Pvt. Ltd. | Jan 2016 - Jan 2017
   - Product uploads, marketplace operations, inventory updates and data validation.

3. ICICI Bank (3i-Infotech Payroll) | Data Entry Executive | Jan 2014 - Dec 2015
   - Customer database management and Excel reporting.

CORE SKILLS:
- End-to-End E-commerce Operations
- Amazon, Flipkart, Meesho, Snapdeal, Paytm, Limeroad, Shopify
- Shopify Store Management
- Amazon A+ Content
- Google Ads
- SEO (On-Page & Off-Page)
- MS Excel (VLOOKUP, Pivot Tables, Data Validation)
- Inventory & Order Management
- Catalog Management
- Portal Settlement & TDS Claims
- Team Collaboration

EDUCATION:
- B.A. - C.S.J.M University
- Intermediate - CBSE
- High School - CBSE

TECHNICAL QUALIFICATION:
- Hardware & Networking - Jetking Kanpur
- Tally 7.2`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Amit_Kumar_Pal_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
      {/* Background blobs */}
      <div className="gradient-blob top-1/4 -left-64 bg-primary-blue" />
      <div className="gradient-blob bottom-1/4 -right-64 bg-accent-sky" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-accent-sky border border-primary-blue/10"
              >
                <Briefcase size={12} />
                10+ Years Experience
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-600 dark:bg-slate-900/60 dark:text-slate-300 border border-slate-900/5 dark:border-white/5"
              >
                <MapPin size={12} />
                New Delhi, India
              </motion.div>
            </div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] font-sans"
            >
              Driving E-commerce <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue via-accent-sky to-indigo-500">
                Operations
              </span>{' '}
              with Precision
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl font-normal leading-relaxed"
            >
              Helping brands manage marketplaces, optimize product catalogs, streamline inventory operations, and improve order management across multiple e-commerce platforms.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-primary-blue hover:bg-blue-600 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-300 cursor-pointer text-sm"
              >
                <Download size={16} />
                Download Resume
              </button>
              
              <a
                href="#contact"
                onClick={handleContactScroll}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-900/60 border border-slate-900/10 dark:border-white/10 hover:border-primary-blue/30 dark:hover:border-accent-sky/30 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer text-sm group"
              >
                Contact Me
                <ArrowRight size={16} className="text-slate-500 dark:text-slate-400 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Email quick copy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-medium"
            >
              <Mail size={14} />
              <span>amitpal.125@gmail.com</span>
            </motion.div>
          </div>

          {/* Hero Illustration (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 w-full flex items-center justify-center"
          >
            <DashboardMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
