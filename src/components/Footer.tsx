/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, MapPin, Clock, ArrowUp, Star } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#4A2B2D] text-[#F6E6D9] pt-20 pb-10 border-t border-[#4A2B2D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#F6E6D9]/10">

          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center">
              <div className="w-40 sm:w-48 h-auto bg-[#FCF7F3] rounded p-2 overflow-hidden shadow-sm">
                <img
                  src="/logo.png"
                  alt="Ya:saara Events"
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
            </div>

            <p className="text-sm text-[#F6E6D9]/80 font-sans font-light leading-relaxed">
              Bespoke tabletop curation, cozy occasion styling, and organic floral accents built with our absolute heart and utmost dedication.
            </p>

            {/* Social channels */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/yasaara.events/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#F6E6D9]/10 border border-[#F6E6D9]/20 hover:bg-[#F6E6D9] hover:text-[#4A2B2D] rounded-full transition-all duration-300 group"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="caps-label text-xs font-semibold tracking-widest uppercase text-[#C5A880]">Our Location</h4>
            <div className="space-y-3.5 text-sm font-sans font-light text-[#F6E6D9]/80">
              <div className="flex gap-2.5 items-start">
                <MapPin size={16} className="text-[#C5A880] flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="font-semibold text-[#F6E6D9]">Jupiter Marg, Tikhedewal</strong><br />
                  Lalitpur, Nepal
                </span>
              </div>
              <div className="flex gap-2.5 items-start border-t border-[#F6E6D9]/10 pt-3.5">
                <Clock size={16} className="text-[#C5A880] flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="font-semibold text-[#F6E6D9]">Inquiries</strong><br />
                  Sun — Fri: 09:00 — 18:00 NPT<br />
                  Intimate bookings only
                </span>
              </div>
            </div>
          </div>

          {/* Dynamic newsletter or simple text highlight */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-between h-full">
            <button
              onClick={handleScrollToTop}
              className="caps-label px-4 py-4 border border-[#F6E6D9]/20 hover:border-white text-[#F6E6D9] rounded-sm transition-all flex items-center gap-2 group text-xs uppercase tracking-widest font-semibold cursor-pointer"
              aria-label="Scroll to top of page"
            >
              Back to Top
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
            <div className="text-left lg:text-right pt-6 lg:pt-0">
              <span className="serif-heading text-xs italic text-[#C5A880]">Devoted Since 2018</span>
            </div>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-sans font-light text-[#F6E6D9]/50 gap-4">
          <p>© {new Date().getFullYear()} Ya:saara Events. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:underline hover:text-white">Privacy Policy</a>
            <a href="#terms" className="hover:underline hover:text-white">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
