
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import AdBanner from '@/components/AdBanner';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <AdBanner />
      <Footer />
    </div>
  );
};

export default Index;
