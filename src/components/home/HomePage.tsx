import React from 'react';
import Hero from '../Hero';
import FeaturedSection from '../FeaturedSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <FeaturedSection onNavigate={onNavigate} />
    </>
  );
}