'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 8.56rem;
  background: #1F2A2E; /* matches your site's black background */
`;

export const Inner = styled.div`
  display: flex;
  padding: 6.25rem 0;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 6.75rem;

  h1 {
    font-size: clamp(1.75rem, 5vw, 4rem); /* match HeroTextContainer */
    font-weight: 700; /* bold */
    line-height: 1.1;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0,0,0,0.3); /* subtle shadow */
  }

  p {
    max-width: 41.75rem;
    color: #bdbdbd; /* match paragraph color in HeroTextContainer */
    font-size: clamp(0.9rem, 2vw, 1.2rem); /* match smaller paragraph */
    font-weight: 400;
    line-height: 1.4;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: clamp(1.5rem, 6vw, 2.5rem);
    }

    p {
      font-size: clamp(0.875rem, 2.5vw, 1rem);
      line-height: 1.4;
    }
  }
`;

export const TestimonialWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Testimonial = styled.div`
  display: flex;
  max-width: 26rem;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  border-left: 2px solid #f5f5f5; /* lighter border for dark background */

  @media (max-width: 768px) {
    border-left: none;
  }
`;

export const Testimony = styled.p`
  color: #f5f5f5; /* light text on black */
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  width: 100%;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
  gap: 0.5rem;
  width: 100%;

  h3 {
    color: #f5f5f5;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5rem;
  }

  p {
    color: #c0c0c0; /* softer color for subtext */
    font-size: 0.875rem;
    font-weight: 400;
  }

  @media (max-width: 768px) {
    gap: 0.25rem;

    h3 {
      font-size: 1.25rem;
      line-height: normal;
    }

    p {
      font-size: 0.75rem;
    }
  }
`;

export const Avatar = styled.div`
  margin-left: auto;

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const PaginationButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
  margin-top: 2.5rem;
`;

export const Previous = styled.div`
  img {
    object-fit: contain;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Next = styled.div`
  img {
    object-fit: contain;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
