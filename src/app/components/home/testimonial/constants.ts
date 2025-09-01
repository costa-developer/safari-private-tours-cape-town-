import { StaticImageData } from 'next/image';

export type Props = {
  testimony: string;
  person: string;
  avatar: string; 
};

export const testimonials: Props[] = [
  {
    testimony:
      "Our Cape Peninsula tour was simply breathtaking! From Cape Point to Boulders Beach penguins, every moment was unforgettable.",
    person: 'Sarah Johnson',
    avatar: '/images/robert_fox.png',
  },
  {
    testimony:
      "The Winelands tour was the highlight of our trip. The wine tastings, gourmet food, and stunning landscapes were beyond expectations.",
    person: 'James Smith',
    avatar: '/images/robert_fox.png',
  },
  {
    testimony:
      "Exploring Table Mountain and Robben Island gave us the perfect mix of adventure and history. Highly recommend these tours!",
    person: 'Olivia Brown',
    avatar: '/images/robert_fox.png',
  },
];

export const desktopHeaderPhrase = ['Discover', 'Cape Town Tours & Experiences'];
