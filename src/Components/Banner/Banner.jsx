import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Fade, useMediaQuery, useTheme } from '@mui/material';
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import { useNavigate } from 'react-router-dom';

const images = [img1, img2, img3];

const Banner = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      id="home"
      sx={{
        height: { xs: '100vh', sm: '100vh' },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {images.map((img, i) => (
        <Fade in={i === index} timeout={1000} key={i}>
          <Box
            sx={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              transition: 'opacity 1s ease-in-out',
              zIndex: i === index ? 1 : 0,
            }}
          />
        </Fade>
      ))}

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 2,
        }}
      />

      {/* Banner Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          textAlign: 'center',
          px: { xs: 2, sm: 4 },
          color: '#fff',
        }}
      >
        <Box maxWidth="600px" mx="auto">
          <Typography
            variant={isMobile ? 'h3' : 'h2'}
            fontWeight="bold"
            gutterBottom
            color="#FEFFFF"
          >
            Welcome To The Sport Mart
          </Typography>
          <Typography
            variant={isMobile ? 'body1' : 'h6'}
            mb={4}
            color="#DEF2F1"
          >
            Discover the latest in sports news, events, and performance gear.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate("/dash-board")}
            sx={{
              backgroundColor: "#17252A",
              color: "#DEF2F1",
              borderRadius: "8px",
              px: 4,
              py: 1.2,
              fontWeight: 600,
              fontSize: isMobile ? '0.9rem' : '1rem',
              '&:hover': {
                backgroundColor: "#0f1d24",
              }
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
