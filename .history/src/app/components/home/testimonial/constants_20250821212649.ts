import { StaticImageData } from 'next/image';

export type Props = {
  testimony: string;
  person: string;
  avatar: string; 
};

export const testimonials: Props[] = [
  {
    testimony:
      "Being part of the Zimbabwean Catholic community in Cape Town has strengthened my faith and connected me to a wonderful family of believers.",
    person: 'Maria Chikodzi',
    avatar: '/images/maria_chikodzi.png',
  },
  {
    testimony:
      "The community Masses and events bring joy, fellowship, and a sense of home away from Zimbabwe. It's truly uplifting to be part of this vibrant parish.",
    person: 'Tendai Moyo',
    avatar: '/images/tendai_moyo.png',
  },
  {
    testimony:
      "Attending youth gatherings and cultural celebrations has helped my children grow spiritually while staying connected to our Zimbabwean heritage.",
    person: 'Faith Ndlovu',
    avatar: '/images/faith_ndlovu.png',
  },
];

export const desktopHeaderPhrase = ['Celebrating', 'Zimbabwean Catholic Community in Cape Town'];
