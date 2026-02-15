import Container from '@/components/Container';
import HomeBanner from '@/components/ui/banner';
import { Button } from '@/components/ui/button';
import React from 'react';

const HomePage = () => {
  return (
    <Container className='bg-banner rounded-lg py-16 px-8'>
      <HomeBanner />
    </Container>
  )
}

export default HomePage;

