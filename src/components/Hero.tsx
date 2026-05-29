/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Star, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden"
    >
      {/* Cozy background image matching the uploaded design */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-[0.25] mix-blend-multiply select-none pointer-events-none"
        style={{
          backgroundImage: `url('/hero.jpg')`,
          filter: "sepia(30%) hue-rotate(-10deg) brightness(0.9) contrast(1.1)"
        }}
      />
      {/* Soft dusty rose / blush gradient overlay to make the landing page pop and contrast with the rest of the site */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#EEDDDA] via-[#F2E5E3] to-[#FCF7F3] pointer-events-none" />

      {/* Decorative Organic Abstract Vector Blobs / Light gradients */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 rounded-full bg-[#E0BDB5]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-80 h-80 rounded-full bg-[#C5A880]/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Column: Title & Key Narrative */}
        <motion.div
          id="hero-content-column"
          className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline label */}
          <motion.div
            id="hero-badge"
            variants={itemVariants}
            className="caps-label inline-flex items-center gap-2 self-center lg:self-start px-4 py-1.5 rounded-full bg-[#4A2B2D]/5 border border-[#4A2B2D]/10 text-[#4A2B2D] text-xs font-semibold tracking-widest uppercase mb-6"
          >
            <Sparkles size={12} className="text-[#C5A880]" />
            Intimate Ocassion Decorators
          </motion.div>

          {/* Core Display Heading - Poured Animation */}
          <h1 id="hero-headline" className="mb-6 flex flex-wrap justify-center lg:justify-start items-center gap-x-3 gap-y-1 sm:gap-y-2">
            {["Poured", "with", "Heart:"].map((word, i) => (
              <motion.span
                key={`p1-${i}`}
                initial={{ opacity: 0, y: 30, rotate: -8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + (i * 0.15), type: "spring", bounce: 0.4 }}
                className="serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#4A2B2D] leading-[1.1] tracking-tight inline-block"
              >
                {word}
              </motion.span>
            ))}

            <motion.span
              initial={{ opacity: 0, scale: 0.5, rotate: 15, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, rotate: -2, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.9, type: "spring", bounce: 0.5 }}
              className="script-accent text-[42px] sm:text-[54px] md:text-[66px] lg:text-[76px] text-[#C5A880] tracking-normal normal-case inline-block align-middle select-none px-1"
            >
              Cozy Decor
            </motion.span>

            {["&", "Table", "Setup"].map((word, i) => (
              <motion.span
                key={`p2-${i}`}
                initial={{ opacity: 0, y: 20, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 + (i * 0.15), type: "spring", bounce: 0.3 }}
                className="serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-[#4A2B2D] leading-[1.1] tracking-tight inline-block"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtext Paragraph */}
          <motion.p
            id="hero-description"
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-[#4A2B2D]/74 font-sans font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
          >
            At <strong className="font-semibold text-[#4A2B2D]">Ya:saara Events</strong>, we hand-style intimate milestones, cozy bridal showers, and romantic dinner tablescapes with absolute care, ensuring your most cherished moments are nothing short of unforgettable.
          </motion.p>

          {/* Client Action Flows */}
          <motion.div
            id="hero-ctas"
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
          >
            <Link
              id="hero-primary-cta"
              to="/contact#contact-form-card"
              className="caps-label w-full sm:w-auto px-8 py-4 bg-[#4A2B2D] border border-transparent text-[#F6E6D9] text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-[#643D40] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Request Custom Setup
              <ArrowRight size={16} />
            </Link>
            <Link
              id="hero-secondary-cta"
              to="/services#style-explorer"
              className="caps-label w-full sm:w-auto px-8 py-4 border border-[#4A2B2D]/20 text-[#4A2B2D] text-xs font-semibold tracking-widest uppercase rounded-sm hover:bg-[#4A2B2D]/5 transition-colors duration-300 text-center animate-pulse-subtle"
            >
              Explore Styles
            </Link>
          </motion.div>

          {/* Elegant Micro Trust Metric List */}
          <motion.div
            id="hero-trust-metrics"
            variants={itemVariants}
            className="mt-12 pt-12 border-t border-[#4A2B2D]/10 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
          >
            <div className="text-center lg:text-left">
              <span id="trust-num-1" className="block serif-heading text-3xl sm:text-4xl font-bold text-[#4A2B2D]">100%</span>
              <span id="trust-lab-1" className="caps-label text-[10px] uppercase tracking-wider text-[#4A2B2D]/60 mt-0.5 block font-medium">Devoted Effort</span>
            </div>
            <div className="text-center lg:text-left">
              <span id="trust-num-2" className="block serif-heading text-3xl sm:text-4xl font-bold text-[#4A2B2D]">10-40</span>
              <span id="trust-lab-2" className="caps-label text-[10px] uppercase tracking-wider text-[#4A2B2D]/60 mt-0.5 block font-medium">Guest Cozy limit</span>
            </div>
            <div className="text-center lg:text-left">
              <span id="trust-num-3" className="block serif-heading text-3xl sm:text-4xl font-bold text-[#4A2B2D]">Utmost</span>
              <span id="trust-lab-3" className="caps-label text-[10px] uppercase tracking-wider text-[#4A2B2D]/60 mt-0.5 block font-medium">Care Per Corner</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Dynamic Fine-Art Image Collage */}
        <motion.div
          id="hero-collage-column"
          className="lg:col-span-5 relative h-[450px] sm:h-[550px] md:h-[600px] w-full mt-10 lg:mt-0 flex justify-center items-center"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Main big display photo */}
          <motion.div
            className="absolute w-[65%] h-[80%] top-0 right-4 rounded-sm overflow-hidden shadow-2xl z-10 hover:scale-[1.02] transform transition-transform duration-500 cursor-pointer"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
          >
            <img
              id="hero-img-main"
              src="/img/hero-4.jpg"
              alt="Editorial Reception Layout"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Secondary overlapping photo */}
          <motion.div
            className="absolute w-[55%] h-[60%] bottom-4 left-4 rounded-sm overflow-hidden border-8 border-[#FCF7F3] shadow-xl z-20 hover:scale-[1.03] transform transition-transform duration-500 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity, delay: 0.5 }}
          >
            <img
              id="hero-img-secondary"
              src="/hero2.jpg"
              alt="Elegant Floral Candle Detail"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Delicate corner accent */}
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-[#C5A880]/30 border-dashed animate-spin-slow pointer-events-none opacity-60 z-0 hidden sm:block" />
        </motion.div>

      </div>
    </section>
  );
}
