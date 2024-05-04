import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css'; // Import the CSS file for styling

function Index() {
  return (
    <>
      <Header />
      <div className="container-fluid" id="hero">
        <div className="jumbotron hero-section p-0"> {/* Adjust padding */}
          {/* Video section */}
          <video autoPlay loop muted className="video-fluid w-100"> {/* Make video full-screen and responsive */}
            <source src={"assets/Welcome.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Content overlay */}
          <div className="container" style={{textAlign: 'center', color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <h1 className="title" style={{fontSize: '4em', textShadow: '2px 2px 4px #000000'}}>Welcome to XPLORE</h1>
            <p className="subtitle" style={{fontSize: '1.5em'}}>Somewhere, something incredible is waiting to be known.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
