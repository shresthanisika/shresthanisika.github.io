import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Vibe = {
  id: string;
  name: string;
  description: string;
  palette: string[];
  textures: string;
  image: string;
  bgColor: string;
  textColor: string;
};

const VIBES: Vibe[] = [
  {
    id: 'moody',
    name: 'Earthy & Moody',
    description: 'Rich, romantic depths. Designed for evening dinner parties and intimate twilight vows. We use deep contrast to create an unforgettable, atmospheric glow.',
    palette: ['#4A2B2D', '#8C3A3A', '#D9C5B2', '#2C2C2C'],
    textures: 'Velvet linens, brass candlesticks, burgundy dahlias, dark wood',
    image: '/img/redtablesetup.jpg',
    bgColor: 'bg-[#2C2825]',
    textColor: 'text-[#E8E1D9]'
  },
  {
    id: 'classic',
    name: 'Classic Romance',
    description: 'Soft, timeless elegance. Perfect for bridal showers and morning micro-weddings. We blend light, airy fabrics with lush, classic blooms for a breathtakingly pure aesthetic.',
    palette: ['#F6E6D9', '#E8CFC8', '#C5A880', '#FDFBF7'],
    textures: 'Chiffon runners, ribbed glass, blush peonies, fine bone china',
    image: '/hero3.jpg',
    bgColor: 'bg-[#FDFBF7]',
    textColor: 'text-[#4A2B2D]'
  },
  {
    id: 'rustic',
    name: 'Rustic Minimalism',
    description: 'Organic, understated beauty. A focus on raw textures and natural surroundings, creating a grounded, intimate feel that lets your conversations take center stage.',
    palette: ['#C2B8A3', '#8A9A86', '#E2DCD3', '#5C5449'],
    textures: 'Raw linen, wild botanical stems, terracotta, stone ceramics',
    image: '/hero2.jpg',
    bgColor: 'bg-[#EAE7E1]',
    textColor: 'text-[#3E423A]'
  }
];

export const StyleExplorer = () => {
  const [activeVibe, setActiveVibe] = useState<Vibe>(VIBES[1]);

  return (
    <section id="style-explorer" className={`py-24 transition-colors duration-1000 ease-in-out ${activeVibe.bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 space-y-4 transition-colors duration-1000 ${activeVibe.textColor}`}>
          <span className="caps-label text-xs uppercase tracking-[0.25em] font-semibold opacity-70 block">
            Discover Your Canvas
          </span>
          <h2 className="serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold">
            The Style Explorer
          </h2>
          <div className={`w-16 h-0.5 mx-auto mt-4 transition-colors duration-1000 bg-current opacity-30`} />
          <p className="text-sm sm:text-base opacity-80 font-sans font-light leading-relaxed">
            Select a mood below to explore our curated aesthetics. Notice the textures, the palette, and the feeling it evokes.
          </p>
        </div>

        {/* Vibe Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {VIBES.map((vibe) => (
            <button
              key={vibe.id}
              onClick={() => setActiveVibe(vibe)}
              className={`px-6 py-3 rounded-full text-sm tracking-wider uppercase transition-all duration-500 border ${activeVibe.id === vibe.id
                ? `${activeVibe.textColor} border-current bg-current/5`
                : `${activeVibe.textColor} opacity-40 border-transparent hover:opacity-70`
                }`}
            >
              {vibe.name}
            </button>
          ))}
        </div>

        {/* Interactive Moodboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Text Content */}
          <div className={`lg:col-span-5 space-y-8 transition-colors duration-1000 ${activeVibe.textColor}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVibe.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h3 className="serif-heading text-3xl">{activeVibe.name}</h3>
                <p className="font-sans font-light leading-relaxed opacity-90">
                  {activeVibe.description}
                </p>

                <div className="pt-6 border-t border-current/10">
                  <h4 className="text-xs uppercase tracking-widest font-semibold opacity-60 mb-3">Key Textures</h4>
                  <p className="font-serif italic text-lg opacity-90">{activeVibe.textures}</p>
                </div>

                <div className="pt-6">
                  <h4 className="text-xs uppercase tracking-widest font-semibold opacity-60 mb-3">Color Palette</h4>
                  <div className="flex gap-3">
                    {activeVibe.palette.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-10 h-10 rounded-full shadow-sm border border-black/5"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image Showcase */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeVibe.image}
                  src={activeVibe.image}
                  alt={activeVibe.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
