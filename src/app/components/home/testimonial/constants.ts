import { StaticImageData } from 'next/image';


export type Props = {
    testimony: string;
    person: string;
    avatar: string; 
  };
  
  export const testimonials: Props[] = [
    {
      testimony:
        "The team transformed our online presence through their digital marketing strategies. Our leads and engagement have skyrocketed in just a few months!",
      person: 'Robert Fox',
      avatar: '/images/robert_fox.png',
    },
    {
      testimony:
        "Their full-stack development expertise helped us launch a robust, scalable web application that exceeded all our expectations.",
      person: 'Cameron Williamson',
      avatar: '/images/cameron_williamson.png',
    },
    {
      testimony:
        "Thanks to their combined skills in marketing and development, our website traffic, conversions, and overall user experience improved dramatically.",
      person: 'Esther Howard',
      avatar: '/images/esther_howard.png',
    },
  ];
  
  export const desktopHeaderPhrase = ['Trusted by', 'Businesses Worldwide'];
  
  
