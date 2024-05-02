import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Button from '@mui/material/Button';

function Index() {
  return (
    <>
      <Header />
      <div className="container-fluid" id="hero">
        <div className="jumbotron hero-section p-5">
          <h1 className="display-4">Welcome to Xplore</h1>
          <p className="lead">Here you will find great pictures and 3D models of the solar system, but first:<br/> <strong>Check out NASA's picture of the day down below!</strong> </p>
          <Button variant="contained" color="primary" style={{ backgroundColor: '#6232A6' }} href="/pic" size="large">
            Picture of the Day
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Index;
