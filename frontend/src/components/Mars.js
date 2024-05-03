import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
// import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const apiKey = 'OviPLLG6fWAxdHilozwmaRMiHTXa9iaVYXtWe1Sj';

function Mars() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const roverName = 'curiosity';
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=1000&api_key=${apiKey}`);
        const data = await response.json();
        if (response.ok) {
          setPhotos(data.photos);
        } else {
          console.error(`Error fetching Mars rover photos: ${response.status} - ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error fetching Mars rover photos:', error.message);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <>
      <Header/>
      <div>
        <div className="jumbotron jumbotron-fluid mars-video-hero">
          <video className="video-fluid videoHero" autoPlay loop muted playsInline>
            <source src="assets/mars.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a className="credits" href="https://pixabay.com/users/aivreasastii-28244525/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=143020">Marius Stancu</a> from <a className="credits" href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=143020">Pixabay</a>
        </div>

        <div className="container">
          <h1 className="mars text-center mt-5 mb-4">Mars Rover Photos</h1>
          <ImageList sx={{ width: '100vw', height: '100vh' }}>
            <ImageListItem key="Subheader" cols={2}>
              {/* <ListSubheader component="div">Recent Photos</ListSubheader> */}
            </ImageListItem>
            {photos && photos.length > 0 ? (
              photos.slice(Math.max(0, photos.length - 15)).reverse().map((photo, index) => (
                <ImageListItem key={index}>
                  <img
                    src={photo.img_src}
                    alt={`Mars Rover Photo ${index}`}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={`Earth Date: ${photo.earth_date}`}
                    actionIcon={
                      <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about Mars Rover Photo ${index}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))
            ) : (
              <p>No Mars rover photos available.</p>
            )}
          </ImageList>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Mars;
