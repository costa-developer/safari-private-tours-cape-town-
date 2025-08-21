'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import MaskText from '../../Common/MaskText';
import { useIsMobile } from '@/lib/useIsMobile';
import {
  Wrapper,
  Inner,
  Header,
  TestimonialWrapper,
  Testimonial,
  Testimony,
  UserInfo,
  Name,
  Avatar,
  PaginationButtonContainer,
  Previous,
  Next,
} from './styles';
import { Props, desktopHeaderPhrase, testimonials } from './constants';

const Testimonialss = () => {
  const [testimonialsArr, setTestimonialsArr] = useState<Props[]>(testimonials);
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  const next = () => setTestimonialsArr([...testimonialsArr.slice(1), testimonialsArr[0]]);
  const previous = () =>
    setTestimonialsArr([...testimonialsArr.slice(-1), ...testimonialsArr.slice(0, -1)]);

  const mappedTestimonials = isMobile
    ? testimonialsArr.slice(0, 1)
    : testimonialsArr.slice(0, 3);

  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        </Header>
        <TestimonialWrapper>
          {mappedTestimonials.map((t, i) => (
            <Testimonial key={i}>
              <Testimony>{t.testimony}</Testimony>
              <UserInfo>
                <Name>
                  <MaskText phrases={[t.person]} tag="h3" />
                  <MaskText phrases={['Happy RAFT User']} tag="p" />
                </Name>
                <Avatar>
                  <Image src={t.avatar} alt="user avatar" width={50} height={50} />
                </Avatar>
              </UserInfo>
            </Testimonial>
          ))}
        </TestimonialWrapper>
        <PaginationButtonContainer>
          <Previous onClick={previous}>
            <Image src='/svgs/ic_arrow_left.svg' alt="arrow_left" width={24} height={24} />
          </Previous>
          <Next onClick={next}>
            <Image src='/svgs/ic_arrow_right.svg' alt="arrow_right" width={24} height={24} />
          </Next>
        </PaginationButtonContainer>
      </Inner>
    </Wrapper>
  );
};

export default Testimonialss;
