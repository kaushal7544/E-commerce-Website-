import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import img1 from '../../assets/Hero1.png';
import img2 from '../../assets/Hero2.png';
import img3 from '../../assets/Hero3.png';

const sectionData = [
  { title: "FootBall", image: img1 },
  { title: "Cricket", image: img2 },
  { title: "Badminton", image: img3 },
];

const ThreeSectionRow = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dash-board');
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <Grid container spacing={0}>
        {sectionData.map((section, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              onClick={handleClick}
              sx={{
                position: 'relative',
                width: {
                  xs: 412,        
                  sm: '75vh',    
                  md: '67.7vh',       
                },
                height: {
                  xs: 250,
                  sm: '50vh',
                  md: '50vh',      
                },
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${section.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.5s ease-in-out',
                  zIndex: 0,
                },
                '&:hover::before': {
                  transform: 'scale(1.1)',
                },
                '&:hover .overlay': {
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                },
              }}
            >
              {/* Overlay */}
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  transition: 'background-color 0.3s ease',
                  zIndex: 1,
                }}
              />

              {/* Always Visible Text */}
              <Typography
                variant="h4"
                sx={{
                  zIndex: 2,
                  color: "#b3af8f",
                  fontWeight: 'bold',
                  textAlign: 'center',
                  px: 2,
                  textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
                  letterSpacing: '2px',
                  fontSize: { xs: '1.2rem', sm: '1.6rem', md: '2rem' },
                  opacity: 1, // Always visible
                  transform: 'translateY(0) scale(1)', // No animation
                }}
              >
                {section.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ThreeSectionRow;
