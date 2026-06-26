'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageSquare, MessageCircle, AlertCircle, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [submittedData, setSubmittedData] = useState({ name: '', email: '', phone: '', message: '' });
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    
    if (formData.phone.trim() && !/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      tempErrors.phone = 'Invalid phone number';
    }
    
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    // Cache the submitted data for clipboard fallback
    setSubmittedData({ ...formData });

    // Compose mailto link with form details
    const mailtoSubject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello Amit,\n\nYou have received a message from your portfolio contact form:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );

    // Open user's default email client
    window.location.href = `mailto:amitpal.125@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Update status to success and reset fields
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Trigger canvas confetti success effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleCopyMessage = () => {
    const formatted = `Name: ${submittedData.name}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone || 'Not provided'}\n\nMessage:\n${submittedData.message}`;
    navigator.clipboard.writeText(formatted);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('amitpal.125@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Blobs */}
      <div className="gradient-blob top-1/3 -right-64 bg-primary-blue" />
      <div className="gradient-blob bottom-1/3 -left-64 bg-accent-sky" />

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
            <MessageSquare size={12} />
            Get In Touch
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-sans"
          >
            Contact Me
          </motion.h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary-blue to-accent-sky rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-sans mb-2">
              Let&apos;s discuss your operations.
            </h3>
            
            <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed font-normal">
              Whether you want to optimize your product catalogs, sync your inventory sheets, or streamline operations across Amazon, Flipkart, Snapdeal, and Meesho—I am here to help.
            </p>

            <div className="flex flex-col gap-4 mt-4">
              
              {/* Info Item 1 */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-900/5 dark:border-white/5">
                <span className="p-3 rounded-lg bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-accent-sky shrink-0">
                  <Mail size={18} />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Email Address</span>
                  <a href="mailto:amitpal.125@gmail.com" className="text-sm font-bold text-slate-800 dark:text-white hover:text-primary-blue dark:hover:text-accent-sky transition-colors">
                    amitpal.125@gmail.com
                  </a>
                </div>
              </div>

              {/* Info Item 2 (Phone) */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-900/5 dark:border-white/5">
                <span className="p-3 rounded-lg bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-accent-sky shrink-0">
                  <Phone size={18} />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Phone Number</span>
                  <a href="tel:+919555910226" className="text-sm font-bold text-slate-800 dark:text-white hover:text-primary-blue dark:hover:text-accent-sky transition-colors">
                    +91-9555910226
                  </a>
                </div>
              </div>

              {/* Info Item 3 */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/40 border border-slate-900/5 dark:border-white/5">
                <span className="p-3 rounded-lg bg-primary-blue/10 text-primary-blue dark:bg-primary-blue/20 dark:text-accent-sky shrink-0">
                  <MapPin size={18} />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Office Location</span>
                  <span className="text-sm font-bold text-slate-800 dark:text-white">
                    New Delhi, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels Connect */}
            <div className="flex flex-col gap-3 mt-6">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Social Connections</span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:amitpal.125@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#ea4335] hover:bg-[#d93025] shadow-md shadow-red-500/10 transition-all cursor-pointer"
                >
                  <Mail size={14} />
                  Email
                </a>

                
                <a
                  href="https://wa.me/919555910226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#25d366] hover:bg-[#20ba5a] shadow-md shadow-green-500/10 transition-all cursor-pointer"
                >
                  <MessageCircle size={14} />
                  WhatsApp
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact form (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <Card className="bg-white dark:bg-slate-900/40 p-6 md:p-8 border border-slate-900/5 dark:border-white/5">
              
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-4 gap-6 text-center"
                >
                  <div className="flex flex-col items-center gap-3">
                    <span className="p-3.5 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/10">
                      <CheckCircle2 size={36} />
                    </span>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-white font-sans">Email Client Triggered!</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
                      We have opened your system&apos;s mail application to send the message. If your browser blocked it or you don&apos;t have an email client set up, you can use the options below.
                    </p>
                  </div>

                  {/* Visual Mail details preview */}
                  <div className="w-full text-left p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-900/5 dark:border-white/5 flex flex-col gap-2">
                    <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">To Email:</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">amitpal.125@gmail.com</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 dark:border-slate-800 pb-2">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Subject:</span>
                      <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Inquiry from {submittedData.name}</span>
                    </div>
                    <div className="pt-1 flex flex-col gap-1">
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Message Preview:</span>
                      <p className="text-xs text-slate-600 dark:text-slate-300 italic font-normal line-clamp-2">
                        &quot;{submittedData.message}&quot;
                      </p>
                    </div>
                  </div>

                  {/* Actions Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                    {/* Button 1: Re-trigger mailto */}
                    <a
                      href={`mailto:amitpal.125@gmail.com?subject=Inquiry from ${encodeURIComponent(submittedData.name)}&body=${encodeURIComponent(
                        `Hello Amit,\n\nName: ${submittedData.name}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone || 'N/A'}\n\nMessage:\n${submittedData.message}`
                      )}`}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-white bg-primary-blue hover:bg-blue-600 shadow-md shadow-blue-500/15 transition-all cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      Open Mail App Again
                    </a>

                    {/* Button 2: Copy Message details */}
                    <button
                      onClick={handleCopyMessage}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-900/5 dark:border-white/5 hover:border-primary-blue/30 dark:hover:border-accent-sky/30 transition-all cursor-pointer"
                    >
                      {copiedMessage ? (
                        <>
                          <Check size={14} className="text-emerald-500" />
                          Message Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy Message Details
                        </>
                      )}
                    </button>

                    {/* Button 3: Copy email address */}
                    <button
                      onClick={handleCopyEmail}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-900/5 dark:border-white/5 hover:border-primary-blue/30 dark:hover:border-accent-sky/30 transition-all cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check size={14} className="text-emerald-500" />
                          Email Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy Amit&apos;s Email
                        </>
                      )}
                    </button>

                    {/* Button 4: WhatsApp option */}
                    <a
                      href={`https://wa.me/919555910226?text=${encodeURIComponent(
                        `Hi Amit, I saw your portfolio. This is ${submittedData.name}. Let's connect!`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-white bg-[#25d366] hover:bg-[#20ba5a] shadow-md shadow-green-500/15 transition-all cursor-pointer"
                    >
                      <MessageCircle size={14} />
                      WhatsApp Me Instead
                    </a>
                  </div>

                  {/* Reset form button */}
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-xs font-semibold text-slate-500 hover:text-primary-blue dark:text-slate-400 dark:hover:text-accent-sky hover:underline transition-all cursor-pointer"
                  >
                    Write another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-655 focus:outline-none focus:ring-1 transition-all ${
                        errors.name
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-900/10 dark:border-white/10 focus:border-primary-blue dark:focus:border-accent-sky focus:ring-primary-blue'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 font-semibold flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email & Phone fields in grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-655 focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-slate-900/10 dark:border-white/10 focus:border-primary-blue dark:focus:border-accent-sky focus:ring-primary-blue'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-500 font-semibold flex items-center gap-1">
                          <AlertCircle size={10} /> {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 99999 99999"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-655 focus:outline-none focus:ring-1 transition-all ${
                          errors.phone
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-slate-900/10 dark:border-white/10 focus:border-primary-blue dark:focus:border-accent-sky focus:ring-primary-blue'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[10px] text-red-500 font-semibold flex items-center gap-1">
                          <AlertCircle size={10} /> {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your marketplace catalog goals..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-655 focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-slate-900/10 dark:border-white/10 focus:border-primary-blue dark:focus:border-accent-sky focus:ring-primary-blue'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[10px] text-red-500 font-semibold flex items-center gap-1">
                        <AlertCircle size={10} /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full mt-2 py-3.5 rounded-xl font-semibold text-white bg-primary-blue hover:bg-blue-600 shadow-md shadow-blue-500/15 disabled:bg-slate-400 dark:disabled:bg-slate-800 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {status === 'sending' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Opening Mail app...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message via Email
                      </>
                    )}
                  </button>

                </form>
              )}
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
