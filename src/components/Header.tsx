/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Heart, Sparkles, Flower, Flower2, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'Services', path: '/services', id: 'services' },
    { name: 'Portfolio', path: '/portfolio', id: 'portfolio' },
    { name: 'Contact', path: '/contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F6E6D9]/95 backdrop-blur-md shadow-sm border-b border-[#4A2B2D]/10 py-2'
          : 'bg-[#FCF7F3]/80 backdrop-blur-sm py-4'
      }`}
    >
      {/* Endless Gentle Floating Petals/Leaves inside the Header Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[
          { id: 1, left: '6%', size: 10, delay: 0.5, duration: 11, rotateSpeed: 180, color: '#C5A880' },
          { id: 2, left: '20%', size: 7, delay: 3.2, duration: 14, rotateSpeed: -120, color: '#4A2B2D' },
          { id: 3, left: '38%', size: 12, delay: 1.8, duration: 12, rotateSpeed: 200, color: '#C5A880' },
          { id: 4, left: '54%', size: 8, delay: 5.0, duration: 15, rotateSpeed: -160, color: '#4A2B2D' },
          { id: 5, left: '70%', size: 11, delay: 2.5, duration: 13, rotateSpeed: 190, color: '#C5A880' },
          { id: 6, left: '85%', size: 6, delay: 4.1, duration: 16, rotateSpeed: -140, color: '#4A2B2D' },
          { id: 7, left: '94%', size: 9, delay: 1.0, duration: 10, rotateSpeed: 210, color: '#C5A880' },
        ].map((petal) => (
          <motion.div
            key={petal.id}
            initial={{ scale: 0, y: -20, x: 0, opacity: 0, rotate: -180 }}
            animate={{
              scale: 1,
              y: ['0px', '78px'],
              x: ['0px', petal.id % 2 === 0 ? '16px' : '-16px', '0px'],
              opacity: [0, 0.65, 0.65, 0],
              rotate: [0, petal.rotateSpeed]
            }}
            transition={{
              scale: { duration: 2, type: "spring", bounce: 0.4, delay: petal.delay * 0.5 },
              y: { duration: petal.duration, repeat: Infinity, ease: "easeInOut", delay: petal.delay },
              x: { duration: petal.duration, repeat: Infinity, ease: "easeInOut", delay: petal.delay },
              opacity: { duration: petal.duration, repeat: Infinity, ease: "easeInOut", delay: petal.delay },
              rotate: { duration: petal.duration, repeat: Infinity, ease: "easeInOut", delay: petal.delay }
            }}
            style={{
              position: 'absolute',
              left: petal.left,
              width: petal.size,
              height: petal.size,
              color: petal.color,
            }}
          >
            {petal.id % 3 === 0 ? (
              <Flower size={petal.size} className="opacity-40" />
            ) : petal.id % 3 === 1 ? (
              <Leaf size={petal.size} className="opacity-50" />
            ) : (
              <Flower2 size={petal.size} className="opacity-40" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Swaying delicate corner foliage for cozy framing with blooming entrance */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-1.5 opacity-40 pointer-events-none z-10">
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={{ scale: 1, rotate: [0, 8, -8, 0], y: [0, -2, 2, 0] }}
          transition={{ 
            scale: { duration: 1.5, type: "spring", bounce: 0.5 },
            rotate: { duration: 4.5, ease: "easeInOut", repeat: Infinity, delay: 1.5 },
            y: { duration: 4.5, ease: "easeInOut", repeat: Infinity, delay: 1.5 }
          }}
        >
          <Leaf size={14} className="text-[#C5A880]" />
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: [1, 1.05, 0.95, 1], rotate: [0, -10, 10, 0] }}
          transition={{ 
            scale: { duration: 5.5, ease: "easeInOut", repeat: Infinity, delay: 1.8 },
            rotate: { duration: 5.5, ease: "easeInOut", repeat: Infinity, delay: 1.8 },
            default: { duration: 1.8, type: "spring", bounce: 0.6, delay: 0.3 }
          }}
        >
          <Flower size={15} className="text-[#4A2B2D]" />
        </motion.div>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:flex items-center gap-1.5 opacity-40 pointer-events-none z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: [1, 0.98, 1.02, 1], rotate: [0, 12, -12, 0] }}
          transition={{ 
            scale: { duration: 6, ease: "easeInOut", repeat: Infinity, delay: 1.7 },
            rotate: { duration: 6, ease: "easeInOut", repeat: Infinity, delay: 1.7 },
            default: { duration: 1.8, type: "spring", bounce: 0.6, delay: 0.2 }
          }}
        >
          <Flower size={14} className="text-[#4A2B2D]" />
        </motion.div>
        <motion.div
          initial={{ scale: 0, rotate: 90 }}
          animate={{ scale: 1, rotate: [0, -8, 8, 0], y: [0, 2, -2, 0] }}
          transition={{ 
            scale: { duration: 1.5, type: "spring", bounce: 0.5, delay: 0.6 },
            rotate: { duration: 4.8, ease: "easeInOut", repeat: Infinity, delay: 2.1 },
            y: { duration: 4.8, ease: "easeInOut", repeat: Infinity, delay: 2.1 }
          }}
        >
          <Leaf size={14} className="text-[#C5A880]" />
        </motion.div>
      </div>

      {/* Intricate Floral Embroidery Sequence along the lower border */}
      <div className="absolute -bottom-3 left-0 w-full overflow-hidden h-6 pointer-events-none z-10 flex opacity-80 text-[#C5A880]">
        <motion.div 
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ width: "fit-content" }}
        >
          {Array.from({ length: 40 }).map((_, i) => (
            <svg key={i} width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              {/* Scalloped edge embroidery string */}
              <path d="M0,12 C20,24 40,24 60,12 C80,0 100,0 120,12" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" fill="none" opacity="0.8" />
              <path d="M0,12 C20,0 40,0 60,12 C80,24 100,24 120,12" stroke="currentColor" strokeWidth="1.2" strokeDasharray="1 4" fill="none" opacity="0.4" />
              
              {/* Main Flower at the crossing 60, 12 */}
              <g transform="translate(60, 12)">
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: i % 2 === 0 ? 30 : -30, repeat: Infinity, ease: "linear" }}
                >
                  {/* Petals */}
                  <path d="M0,-2 C3,-6 5,-8 0,-10 C-5,-8 -3,-6 0,-2" fill="currentColor" opacity="0.8"/>
                  <path d="M0,2 C3,6 5,8 0,10 C-5,8 -3,6 0,2" fill="currentColor" opacity="0.8"/>
                  <path d="M-2,0 C-6,3 -8,5 -10,0 C-8,-5 -6,-3 -2,0" fill="currentColor" opacity="0.8"/>
                  <path d="M2,0 C6,3 8,5 10,0 C8,-5 6,-3 2,0" fill="currentColor" opacity="0.8"/>
                  
                  {/* Inner Petal details (embroidery thread) */}
                  <path d="M0,-3 L0,-8 M0,3 L0,8 M-3,0 L-8,0 M3,0 L8,0" stroke="#F6E6D9" strokeWidth="0.5" opacity="0.8" />
                </motion.g>
                <circle cx="0" cy="0" r="3" fill="#4A2B2D" opacity="0.9" />
                <circle cx="0" cy="0" r="1.5" fill="#F6E6D9" opacity="0.8" />
              </g>

              {/* Leaves along the curves */}
              <g transform="translate(30, 18) rotate(45)">
                <path d="M0,0 C-3,-3 -3,-7 0,-9 C3,-7 3,-3 0,0" fill="currentColor" opacity="0.6" />
                <path d="M0,0 L0,-8" stroke="#F6E6D9" strokeWidth="0.5" opacity="0.5" />
              </g>
              <g transform="translate(90, 6) rotate(225)">
                <path d="M0,0 C-3,-3 -3,-7 0,-9 C3,-7 3,-3 0,0" fill="currentColor" opacity="0.6" />
                <path d="M0,0 L0,-8" stroke="#F6E6D9" strokeWidth="0.5" opacity="0.5" />
              </g>

              {/* Small Buds/French Knots */}
              <circle cx="30" cy="6" r="1.5" fill="#4A2B2D" opacity="0.5" />
              <circle cx="30" cy="6" r="0.5" fill="currentColor" />
              
              <circle cx="90" cy="18" r="1.5" fill="#4A2B2D" opacity="0.5" />
              <circle cx="90" cy="18" r="0.5" fill="currentColor" />
            </svg>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between relative z-10">
        {/* Logo / Brand Column */}
        <Link
          id="nav-logo"
          to="/"
          onClick={handleLinkClick}
          className="flex items-center group relative h-16 w-auto"
        >
          {/* Blooming logo background accent */}
          <motion.div
            className="absolute inset-0 bg-[#C5A880]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          />
          <span className="parisienne-accent text-3xl sm:text-4xl text-[#4A2B2D] transition-transform duration-300 group-hover:scale-105 tracking-wide whitespace-nowrap">
            Ya:saara Events
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav id="desktop-navbar" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              id={`nav-link-${link.id}`}
              to={link.path}
              onClick={handleLinkClick}
              className="caps-label relative py-2 text-xs font-medium tracking-widest uppercase text-[#4A2B2D]/80 hover:text-[#4A2B2D] transition-colors duration-200"
            >
              {link.name}
              {activePath === link.path && (
                <motion.div
                  id={`nav-active-dot-${link.id}`}
                  layoutId="activeDot"
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center text-[#4A2B2D]"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 180 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <Flower size={12} />
                  </motion.div>
                </motion.div>
              )}
            </Link>
          ))}
          <Link
            id="nav-cta-button"
            to="/contact#contact-form-card"
            onClick={handleLinkClick}
            className="caps-label ml-2 px-5 py-2.5 text-xs tracking-widest uppercase font-semibold bg-[#4A2B2D] text-[#F6E6D9] rounded-sm hover:bg-[#643D40] transition-colors duration-300"
          >
            Inquire Now
          </Link>
        </nav>

        {/* Mobile Toggle Menu */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#4A2B2D] hover:bg-[#4A2B2D]/5 rounded-full transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#F6E6D9] border-b border-[#4A2B2D]/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col items-stretch max-w-md mx-auto">
              {navLinks.map((link, idx) => (
                <motion.div key={link.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
                  <Link
                    id={`mobile-nav-link-${link.id}`}
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`caps-label block px-4 py-3 rounded-md text-sm font-medium tracking-widest uppercase transition-colors ${
                      activePath === link.path
                        ? 'bg-[#4A2B2D]/10 text-[#4A2B2D]'
                        : 'text-[#4A2B2D]/70 hover:bg-[#4A2B2D]/5 hover:text-[#4A2B2D]'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-[#4A2B2D]/10 flex flex-col gap-3">
                <Link
                  id="mobile-nav-cta"
                  to="/contact#contact-form-card"
                  onClick={handleLinkClick}
                  className="caps-label w-full block text-center py-3 bg-[#4A2B2D] text-[#F6E6D9] rounded-md text-xs uppercase tracking-widest font-semibold active:bg-[#643D40]"
                >
                  Book Consultation
                </Link>
                <a
                  id="mobile-nav-ig"
                  href="https://www.instagram.com/yasaara.events/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="caps-label w-full text-center py-2.5 border border-[#4A2B2D]/20 text-[#4A2B2D] rounded-md text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 hover:bg-[#4A2B2D]/5"
                >
                  <Instagram size={16} />
                  @yasaara.events
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
