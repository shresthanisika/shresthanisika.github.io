/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Users, Mail, Phone, MessageSquare, CheckCircle, ArrowRight, Sparkles, Send } from 'lucide-react';
import { ContactFormData } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: 'Weddings',
    guestCount: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // client-side validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your representative or full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid electronic email address.');
      return;
    }

    setIsSubmitting(true);

    // Construct the email content
    const subject = `Yasaara Events Inquiry: ${formData.eventType} - ${formData.name}`;
    const body = `Hello,

Here is a new creative inquiry:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Event Type: ${formData.eventType}
Target Date: ${formData.eventDate || 'N/A'}
Approx Guest Count: ${formData.guestCount || 'N/A'}

Dream Landscape Details:
${formData.message || 'No details provided.'}

---
Sent via Yasaara Events Website`;

    // Trigger local mail client
    window.location.href = `mailto:info@yasaaraevents.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Proceed to success state display
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomId = 'YSE-' + Math.floor(100000 + Math.random() * 90000).toString();
      setInquiryId(randomId);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      eventType: 'Weddings',
      guestCount: '',
      message: ''
    });
    setIsSubmitted(false);
    setErrorMsg('');
  };

  return (
    <section id="contact" className="py-24 bg-[#F6E6D9]/40 relative border-t border-[#4A2B2D]/5">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#C5A880]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Inquiry Prompts */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-4">
              <span id="contact-badge" className="caps-label text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A880] block">
                Get In Touch
              </span>
              <h2 id="contact-headline" className="serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#4A2B2D] leading-[1.1] tracking-tight">
                Let Us Style <span className="script-accent text-[#C5A880] text-4xl sm:text-5xl md:text-6xl tracking-normal normal-case inline-block align-middle pb-1 px-1">Your</span> Cozy Celebration
              </h2>
              <div className="w-16 h-0.5 bg-[#4A2B2D]/20 mt-3" />
            </div>

            <p id="contact-intro-text" className="text-[#4A2B2D]/80 font-sans font-light text-sm sm:text-base leading-relaxed">
              Our calendar is thoughtfully managed to ensure that each intimate table setup and cozy gathering receives our absolute devotion, handpicked materials, and heartfelt care. 
              <br /><br />
              Please provide details about your milestone below. For urgent collaborations, our office directors are reachable directly via email or our telephone lines.
            </p>

            {/* Direct Channels */}
            <div id="contact-details-list" className="space-y-5 pt-4 border-t border-[#4A2B2D]/10">
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white border border-[#4A2B2D]/15 rounded-full text-[#4A2B2D]">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="caps-label block text-[10px] uppercase font-bold tracking-widest text-[#4A2B2D]/60">General Inquiry</span>
                  <a href="mailto:info@yasaaraevents.com" className="text-sm font-medium text-[#4A2B2D] hover:underline">
                    info@yasaaraevents.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white border border-[#4A2B2D]/15 rounded-full text-[#4A2B2D]">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="caps-label block text-[10px] uppercase font-bold tracking-widest text-[#4A2B2D]/60">Studio Line</span>
                  <a href="tel:+9779812345678" className="text-sm font-medium text-[#4A2B2D] hover:underline">
                    +977 981-2345678
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Intelligent Submitter Card */}
          <div className="lg:col-span-7">
            <div id="contact-form-card" className="bg-white p-6 sm:p-10 rounded-xl shadow-lg border border-[#4A2B2D]/5">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="inquiry-form"
                    id="yasaara-inquiry-form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    {errorMsg && (
                      <div id="form-error-banner" className="bg-red-50 text-red-700 p-4 rounded text-xs sm:text-sm font-medium border border-red-200">
                        {errorMsg}
                      </div>
                    )}

                    {/* Dual fields: Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="form-name" className="caps-label block text-xs uppercase tracking-widest font-semibold text-[#4A2B2D]/80">
                          My Name
                        </label>
                        <input
                          id="form-name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Alexandra Sterling"
                          className="w-full bg-[#FCF7F3] border border-[#4A2B2D]/10 rounded px-4 py-3 text-sm text-[#4A2B2D] placeholder-[#4A2B2D]/40 focus:outline-[#4A2B2D] focus:border-transparent"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="form-email" className="caps-label block text-xs uppercase tracking-widest font-semibold text-[#4A2B2D]/80">
                          Email Address
                        </label>
                        <input
                          id="form-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="alex@example.com"
                          className="w-full bg-[#FCF7F3] border border-[#4A2B2D]/10 rounded px-4 py-3 text-sm text-[#4A2B2D] placeholder-[#4A2B2D]/40 focus:outline-[#4A2B2D] focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Dual fields: Phone & Event Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="form-phone" className="caps-label block text-xs uppercase tracking-widest font-semibold text-[#4A2B2D]/80">
                          Phone Number
                        </label>
                        <input
                          id="form-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+977 980-0000000"
                          className="w-full bg-[#FCF7F3] border border-[#4A2B2D]/10 rounded px-4 py-3 text-sm text-[#4A2B2D] placeholder-[#4A2B2D]/40 focus:outline-[#4A2B2D]"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="form-eventType" className="caps-label block text-xs uppercase tracking-widest font-semibold text-[#4A2B2D]/80">
                          Event Type
                        </label>
                        <select
                          id="form-eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          className="w-full bg-[#FCF7F3] border border-[#4A2B2D]/10 rounded px-4 py-3 text-sm text-[#4A2B2D] focus:outline-[#4A2B2D]"
                        >
                          <option value="Weddings">Wedding Celebration</option>
                          <option value="Corporate">Brand Experience / Gala</option>
                          <option value="Social">Intimate Milestone Dinner</option>
                          <option value="Floral">Floral & Spatial Art Installations</option>
                          <option value="Other">Bespoke Production Proposal</option>
                        </select>
                      </div>
                    </div>

                    {/* Dual fields: Event Date & Guest count */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="form-eventDate" className="caps-label block text-xs uppercase tracking-widest font-semibold text-[#4A2B2D]/80">
                          Target Event Date
                        </label>
                        <div className="relative">
                          <input
                            id="form-eventDate"
                            name="eventDate"
                            type="date"
                            value={formData.eventDate}
                            onChange={handleInputChange}
                            className="w-full bg-[#FCF7F3] border border-[#4A2B2D]/10 rounded px-4 py-3 text-sm text-[#4A2B2D] focus:outline-[#4A2B2D]"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="form-guestCount" className="caps-label block text-xs uppercase tracking-widest font-semibold text-[#4A2B2D]/80">
                          Approx Guest Count
                        </label>
                        <input
                          id="form-guestCount"
                          name="guestCount"
                          type="text"
                          value={formData.guestCount}
                          onChange={handleInputChange}
                          placeholder="e.g. 50 — 150 guests"
                          className="w-full bg-[#FCF7F3] border border-[#4A2B2D]/10 rounded px-4 py-3 text-sm text-[#4A2B2D] placeholder-[#4A2B2D]/40 focus:outline-[#4A2B2D]"
                        />
                      </div>
                    </div>

                    {/* TextArea Message */}
                    <div className="space-y-2">
                      <label htmlFor="form-message" className="caps-label block text-xs uppercase tracking-widest font-semibold text-[#4A2B2D]/80">
                        Describe Your Dream Landscape
                      </label>
                      <textarea
                        id="form-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about the atmosphere, locations you consider, and design inspirations you hold close..."
                        className="w-full bg-[#FCF7F3] border border-[#4A2B2D]/10 rounded px-4 py-3 text-sm text-[#4A2B2D] placeholder-[#4A2B2D]/40 focus:outline-[#4A2B2D]"
                      />
                    </div>

                    {/* Action Submit */}
                    <button
                      id="contact-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="caps-label w-full py-4 bg-[#4A2B2D] text-[#F6E6D9] text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#643D40] transition-colors focus:ring-2 focus:ring-[#C5A880]/50 disabled:bg-[#4A2B2D]/50 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-[#F6E6D9]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Securing Details...
                        </>
                      ) : (
                        <>
                          Send Creative Inquiry
                          <Send size={14} />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    id="contact-success-state"
                    className="text-center py-10 space-y-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-[#4A2B2D]/5 border border-[#4A2B2D]/10 text-[#C5A880] rounded-full flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle size={32} />
                    </div>

                    <div className="space-y-2">
                      <h3 className="serif-heading text-2xl font-bold text-[#4A2B2D]">Inquiry Safely Received</h3>
                      <p className="text-sm text-[#4A2B2D]/70 font-sans max-w-md mx-auto">
                        Inquiry Reference ID: <strong className="text-[#4A2B2D] serif-heading tracking-wider">{inquiryId}</strong>
                      </p>
                    </div>

                    <div className="bg-[#FCF7F3] border border-[#4A2B2D]/10 rounded-lg p-6 max-w-md mx-auto text-left space-y-4">
                      <h4 className="caps-label text-xs uppercase tracking-widest font-bold text-[#C5A880] flex items-center gap-1.5">
                        <Sparkles size={12} /> What Happens Next:
                      </h4>
                      <ul className="text-xs text-[#4A2B2D]/80 font-sans space-y-3">
                        <li className="flex gap-2.5 items-start">
                          <span className="serif-heading italic text-[#C5A880] text-sm leading-none mt-0.5">01.</span>
                          <span className="leading-relaxed">Our directors will review your design goals within <strong>24 business hours</strong>.</span>
                        </li>
                        <li className="flex gap-2.5 items-start">
                          <span className="serif-heading italic text-[#C5A880] text-sm leading-none mt-0.5">02.</span>
                          <span className="leading-relaxed">We will schedule a brief 20-minute conceptual discovery video session with you.</span>
                        </li>
                        <li className="flex gap-2.5 items-start">
                          <span className="serif-heading italic text-[#C5A880] text-sm leading-none mt-0.5">03.</span>
                          <span className="leading-relaxed">An initial spatial styling storyboard and production fee breakdown will be generated for your approval.</span>
                        </li>
                      </ul>
                    </div>

                    <button
                      id="reset-form-btn"
                      onClick={handleResetForm}
                      className="caps-label px-6 py-2.5 border border-[#4A2B2D]/20 text-[#4A2B2D] hover:bg-[#4A2B2D]/5 text-xs uppercase tracking-widest font-semibold rounded-sm transition-colors"
                    >
                      Fill another inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
