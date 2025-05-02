import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import BackgroundGrid from './components/BackgroundGrid';
import GrainOverlay from './components/GrainOverlay';

function App() {
  return (
    <div className="app-wrapper">
      <BackgroundGrid />
      <GrainOverlay />

      <Header />

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default App;