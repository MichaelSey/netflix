// pages/index.tsx
'use client';
import React from 'react';
import Head from 'next/head';
import LandingPage from '../components/LandingPage';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href='/netflix-logo.png' />
      </Head>
      <LandingPage />
    </div>
  );
};

export default Home;
