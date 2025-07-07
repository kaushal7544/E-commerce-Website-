import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import img1 from "../../assets/Of1.png";
import img2 from "../../assets/Of2.png";
import img3 from "../../assets/Of3.png";
import { useNavigate } from "react-router-dom";

const PromoSection = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          mb: { xs: 2, sm: 6 },
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          color: "#17252A",
          textAlign: 'center',
        }}
      >
        SALE PRODUCTS
      </Typography>
      <Grid container spacing={4} justifyContent="center">

        {/* Promo Tile 1 */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: { xs: "100%", md: 514 },
              height: 300,
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 4,
              background: "#1b263b",
              color: "#FFD700",
              border: "2px solid #FFF",
            }}
          >
            {/* Text */}
            <Box>
              <Typography variant="h4" fontWeight="bold" sx={{ color: "#DEF2F1" }}>
                Up to <br /> 30% off
              </Typography>
              <Typography sx={{ mt: 1, mb: 2, color: "#FEFFFF" }}>
                Cricket Metal Spike Shoes
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
                }}
                onClick={() => navigate("/dash-board")}
              >
                Shop
              </Button>
            </Box>

            {/* Zoomable Image */}
            <Box sx={{ overflow: "hidden", ml: 2 }}>
              <Box
                component="img"
                src={img1}
                sx={{
                  height: "100%",
                  maxHeight: 250,
                  transition: "transform 0.4s ease-in-out",
                  '&:hover': {
                    transform: "scale(1.1)"
                  }
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Promo Tile 2 */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: { xs: "100%", md: 514 },
              height: 300,
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 4,
              background: "#1b263b",
              color: "#FFD700",
              border: "2px solid #FFF",
            }}
          >
            {/* Text */}
            <Box>
              <Typography variant="h4" fontWeight="bold" sx={{ color: "#DEF2F1" }}>
                Up to <br /> 50% off
              </Typography>
              <Typography sx={{ mt: 1, mb: 2, color: "#FEFFFF" }}>
                Running Shoes
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  background:"#17252A",
                  border: "2px solid #fff",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                }}
                onClick={() => navigate("/dash-board")}
              >
                Shop
              </Button>
            </Box>

            {/* Zoomable Image */}
            <Box sx={{ overflow: "hidden", ml: 2 }}>
              <Box
                component="img"
                src={img2}
                sx={{
                  height: "100%",
                  maxHeight: 250,
                  transition: "transform 0.4s ease-in-out",
                  '&:hover': {
                    transform: "scale(1.1)"
                  }
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Promo Tile 3 */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: { xs: "100%", md: 514 },
              height: 300,
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 4,
              background: "#1b263b",
              color: "#FFD700",
              border: "2px solid #FFF",
            }}
          >
            {/* Text */}
            <Box>
              <Typography variant="h4" fontWeight="bold" sx={{ color: "#DEF2F1" }}>
                Up to <br /> 20% off
              </Typography>
              <Typography sx={{ mt: 1, mb: 2, color: "#FEFFFF" }}>
                Football Shoes
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "20px",
                  background:"#17252A",
                  border: "2px solid #fff",
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 3,
                }}
                onClick={() => navigate("/dash-board")}
              >
                Shop
              </Button>
            </Box>

            {/* Zoomable Image */}
            <Box sx={{ overflow: "hidden", ml: 2 }}>
              <Box
                component="img"
                src={img3}
                sx={{
                  height: "100%",
                  maxHeight: 250,
                  transition: "transform 0.4s ease-in-out",
                  '&:hover': {
                    transform: "scale(1.1)"
                  }
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PromoSection;
