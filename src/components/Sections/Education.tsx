'use client';

import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { GraduationCap, Award, CheckCircle2, BookOpen } from 'lucide-react';

const EDUCATION = [
  {
    degree: 'Bachelor of Arts (B.A.)',
    institution: 'C.S.J.M University',
    details: 'Completed undergraduate degree focusing on humanities and analytical studies.'
  },
  {
    degree: 'Intermediate',
    institution: 'CBSE Board',
    details: 'Senior secondary education with focus on core academic subjects.'
  },
  {
    degree: 'High School',
    institution: 'CBSE Board',
    details: 'Secondary school education focusing on foundation science, mathematics, and English.'
  }
];

const CERTIFICATIONS = [
  {
    name: 'Hardware & Networking Engineer',
    issuer: 'Jetking Kanpur',
    description: 'Specialized training in systems assembly, TCP/IP networks, operating system troubleshooting, and desktop security operations.'
  },
  {
    name: 'Tally 7.2 Accounting Certification',
    issuer: 'Professional Training Institute',
    description: 'Expertise in book-keeping, ledger posting, tax entries, voucher configurations, and invoice audits.'
  }
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
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
            <BookOpen size={12} />
            Qualifications
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans"
          >
            Education & Certifications
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-blue to-accent-sky rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column: Education */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 rounded-xl bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-accent-sky">
                <GraduationCap size={20} />
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">
                Academic Background
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {EDUCATION.map((edu, index) => (
                <Card
                  key={index}
                  delay={index * 0.1}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-slate-900/40 p-5 border border-slate-900/5 dark:border-white/5 flex gap-4 items-start"
                >
                  <span className="p-1 rounded-full bg-emerald-500/10 text-emerald-500 mt-1 shrink-0">
                    <CheckCircle2 size={14} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-base text-slate-800 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-xs font-semibold text-primary-blue dark:text-accent-sky">
                      {edu.institution}
                    </span>
                    <p className="text-xs text-slate-550 dark:text-slate-400 mt-1 leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="p-2 rounded-xl bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-accent-sky">
                <Award size={20} />
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans">
                Professional Credentials
              </h3>
            </div>

            <div className="flex flex-col gap-6">
              {CERTIFICATIONS.map((cert, index) => (
                <Card
                  key={index}
                  delay={index * 0.15}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-slate-900/40 p-5 border border-slate-900/5 dark:border-white/5 flex gap-4 items-start"
                >
                  <span className="p-1 rounded-full bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-accent-sky mt-1 shrink-0">
                    <Award size={14} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h4 className="font-bold text-base text-slate-800 dark:text-white">
                      {cert.name}
                    </h4>
                    <span className="text-xs font-semibold text-primary-blue dark:text-accent-sky">
                      {cert.issuer}
                    </span>
                    <p className="text-xs text-slate-550 dark:text-slate-400 mt-1 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
