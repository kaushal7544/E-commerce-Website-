import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

import img3 from "../../assets/pro3.png";
import img4 from "../../assets/pro4.png";
import img5 from "../../assets/pro5.png";
import img6 from "../../assets/pro6.png";
import img7 from "../../assets/pro7.png";
import img8 from "../../assets/pro8.png";
import img9 from "../../assets/pro9.png";
import img10 from "../../assets/pro10.png";

const collections = [
  { label: "Cricket Bat", price: "₹1899.00", image: img3 },
  { label: "Raket", price: "₹1299.00", image: img4 },
  { label: "Football", price: "₹999.00", image: img5 },
  { label: "Cricket Pads", price: "₹1499.00", image: img6 },
  { label: "Cricket Shoes", price: "₹799.00", image: img7 },
  { label: "Football Gloves", price: "₹1999.00", image: img8 },
  { label: "Football Shoes", price: "₹1699.00", image: img9 },
  { label: "Cricket Ball", price: "₹4999.00", image: img10 }
];

const Product = () => {
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box
      id="Services"
      sx={{
        textAlign: 'center',
        p: { xs: 2, sm: 3 },
        mx: 'auto',
        overflowX: 'hidden'
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          mb: { xs: 2, sm: 3 },
          mt: "20px",
          fontSize: { xs: '1.6rem', sm: '2rem', md: '2.5rem' },
          color: "#1b263b"
        }}
      >
        SPORTS PRODUCTS
      </Typography>

      <Box sx={{ maxWidth: '1400px', mx: 'auto', position: 'relative', px: { xs: 1, sm: 2, md: 3 } }}>
        <Slider {...settings}>
          {collections.map((item, index) => (
            <Card
              key={index}
              sx={{
                background: "#1b263b",
                maxWidth: { xs: 220, sm: 260, md: 300 },
                m: { xs: 1, sm: 2 },
                my: 2,
                borderRadius: 2,
                boxShadow: 4,
                color: "#fff",
                border: '2px solid #1b263b',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: { xs: 140, sm: 180, md: 200 },
                  objectFit: 'cover',
                  cursor: "pointer",
                  transition: "transform 0.4s ease-in-out",
                  '&:hover': {
                    transform: "scale(1.1)",
                  }
                }}
                image={item.image}
                alt={item.label}
                onClick={() => navigate('/')}
              />

              <CardContent sx={{ textAlign: 'left', px: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: "#DEF2F1" }}>
                  {item.label}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
                  {item.price}
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1, mt: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={<ShoppingCartIcon />}
                    sx={{
                      backgroundColor: "#17252A",
                      color: "#fff",
                      border: "2px solid #fff",
                      textTransform: 'none',
                      fontWeight: 540,
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="contained"
                    endIcon={<FlashOnIcon />}
                    sx={{
                      backgroundColor: "#17252A",
                      color: "#fff",
                      textTransform: 'none',
                      border: "2px solid #fff",
                      fontWeight: 540,
                    }}
                    onClick={() => navigate('/shopnow')}
                  >
                    Buy Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Slider>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            variant="outlined"
            sx={{
              color: "#1b263b",
              borderColor: "#1b263b",
              fontWeight: 600,
              '&:hover': {
                backgroundColor: "#1b263b",
                color: "#fff"
              }
            }}
            onClick={() => navigate("/dash-board")}
          >
            View All Products
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

// Custom Arrow Buttons
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 40,
        height: 40,
        position: 'absolute',
        top: '45%',
        right: { xs: -10, sm: -20, md: -30, lg: -40 },
        zIndex: 10,
        cursor: 'pointer',
        color: '#b3af8f',
        backgroundColor: "#1b263b",
        border: "2px solid #1b263b",
        borderRadius: "50%",
        fontSize: '2.5rem',
        ":hover": {
          backgroundColor: "#fff",
          color: "#1b263b",
        }
      }}
    >
      <BsFillArrowRightCircleFill />
    </Box>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        height: 40,
        width: 40,
        position: 'absolute',
        top: '45%',
        left: { xs: -10, sm: -20, md: -30, lg: -40 },
        zIndex: 10,
        cursor: 'pointer',
        color: '#b3af8f',
        fontSize: '2.5rem',
        backgroundColor: "#1b263b",
        border: "2px solid #1b263b",
        borderRadius: "50%",
        ":hover": {
          backgroundColor: "#fff",
          color: "#1b263b"
        }
      }}
    >
      <BsFillArrowLeftCircleFill />
    </Box>
  );
};

export default Product;
