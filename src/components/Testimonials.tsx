/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, Calendar, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-play interval for smooth atmospheric change
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handleSelectDot = (idx: number) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  // Motion variants for slide/fade
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      },
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-[#F6E6D9]/20 relative overflow-hidden border-t border-[#4A2B2D]/5">
      {/* Delicate background blur elements */}
      <div className="absolute top-1/2 left-[-10%] w-72 h-72 rounded-full bg-[#FCF7F3] blur-3xl pointer-events-none" />
      <div className="absolute bottom-5 right-[-5%] w-80 h-80 rounded-full bg-[#C5A880]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span id="testimonials-badge" className="caps-label text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A880] block">
            Love Letters & Acclaims
          </span>
          <h2 id="testimonials-headline" className="serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#4A2B2D]">
            Client Testimonials
          </h2>
          <div className="w-16 h-0.5 bg-[#4A2B2D]/30 mx-auto mt-4" />
          <p id="testimonials-subheadline" className="text-sm sm:text-base text-[#4A2B2D]/70 font-sans font-light leading-relaxed">
            There is no greater merit than the memories of our couples and brand directors. We invite you to read their real, raw stories of our collaboration.
          </p>
        </div>

        {/* Carousel Showcase Wrapper */}
        <div id="testimonials-carousel" className="max-w-4xl mx-auto relative px-4 sm:px-12 md:px-16">
          
          {/* Main Card */}
          <div className="bg-white rounded-2xl border border-[#4A2B2D]/5 shadow-xl p-8 sm:p-12 md:p-14 relative overflow-hidden min-h-[360px] flex flex-col justify-between">
            {/* Elegant Large Watermark Quote Mark */}
            <div className="absolute top-6 left-6 text-[#F6E6D9] select-none pointer-events-none">
              <Quote size={80} className="stroke-[1] rotate-180" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-8 relative z-10 flex flex-col justify-between h-full"
              >
                {/* Visual quote body */}
                <div className="space-y-6">
                  {/* Gold Stars */}
                  <div className="flex gap-1 justify-center sm:justify-start">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#C5A880] text-[#C5A880]" />
                    ))}
                  </div>

                  <p id={`testi-quote-${activeTestimonial.id}`} className="serif-heading text-lg sm:text-xl md:text-2xl font-light text-[#4A2B2D] italic leading-relaxed text-center sm:text-left">
                    "{activeTestimonial.quote}"
                  </p>
                </div>

                {/* Author Credentials & metadata bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#4A2B2D]/10 pt-8 mt-6">
                  
                  {/* Left block: Author profile details */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">

                    <div>
                      <h4 id={`testi-author-${activeTestimonial.id}`} className="serif-heading font-semibold text-[#4A2B2D] text-lg">
                        {activeTestimonial.author}
                      </h4>
                      <p id={`testi-role-${activeTestimonial.id}`} className="caps-label text-[11px] uppercase tracking-wider text-[#C5A880] font-bold mt-0.5">
                        {activeTestimonial.role}
                      </p>
                    </div>
                  </div>

                  {/* Right block: Location & Date badges */}
                  <div className="caps-label flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] font-semibold text-[#4A2B2D]/74">
                    <span className="flex items-center gap-1.5 bg-[#4A2B2D]/5 px-3 py-1.5 rounded-full border border-[#4A2B2D]/10 uppercase tracking-wider">
                      <MapPin size={12} className="text-[#C5A880]" />
                      {activeTestimonial.location}
                    </span>
                    <span className="flex items-center gap-1.5 bg-[#4A2B2D]/5 px-3 py-1.5 rounded-full border border-[#4A2B2D]/10 uppercase tracking-wider">
                      <Calendar size={12} className="text-[#C5A880]" />
                      {activeTestimonial.eventDate}
                    </span>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Left Navigation Arrow Button */}
          <button
            id="testimonials-btn-prev"
            onClick={handlePrev}
            className="absolute left-[-20px] sm:left-[-16px] md:left-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-[#4A2B2D]/10 hover:border-[#4A2B2D]/30 text-[#4A2B2D] hover:bg-[#F6E6D9]/40 shadow-md transition-all duration-300 z-20 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Right Navigation Arrow Button */}
          <button
            id="testimonials-btn-next"
            onClick={handleNext}
            className="absolute right-[-20px] sm:right-[-16px] md:right-2 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white border border-[#4A2B2D]/10 hover:border-[#4A2B2D]/30 text-[#4A2B2D] hover:bg-[#F6E6D9]/40 shadow-md transition-all duration-300 z-20 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

        </div>

        {/* Bullet Dot Indicators */}
        <div id="testimonials-indicators" className="flex items-center justify-center gap-2.5 mt-8">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              id={`testi-dot-${idx}`}
              onClick={() => handleSelectDot(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-[#4A2B2D]' : 'w-2 bg-[#4A2B2D]/20 hover:bg-[#4A2B2D]/40'
              }`}
              aria-label={`Go to testimonial page ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
