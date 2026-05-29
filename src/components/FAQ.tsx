import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    question: "Do you travel outside of Kathmandu and Pokhara?",
    answer: "Yes. While Kathmandu and Pokhara are our primary canvases, we love traveling to transform spaces across Nepal. Travel and accommodation logistics will be discussed during our initial consultation."
  },
  {
    question: "Do you provide the tables, chairs, and tents?",
    answer: "We are purely an event styling and decor curation team. We do not provide heavy infrastructure like tents or tables, but we will happily source, drape, and style them. We can also recommend trusted vendors for rentals."
  },
  {
    question: "How far in advance should we book you?",
    answer: "For micro-weddings, we recommend reaching out 3 to 6 months in advance. For smaller dinner parties or bridal showers, 4 to 6 weeks is usually sufficient, depending on our availability."
  },
  {
    question: "Can we use our own flowers or vases?",
    answer: "To maintain the integrity and artistic consistency of the Ya:saara aesthetic, we prefer to source and curate all floral and structural elements ourselves. However, if you have a family heirloom you'd like incorporated into the centerpiece, we'd be honored to include it."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#FDFBF7] relative border-t border-[#4A2B2D]/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="caps-label text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A880] block">
            Fine Print
          </span>
          <h2 className="serif-heading text-3xl sm:text-4xl font-semibold text-[#4A2B2D]">
            Gentle Inquiries
          </h2>
          <div className="w-16 h-0.5 bg-[#4A2B2D]/30 mx-auto mt-4" />
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="border-b border-[#4A2B2D]/10 last:border-0"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center py-6 text-left group"
                >
                  <span className={`font-serif text-lg sm:text-xl transition-colors duration-300 ${isOpen ? 'text-[#C5A880]' : 'text-[#4A2B2D] group-hover:text-[#C5A880]'}`}>
                    {faq.question}
                  </span>
                  <div className="ml-4 flex-shrink-0 text-[#4A2B2D]/50 transition-colors duration-300 group-hover:text-[#C5A880]">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[#4A2B2D]/70 font-sans font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
