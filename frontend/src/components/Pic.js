import * as React from 'react';
import { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const apiKey = 'OviPLLG6fWAxdHilozwmaRMiHTXa9iaVYXtWe1Sj';

function Pic() {
  const [picData, setPicData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
        const data = await response.json();
        setPicData(data);
      } catch (error) {
        console.error('Error fetching APOD:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div>
          <h1 className="pic text-center">Astronomy Picture of the Day <i className="bi bi-camera2"></i></h1>
          {picData && (
            <Card sx={{ maxWidth: 1000, margin: 'auto' }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="600" // Adjust the height for a larger image
                  image={picData.url}
                  alt={picData.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h4" component="div" fontWeight="bold" >
                    {picData.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {picData.date}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {picData.explanation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontStyle="italic">
                    Copyright: {picData.copyright}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pic;

