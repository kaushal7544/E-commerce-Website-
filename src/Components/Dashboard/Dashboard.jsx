import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper
} from "@mui/material";
import { motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

// images
import img1 from "../../assets/pro1.png";
import img2 from "../../assets/pro2.png";
import img3 from "../../assets/pro3.png";
import img4 from "../../assets/pro4.png";
import img5 from "../../assets/pro5.png";
import img6 from "../../assets/pro6.png";
import img7 from "../../assets/pro7.png";
import img8 from "../../assets/pro8.png";
import img9 from "../../assets/pro9.png";
import img10 from "../../assets/pro10.png";
import img11 from "../../assets/pro11.png";
import img12 from "../../assets/pro12.png";

// components
import Footer from "../Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const MotionCard = motion(Card);

const categories = [
  { name: "All Products", id: "all" },
  { name: "Cricket", id: "cricket" },
  { name: "FootBall", id: "football" },
  { name: "Badminton", id: "badminton" },
  { name: "Volleyball", id: "volleyball" }
];

const allProducts = [
  { id: 1, title: "Cricket Batting Glove", price: "1299.00", img: img1, category: "cricket" },
  { id: 2, title: "Volleyball Net", price: "1499.00", img: img2, category: "volleyball" },
  { id: 3, title: "Cricket Bat", price: "2499.00", img: img3, category: "cricket" },
  { id: 4, title: "Badminton Racket", price: "899.00", img: img4, category: "badminton" },
  { id: 5, title: "Football", price: "1499.00", img: img5, category: "football" },
  { id: 6, title: "Cricket Pads", price: "2499.00", img: img6, category: "cricket" },
  { id: 7, title: "Cricket Metal Spikes", price: "1799.00", img: img7, category: "cricket" },
  { id: 8, title: "Football Keeping Glove", price: "999.00", img: img8, category: "football" },
  { id: 9, title: "Football Shoes", price: "1999.00", img: img9, category: "football" },
  { id: 10, title: "Season Ball", price: "599.00", img: img10, category: "cricket" },
  { id: 11, title: "Shuttlecock", price: "199.00", img: img11, category: "badminton" },
  { id: 12, title: "Volleyball", price: "1199.00", img: img12, category: "volleyball" },
];

const DashboardProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅ Redux dispatch

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayTitle, setDisplayTitle] = useState("All Products");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const matched = categories.find((c) => c.id === category);
    setSelectedCategory(matched ? matched.id : "all");
    setDisplayTitle(matched ? matched.name : "All Products");
  }, [category]);

  const filteredProducts = selectedCategory === "all"
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  const handleCategoryClick = (categoryId) => {
    navigate(`/${categoryId}`);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", p: 4, gap: 3, mt:"5%" }}>
        {/* Sidebar */}
        <Paper
          elevation={3}
          sx={{
            width: "220px",
            p: 3,
            borderRadius: 3,
            backgroundColor: "#1b263b",
            color: "#fff",
            flexShrink: 0,
          }}
        >
          <Navbar/>
          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Browse by
          </Typography>
          <Divider sx={{ mb: 2, backgroundColor: "#fff" }} />
          <List sx={{ padding: 0 }}>
            {categories.map((cat, index) => (
              <ListItem
                key={index}
                disablePadding
                onClick={() => handleCategoryClick(cat.id)}
                sx={{
                  px: 1,
                  py: 0.8,
                  mb: 0.5,
                  cursor: "pointer",
                  backgroundColor: selectedCategory === cat.id ? "#b3af8f" : "transparent",
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: "#b3af8f",
                    borderRadius: 1,
                  },
                }}
              >
                <ListItemText
                  primary={cat.name}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: selectedCategory === cat.id ? 600 : 500,
                    color: "#FFF",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Paper>

        {/* Product Grid */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 600,
              color: "#1b263b",
              borderBottom: "2px solid #1b263b",
              pb: 1,
            }}
          >
            {displayTitle}
          </Typography>

          <Grid container spacing={3} sx={{ margin: 0, width: '100%' }}>
            {filteredProducts.map((product, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={4} 
                lg={3} 
                key={product.id}
                sx={{ 
                  padding: '12px !important',
                  display: 'flex'
                }}
              >
                <MotionCard
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 3,
                    backgroundColor: "#1b263b",
                    color: "#FFD700",
                    border: "1px solid #1b263b",
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '30px',
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.img}
                      alt={product.title}
                      sx={{
                        transition: "transform 0.3s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                  </Box>

                  <CardContent sx={{ padding: '16px', flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight="bold" color="white">
                      {product.title}
                    </Typography>
                    <Typography variant="body1" color="#ccc">
                      {product.price}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ justifyContent: "space-between", px: 2, pt: 0 }}>
                    <Button
                      variant="outlined"
                      startIcon={<ShoppingCartIcon />}
                      sx={{
                        backgroundColor: "#17252a",
                        color: "#fff",
                        border: "2px solid #fff",
                        fontWeight: 600,
                        padding: '8px 12px',
                      }}
                      onClick={() => {dispatch(addToCart(product));
                        // navigate("/cart-item");
                      }}
                    >
                      Add to Cart
                    </Button>

                    <Button
                      variant="contained"
                      endIcon={<FlashOnIcon />}
                      sx={{
                        backgroundColor: "#17252a",
                        color: "#fff",
                        border: "2px solid #fff",
                        fontWeight: 600,
                        padding: '8px 12px',
                      }}
                      onClick={() => navigate("/checkout")}
                    >
                      Buy Now
                    </Button>
                  </CardActions>
                </MotionCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default DashboardProducts;
