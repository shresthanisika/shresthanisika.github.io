/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Heart, Sparkles, Utensils, Flower, Flower2, Leaf, Plus, Minus, Check, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Map icon strings to Lucide icon components
  const renderIcon = (name: string) => {
    const iconClass = "text-[#4A2B2D] w-6 h-6";
    switch (name) {
      case 'Heart':
        return <Heart className={iconClass} />;
      case 'Sparkles':
        return <Sparkles className={iconClass} />;
      case 'Utensils':
        return <Utensils className={iconClass} />;
      case 'Flower':
        return <Flower className={iconClass} />;
      default:
        return <Sparkles className={iconClass} />;
    }
  };

  const handleToggleDetails = (id: string) => {
    setSelectedServiceId(selectedServiceId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-[#F6E6D9]/40 relative border-t border-[#4A2B2D]/5 overflow-hidden">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span id="services-section-badge" className="caps-label text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A880] block">
            What We Curate
          </span>
          <div className="relative inline-block">
            <h2 id="services-headline" className="serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#4A2B2D] relative z-10">
              Simple Occasion Decor & Table Styling
            </h2>

          </div>
          <div className="w-16 h-0.5 bg-[#4A2B2D]/30 mx-auto mt-4" />
          <p id="services-subheadline" className="text-sm sm:text-base text-[#4A2B2D]/70 font-sans font-light leading-relaxed">
            We pour our absolute heart and utmost care into every table setting, backdrop arch, and custom candlescape, ensuring your close gatherings are beautifully memorable.
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {SERVICES.map((service: Service) => {
            const isExpanded = selectedServiceId === service.id;
            
            return (
              <motion.div
                key={service.id}
                id={`service-card-${service.id}`}
                layout="position"
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#4A2B2D]/5 flex flex-col hover:shadow-md transition-shadow duration-300"
              >
                {/* Spec Image Banner */}
                <div className="h-56 w-full overflow-hidden relative group">
                  <img
                    id={`service-img-${service.id}`}
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Decorative Icon Float */}
                  <div className="absolute top-4 right-4 bg-[#FCF7F3] p-3 rounded-md shadow-md border border-[#4A2B2D]/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:text-[#C5A880]">
                    {renderIcon(service.iconName)}
                  </div>
                </div>

                {/* Info and Accordion Body */}
                <div className="p-6 sm:p-8 space-y-5">
                  <h3 id={`service-title-${service.id}`} className="serif-heading text-2xl font-semibold text-[#4A2B2D]">
                    {service.title}
                  </h3>
                  
                  <p id={`service-summary-${service.id}`} className="text-sm sm:text-base text-[#4A2B2D]/74 font-sans font-light leading-relaxed">
                    {service.description}
                  </p>

                  {/* Toggle Activator Button */}
                  <button
                    id={`service-toggle-${service.id}`}
                    onClick={() => handleToggleDetails(service.id)}
                    className="caps-label w-full py-3 px-4 border border-[#4A2B2D]/10 text-xs uppercase tracking-widest font-semibold text-[#4A2B2D] flex items-center justify-between hover:bg-[#4A2B2D]/5 transition-colors duration-200"
                  >
                    <span>{isExpanded ? 'Hide Specifications' : 'Explore Inclusions'}</span>
                    {isExpanded ? <Minus size={14} /> : <Plus size={14} />}
                  </button>

                  {/* Animated specs */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        id={`service-specifications-${service.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pt-4 border-t border-[#4A2B2D]/10 space-y-3"
                      >
                        <h4 className="caps-label text-[11px] uppercase tracking-widest font-bold text-[#C5A880] mb-2">
                          Inclusions & Specs:
                        </h4>
                        <ul className="space-y-2.5">
                          {service.details.map((detail, idx) => (
                            <li key={idx} className="flex gap-3 items-start text-xs sm:text-sm text-[#4A2B2D]/80 font-sans">
                              <span className="p-0.5 mt-0.5 rounded-full bg-[#4A2B2D]/10 flex-shrink-0">
                                <Check size={12} className="text-[#4A2B2D]" />
                              </span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="pt-4">
                          <Link
                            id={`service-cta-${service.id}`}
                            to="/contact#contact-form-card"
                            className="caps-label inline-flex items-center gap-2 text-[11px] uppercase tracking-wider font-bold text-[#4A2B2D] hover:text-[#C5A880] transition-colors"
                          >
                            Inquire about this option
                            <ArrowRight size={12} />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Event Box Accent */}
        <div id="services-custom-accent" className="mt-16 bg-[#4A2B2D] text-[#F6E6D9] rounded-lg p-8 sm:p-12 border border-[#4A2B2D]/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <h3 className="serif-heading text-2xl sm:text-3xl font-semibold">
              Have a Unique Backyard or Cozy Setup Idea?
            </h3>
            <p className="text-sm sm:text-base text-[#F6E6D9]/80 font-sans font-light leading-relaxed">
              Whether you are plotting a surprise marriage proposal, an intimate garden tea party, or an elegant dinner table for your closest friends, our hands-on decorators are ready to give their absolute best to bring your vision to life.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              id="custom-service-cta"
              to="/contact#contact-form-card"
              className="caps-label px-8 py-4 bg-[#F6E6D9] text-[#4A2B2D] text-xs uppercase tracking-widest font-semibold hover:bg-white transition-all duration-300 rounded-sm text-center"
            >
              Share Your Vision
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
