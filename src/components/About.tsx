/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quote, Sparkles, Feather, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  const values = [
    {
      icon: <Feather size={20} className="text-[#C5A880]" />,
      title: 'Cozy Aesthetics',
      description: 'We respect simple textures, warm candle glows, and gentle organic floristry to create tables and spaces that invite deep connection.'
    },
    {
      icon: <Sparkles size={20} className="text-[#C5A880]" />,
      title: 'Devoted Artistry',
      description: 'We reject high-volume, cookie-cutter templates. Whether it is a small 10-person dinner or a micro backyard vow ceremony, we design it with direct, hand-styled care.'
    },
    {
      icon: <Compass size={20} className="text-[#C5A880]" />,
      title: 'Heartfelt Preparation',
      description: 'We arrive early, select every floral stem by hand, and arrange every light. We do not leave until the atmosphere feels absolutely perfect and full of warmth.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#FCF7F3] border-t border-[#4A2B2D]/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Core Introductory Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Visual Showcase (Left) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-xl overflow-hidden border border-[#4A2B2D]/10">
              <video
                id="about-story-video"
                src="/img/aboutvid.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              {/* In-photo decorative brand label */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#FCF7F3]/20 backdrop-blur-sm p-6 rounded border border-[#4A2B2D]/10">
                <p id="about-img-quote" className="script-accent text-2xl sm:text-3xl text-[#FFFFFF] leading-tight">
                  "Where every detail tells a story"
                </p>
                {/* <span id="about-img-quote-author" className="caps-label block text-xs uppercase tracking-widest text-[#4A2B2D]/60 mt-3 font-semibold">

                </span> */}
              </div>
            </div>
          </div>

          {/* Narrative Content (Right) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span id="about-section-badge" className="caps-label text-xs uppercase tracking-[0.25em] font-semibold text-[#C5A880] block">
                Our Narrative
              </span>
              <h2 id="about-headline" className="serif-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-[#4A2B2D] leading-tight">
                Dedicated to Styling Your Most <span className="script-accent text-[#C5A880] text-3xl sm:text-4xl md:text-5xl tracking-normal normal-case block sm:inline-block">Intimate</span> Milestones
              </h2>
            </div>

            {/* <p id="about-body-1" className="text-[#4A2B2D]/85 text-base sm:text-lg font-sans font-light leading-relaxed">
              <strong>Ya:saara Events</strong> is a simple, passionate occasion decorator and table setup styling service. We don't organize giant stadium weddings or complex multi-million corporate conventions; instead, we pour every ounce of our creativity and care into the beauty of smaller gather decors.
            </p> */}

            <p id="about-body-2" className="text-[#4A2B2D]/70 text-sm sm:text-base font-sans font-light leading-relaxed">
              We believe a simple family lunch, a cozy baby shower, or a micro-wedding deserves absolute, heartfelt care. By styling custom tablescapes, matching colored linens, putting together ambient candles, and arranging seasonal floral accents, we give our utmost best to make your milestone unforgettable.
            </p>

            {/* Pillar Grid List */}
            <div className="pt-6 border-t border-[#4A2B2D]/10 space-y-6">
              {values.map((v, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="p-2.0 rounded-full bg-[#4A2B2D]/5 border border-[#4A2B2D]/10 flex-shrink-0 mt-0.5">
                    {v.icon}
                  </div>
                  <div>
                    <h4 className="serif-heading font-semibold text-[#4A2B2D] text-lg leading-snug">
                      {v.title}
                    </h4>
                    <p className="text-sm text-[#4A2B2D]/70 font-sans font-light mt-1">
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
