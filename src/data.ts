/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, GalleryItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'tablescapes',
    title: 'Intimate Table Curation',
    description: 'Bespoke tablescapes designed to make your guests feel deeply cared for. Includes premium linen selection, handpicked dinnerware, place cards, and personalized table styling.',
    iconName: 'Utensils',
    image: '/hero3.jpg',
    details: [
      'Thematic tablescapes styled with high-touch dedication',
      'Textured linens, custom runner layouts, and personalized menus',
      'Hand-curated dinnerware, taper candle pairings, and custom glassware',
      'Intimate setups tailored perfectly for cozy 10 to 40 guest gatherings',
      'On-site styling down to the perfect positioning of every fork'
    ]
  },
  {
    id: 'micro-gatherings',
    title: 'Small Occasion Decor',
    description: 'Visual transformation of cozy spaces—from private garden brunch tables to intimate family proposals, anniversary dinners, and baby showers.',
    iconName: 'Sparkles',
    image: '/hero1.jpg',
    details: [
      'Cozy backdrop structures and personalized display boards',
      'Atmospheric layout coordination for backyards and small dining rooms',
      'Custom cake tables, welcome setups, and lounge corner accents',
      'Thoughtful spatial flow to maximize intimacy and connection',
      'Complete set-up and clean-up so you can simply focus on your guests'
    ]
  },
  {
    id: 'floral-accents',
    title: 'Simple Botanical Styling',
    description: 'Devoted floral styling designed to add organic warmth. We create custom tabletop bud vases, delicate flower meadows, and welcoming ceremony entryways.',
    iconName: 'Flower',
    image: '/hero2.jpg',
    details: [
      'Seasonal botanical selection sourced with personal care',
      'Artisanal bud-vase clusters and whimsical organic runners',
      'Delicate tabletop florals that allow for easy, warm conversation',
      'Ambient lighting accents, storm lanterns, and cozy candlescapes',
      'Hand-crafted arrangements created with heart and strict visual detail'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    imageUrl: '/hero3.jpg',
    title: 'Minimal Table Decor',
    category: 'Occasions',
    likes: '148',
    comments: '12'
  },
  {
    id: 'g2',
    imageUrl: '/hero2.jpg',
    title: 'Office Welcoming Decor',
    category: 'Occasions',
    likes: '194',
    comments: '16'
  },
  {
    id: 'g3',
    imageUrl: '/hero1.jpg',
    title: 'Bridal Shower Decor',
    category: 'Tablescapes',
    likes: '312',
    comments: '24'
  },
  {
    id: 'g4',
    imageUrl: '/img/redtablesetup.jpg',
    title: 'Anniversary Themed Decor',
    category: 'Tablescapes',
    likes: '254',
    comments: '18'
  },
  {
    id: 'g5',
    imageUrl: '/img/pic1.jpg',
    title: 'Birthday Party Decor',
    category: 'Gatherings',
    likes: '89',
    comments: '6'
  },

  {
    id: 'g7',
    imageUrl: '/img/aavubirthday.jpg',
    title: 'Animal Themed Birthday Bash',
    category: 'Floral',
    likes: '276',
    comments: '22'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Ya:saara Events made our backyard bridal dinner look like something out of a warm storybook. We only had 12 guests, but they poured so much love and attention into every single bud vase and linen fold. They gave their absolute best, and it showed.",
    author: "Aabhiskar",
    role: "Bridal Dinner Hosts",
    location: "Sanepa, Lalitpur",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    eventDate: "June 2025",
    rating: 5
  },
  {
    id: 't2',
    quote: "Even for a small 15-person family anniversary dinner, Ya:saara came in with absolute devotion. They handpicked every plate and candle to match our palette, transforming our living room into a magical, intimate sensory experience. Their work ethic is pure heart.",
    author: "Reena",
    role: "Family Anniversary Celebrant",
    location: "Lakeside, Pokhara",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    eventDate: "October 2025",
    rating: 5
  },
  {
    id: 't3',
    quote: "We wanted a simple micro-wedding with a gorgeous floral arch and a lovely dinner table setup. Ya:saara didn't treat us like a small client—they treated us with absolute priority. They went above and beyond to make our intimate milestone breathtaking.",
    author: "Nischal",
    role: "Bride & Groom",
    location: "Baluwatar, Kathmandu",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    eventDate: "April 2026",
    rating: 5
  }
];
