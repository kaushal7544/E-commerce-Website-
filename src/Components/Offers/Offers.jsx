import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import img1 from "../../assets/Of1.png";
import img2 from "../../assets/Of2.png";
import img3 from "../../assets/Of3.png";
import { useNavigate } from "react-router-dom";

const PromoSection = () => {
  const navigate = useNavigate();

  const promoItems = [
    {
      title: "Up to 30% off",
      subtitle: "Cricket Metal Spike Shoes",
      img: img1,
    },
    {
      title: "Up to 50% off",
      subtitle: "Running Shoes",
      img: img2,
    },
    {
      title: "Up to 20% off",
      subtitle: "Football Shoes",
      img: img3,
    },
  ];

  return (
    <Box sx={{ p: { xs: 2, sm: 4 } }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: { xs: 3, sm: 6 },
          fontSize: { xs: "1.8rem", sm: "2rem", md: "2.5rem" },
          color: "#17252A",
          textAlign: "center",
        }}
      >
        SALE PRODUCTS
      </Typography>

      <Box sx={{
        maxWidth: 1800,
        mx: "auto",
      }}>
        <Grid container spacing={4} justifyContent="center">
          {promoItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  width: { xs: "30vh", sm: "50vh" },
                  height: { xs: "30vh", sm: 300 },
                  borderRadius: 2,
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "space-between",
                  alignItems: { xs: "center", sm: "center" },
                  textAlign: { xs: "center", sm: "left" },
                  p: { xs: 2, sm: 4 },
                  background: "#1b263b",
                  color: "#FFD700",
                  border: "2px solid #FFF",
                }}
              >
                {/* Text Section */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{
                      color: "#DEF2F1",
                      fontSize: { xs: "1.5rem", sm: "2rem" },
                      mb: 1,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#FEFFFF",
                      mb: 2,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "20px",
                      border: "2px solid #fff",
                      color: "#fff",
                      textTransform: "none",
                      fontWeight: 600,
                      background: "#17252A",
                      px: 3,
                      fontSize: { xs: "0.8rem", sm: "1rem" },
                    }}
                    onClick={() => navigate("/dash-board")}
                  >
                    Shop
                  </Button>
                </Box>

                {/* Image Section */}
                <Box
                  sx={{
                    mt: { xs: 2, sm: 0 },
                    ml: { sm: 2 },
                    overflow: "hidden",
                    maxWidth: 200,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    sx={{
                      width: { xs: "110%", sm: "120%" },
                      maxHeight: { xs: 250, sm: 250},
                      objectFit: "contain",
                      transition: "transform 0.4s ease-in-out",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default PromoSection;
