/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function Gallery() {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Occasions', 'Tablescapes', 'Gatherings', 'Floral'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    // Find the original item index in the filtered items
    setSelectedItemIndex(index);
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#FCF7F3] border-t border-[#4A2B2D]/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span id="gallery-badge" className="caps-label text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A880] block">
            Recent Work
          </span>
          <h2 id="gallery-headline" className="serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#4A2B2D]">
            Curated Styling Journals
          </h2>
          <div className="w-16 h-0.5 bg-[#4A2B2D]/30 mx-auto mt-4" />
          <p id="gallery-subheadline" className="text-sm sm:text-base text-[#4A2B2D]/70 font-sans font-light leading-relaxed">
            A peak into our latest cozy tablescapes, intimate milestone setups, and handcrafted botanical details. Click on any photo to view closer details.
          </p>
        </div>

        {/* Category Filters */}
        <div id="gallery-category-filters" className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-btn-${cat.toLowerCase()}`}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedItemIndex(null);
              }}
              className={`caps-label px-5 py-2 text-xs uppercase tracking-widest font-semibold rounded-full border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#4A2B2D] border-[#4A2B2D] text-[#F6E6D9]'
                  : 'border-[#4A2B2D]/10 text-[#4A2B2D]/70 hover:border-[#4A2B2D]/30 hover:text-[#4A2B2D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3x3 Instagram-Style Grid */}
        <div id="gallery-3x3-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.slice(0, 9).map((item, idx) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              onClick={() => openLightbox(idx)}
              className="group relative cursor-pointer aspect-square rounded-lg overflow-hidden border border-[#4A2B2D]/10 bg-white"
            >
              {/* Photo */}
              <img
                id={`gallery-img-el-${item.id}`}
                src={item.imageUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-[#4A2B2D]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-[#F6E6D9]">
                <div className="flex justify-between items-start">
                  <span id={`gallery-item-cat-${item.id}`} className="caps-label px-3 py-1 bg-[#F6E6D9]/15 backdrop-blur-sm rounded-full text-[10px] uppercase font-semibold tracking-wider border border-[#F6E6D9]/20">
                    {item.category}
                  </span>
                  <Maximize2 size={16} className="text-[#F6E6D9]/70 hover:text-white" />
                </div>

                <div className="space-y-3">
                  <h4 id={`gallery-item-title-${item.id}`} className="serif-heading font-medium text-lg leading-snug">
                    {item.title}
                  </h4>
                  {/* Likes and Comments */}
                  <div className="flex items-center gap-4 text-sm font-sans text-[#F6E6D9]/90 border-t border-[#F6E6D9]/15 pt-3">
                    <span className="flex items-center gap-1.5">
                      <Heart size={16} className="fill-current" />
                      {item.likes}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle size={16} />
                      {item.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic CTA panel to follow Instagram */}
        <div id="gallery-ig-cta" className="mt-16 text-center max-w-xl mx-auto border border-[#4A2B2D]/10 rounded-xl p-8 bg-[#F6E6D9]/20 flex flex-col items-center space-y-5">
          <div className="p-3 bg-white rounded-full border border-[#4A2B2D]/10">
            <Instagram size={24} className="text-[#4A2B2D]" />
          </div>
          <div>
            <h3 className="serif-heading text-xl font-bold text-[#4A2B2D]">Stay Bound with Our Daily Works</h3>
            <p className="text-xs sm:text-sm text-[#4A2B2D]/70 font-sans font-light mt-1">
              We publish daily setup journals, live event footage, behind-the-scenes designs, and spatial decor inspiration on our Instagram.
            </p>
          </div>
          <a
            id="follow-instagram-cta"
            href="https://www.instagram.com/yasaara.events/"
            target="_blank"
            rel="noopener noreferrer"
            className="caps-label inline-flex items-center gap-2 px-6 py-3.5 bg-[#4A2B2D] text-[#F6E6D9] text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-[#643D40] transition-colors duration-300"
          >
            <Instagram size={14} />
            Follow us on Instagram
          </a>
        </div>

      </div>

      {/* Cinematic Modal Lightbox Component */}
      <AnimatePresence>
        {selectedItemIndex !== null && (
          <motion.div
            id="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#4A2B2D]/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button Float */}
            <button
              id="lightbox-close-btn"
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Previous Image Trigger */}
            <button
              id="lightbox-prev-btn"
              onClick={prevImage}
              className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer hidden md:block"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Container for Photo and Editorial description panel */}
            <div
              id="lightbox-content-card"
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FCF7F3] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#4A2B2D]/15"
            >
              {/* Image Container */}
              <div className="md:w-3/5 bg-black flex items-center justify-center relative aspect-video md:aspect-auto md:min-h-[500px]">
                <img
                  id="lightbox-main-img"
                  src={filteredItems[selectedItemIndex].imageUrl}
                  alt={filteredItems[selectedItemIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain max-h-[500px] md:max-h-[600px]"
                />
              </div>

              {/* Sidebar Info Panel */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#FCF7F3] text-[#4A2B2D]">
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-[#4A2B2D]/10 pb-4">
                    <span id="lightbox-brand-label" className="caps-label text-[10px] uppercase font-bold tracking-[0.2em] text-[#C5A880]">
                      Ya:saara Events
                    </span>
                    <span id="lightbox-category-badge" className="caps-label px-2.5 py-1 bg-[#4A2B2D]/10 rounded text-[10px] uppercase font-semibold tracking-wider">
                      {filteredItems[selectedItemIndex].category}
                    </span>
                  </div>

                  <h3 id="lightbox-title" className="serif-heading text-2xl font-semibold text-[#4A2B2D] leading-tight">
                    {filteredItems[selectedItemIndex].title}
                  </h3>

                  <p id="lightbox-desc" className="text-xs sm:text-sm text-[#4A2B2D]/75 font-sans leading-relaxed">
                    This spatial curation demonstrates our dedication to organic shapes, natural light balances, and delicate custom design accents.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#4A2B2D]/10 space-y-4">
                  {/* Real Stats */}
                  <div className="flex items-center gap-4 text-xs font-sans">
                    <span className="flex items-center gap-1.5 text-[#4A2B2D]/80">
                      <Heart size={14} className="fill-[#4A2B2D] text-[#4A2B2D]" />
                      <strong>{filteredItems[selectedItemIndex].likes}</strong> Likes
                    </span>
                    <span className="flex items-center gap-1.5 text-[#4A2B2D]/80">
                      <MessageCircle size={14} />
                      <strong>{filteredItems[selectedItemIndex].comments}</strong> Comments
                    </span>
                  </div>

                  <a
                    id="lightbox-ig-profile-link"
                    href="https://www.instagram.com/yasaara.events/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="caps-label w-full text-center py-2.5 bg-[#4A2B2D] text-[#F6E6D9] text-xs uppercase font-semibold tracking-widest rounded-sm hover:bg-[#643D40] transition-colors flex items-center justify-center gap-2"
                  >
                    <Instagram size={12} />
                    View original Post
                  </a>
                </div>
              </div>
            </div>

            {/* Next Image Trigger */}
            <button
              id="lightbox-next-btn"
              onClick={nextImage}
              className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer hidden md:block"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
