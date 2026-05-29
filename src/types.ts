/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  details: string[];
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: 'Occasions' | 'Tablescapes' | 'Gatherings' | 'Floral';
  likes: string;
  comments: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guestCount: string;
  message: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  avatarUrl: string;
  eventDate: string;
  rating: number;
}

