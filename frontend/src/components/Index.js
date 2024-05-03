import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../style.css'; // Import the CSS file for styling

function Index() {
  useEffect(() => {
    // Prevent scrolling when the component mounts
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
