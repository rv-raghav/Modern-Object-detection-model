import React from 'react';
import { Layout } from '../components/Layout';
import { Hero } from '../components/Hero';
import { Results } from '../components/Results';
import { Features } from '../components/Features';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <Layout>
      <Hero />
      <Results />
      <Features />
      <Contact />
      <Footer />
    </Layout>
  );
}