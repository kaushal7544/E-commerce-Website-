import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Button,
  Divider,
  TextField,
  Paper,
} from "@mui/material";
import { Remove, Add, Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import img3 from "../../assets/pro3.png";
import img4 from "../../assets/pro4.png";
import Navbar from "../../Components/Navbar/Navbar"

const initialCart = [
  {
    id: 1,
    name: "Hoodie with pouch pocket",
    price: 75,
    quantity: 1,
    image: img4,
  },
  {
    id: 2,
    name: "Hoodie with pouch pocket",
    price: 75,
    quantity: 1,
    image: img3,
  },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCart);
  const [timer, setTimer] = useState(5 * 60); // 5 minutes

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (sec) => {
    const min = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${min}m${seconds.toString().padStart(2, "0")}s`;
  };

  const handleQuantity = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 20;
  const total = subtotal + shipping;

  return (
    <Box
      sx={{
        p: { xs: 2, md: 6 },
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        marginLeft:"13%"
      }}
    >
        <Navbar />
      <Box sx={{ maxWidth: 1800, width: "100%"}}>
        <Typography variant="h4" fontWeight="bold" mb={1} color="#1b263b" ml={"34%"} mt={15}> 
        Shopping Cart
        </Typography>
        <Typography variant="body2" color="text.secondary" ml={"37%"} >
          Shop &gt; Shopping Cart
        </Typography>

        <Grid container spacing={4}>
          {/* Left: Cart Items */}
          <Grid item xs={12} md={8} >
            <Typography color="#000" fontWeight={500} mb={2} mt={10} >
              ⏱ Your cart is saved for the next <strong>{formatTime(timer)}</strong>
            </Typography>

            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    width:"135%",
                    height: "40%",
                    display: "flex",
                    alignItems: "center",
                    mb: 2,
                    p: 2,
                    // borderRadius: 4,
                    background: "#ffffff",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                    transition: "transform 0.3s ease",
                    ":hover": {
                      transform: "scale(1.01)",
                    },
                  }}
                >
                  <IconButton
                    onClick={() => handleRemove(item.id)}
                    sx={{ color: "#ff4d4f" }}
                  >
                    <Close />
                  </IconButton>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{
                      width: 100,
                      height: 133,
                      mx: 2,
                      borderRadius: 2,
                      border: "1px solid #e0e0e0",
                    }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="caption" color="gray">
                      DRESS
                    </Typography>
                    <Typography fontWeight={600} sx={{ fontSize: "1.1rem" }}>
                      {item.name}
                    </Typography>
                    <Typography color="gray">Mint / S</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mr: 3, border:"1px solid rgb(183, 197, 211)" }}>
                    <IconButton
                      onClick={() => handleQuantity(item.id, "dec")}
                      color="#1b263b" 
                    >
                      <Remove />
                    </IconButton>
                    <Typography fontWeight="bold" sx={{ mx: 1, fontSize: "1.1rem" }}>
                      {item.quantity}
                    </Typography>
                    <IconButton
                      onClick={() => handleQuantity(item.id, "inc")}
                      color="#1b263b"
                    >
                      <Add />
                    </IconButton>
                  </Box>
                  <Typography fontWeight="bold" sx={{ fontSize: "1.1rem", ml:"8%", mr:"8%" }}>
                  ₹{item.price * item.quantity}.00
                  </Typography>
                </Paper>
              </motion.div>
            ))}

            <Box mt={3}>
              <Typography fontWeight={500} color= {"#000"} sx={{ fontSize: "0.95rem" }}>
                ● <em>Special instruction for seller</em>
              </Typography>
            </Box>
          </Grid>

          {/* Right: Summary */}
          <Grid item xs={12} md={4} mt={15} ml={30}>
            <Paper
              elevation={5}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              sx={{
                p: 4,
                // borderRadius: 4,
                backdropFilter: "blur(12px)",
                background: "rgba(255, 255, 255, 0.75)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Summary
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography color="text.secondary">Subtotal</Typography>
                <Typography>₹{subtotal}.00</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography color="text.secondary">Shipping</Typography>
                <Typography>₹{shipping}.00</Typography>
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                mb={3}
                sx={{ fontWeight: "bold", fontSize: "1.1rem" }}
              >
                <Typography>Total</Typography>
                <Typography>USD ₹{total}.00</Typography>
              </Box>
              <TextField
                fullWidth
                placeholder="Enter coupon code here"
                variant="outlined"
                size="small"
                sx={{
                  mb: 2,
                  backgroundColor: "#f9f9f9",
                  borderRadius: 2,
                }}
              />
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#000",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: 2,
                  py: 1.2,
                  ":hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                Check Out
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CartPage;
