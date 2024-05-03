import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Index() {
  return (
    <>
      <Header />
      <div className="container-fluid" id="hero">
        <div className="jumbotron hero-section p-5" style={{ padding: '5rem' }}>
          <h1 className="display-4">Welcome to Xplore</h1>
          <p className="lead">Embark on a cosmic journey through the wonders of our solar system with Xplore! Immerse yourself in breathtaking imagery and captivating 3D models that unveil the mysteries of space.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;

