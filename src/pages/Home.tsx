import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-950 flex flex-col items-center justify-center text-white">
      <Logo />
      <Navigation />
    </div>
  );
}

export default Home;