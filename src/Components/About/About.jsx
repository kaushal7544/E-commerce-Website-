import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate } from 'react-router-dom';

import img1 from "../../assets/Shop1.png";
import img2 from "../../assets/Shop2.png";
import img3 from "../../assets/Shop3.png";
import img4 from "../../assets/Shop4.png";

const products = [
  { id: 1, title: "Cricket", image: img1, category: "cricket" },
  { id: 3, title: "Badmintom", image: img3, category: "badminton" },
  { id: 2, title: "FootBall", image: img2, category: "football" },
  { id: 4, title: "Volleyball", image: img4, category: "volleyball" },
];

const ProductCategories = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ py: { xs: 4, sm: 6 }, px: { xs: 2, sm: 4 } }}>
      <Typography
        variant="h4" 
        align="center"
        sx={{
          color: "#1b263b",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: 2,
          mb: { xs: 3, sm: 5 },
          fontSize: { xs: "1.5rem", sm: "2rem" }
        }}
      >
        Shop Collection
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: { xs: 3, sm: 4 },
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: { xs: 280, sm: 300, md: 360 },
              height: { xs: 370, sm: 420, md: 480 },
              border: "2px solid #1b263b",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 0 20px #17252A"
              }
            }}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.title}
              sx={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                flexGrow: 1,
                cursor: "pointer"
              }}
              onClick={() => navigate(`/${product.category}`)}
            />

            <CardContent
              sx={{
                background: "#1b263b",
                color: "#fff",
                textAlign: "center",
                py: 2
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 1, fontSize: { xs: "1rem", sm: "1.125rem" } }}
              >
                {product.title}
              </Typography>

              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { xs: "0.8rem", sm: "0.875rem" },
                  fontWeight: 500,
                  cursor: "pointer",
                  textDecoration: "underline",
                  mt: 1
                }}
                onClick={() => navigate(`/${product.category}`)}
              >
                View All
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProductCategories;
