// src/pages/CartPage.jsx
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
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../../redux/cartSlice";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log('cart', cartItems);

  const dispatch = useDispatch();

  const [timer, setTimer] = useState(5 * 60);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [successMsg, setSuccessMsg] = useState("");


  const formatTime = (sec) => {
    const min = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${min}m${seconds.toString().padStart(2, "0")}s`;
  };

  const handleQuantity = (id, type) => {
    const item = cartItems.find((item) => item.id === id);
    if (!item) return;

    const newQuantity = type === "inc" ? item.quantity + 1 : Math.max(1, item.quantity - 1);
    dispatch(updateQuantity({ id, quantity: newQuantity }));
  };

  const handleCheckout = () => {
    if (coupon === "KAUSHAL10") {

      // const discountValue = (coupon === "KAUSHAL10") ? subtotal * 0.1 : 0;
      // const total = subtotal - discountValue + shipping;
      // setDiscount(subtotal * 0.1);

      setDiscount(100);
      setSuccessMsg("🎉 Coupon applied successfully!");
    } else if (coupon.trim() === "") {
      setSuccessMsg("Please enter a coupon code.");
    } else {
      setSuccessMsg("❌ Invalid coupon code. Try again.");
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 20;
  const discountedSubtotal = subtotal - discount;
  const total = discountedSubtotal + shipping;

  return (
    <Box sx={{ p: { xs: 2, md: 6 }, display: "flex", justifyContent: "center", marginLeft: "13%" }}>
      <Navbar />
      <Box sx={{ maxWidth: 1800, width: "100%" }}>
        <Typography variant="h4" fontWeight="bold" mb={1} color="#1b263b" ml={"34%"} mt={15}>
          Shopping Cart
        </Typography>
        <Typography variant="body2" color="text.secondary" ml={"37%"}>
          Shop &gt; Shopping Cart
        </Typography>

        <Grid container spacing={4}>
          {/* Left Side */}
          <Grid item xs={12} md={8}>
            <Typography color="#000" fontWeight={500} mb={2} mt={10}>
              ⏱ Your cart is saved for the next <strong>{formatTime(timer)}</strong>
            </Typography>

            {cartItems.length === 0 ? (
              <Typography mt={4} color="#000">🛒 Your cart is empty.</Typography>
            ) : (
              cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      width: "135%",
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      p: 2,
                      background: "#fff",
                      transition: "transform 0.3s ease",
                      ":hover": {
                        transform: "scale(1.01)",
                      },
                    }}
                  >
                    <IconButton onClick={() => dispatch(removeFromCart(item.id))} sx={{ color: "#ff4d4f" }}>
                      <Close />
                    </IconButton>
                    <Box
                      component="img"
                      src={item.img}
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
                        PRODUCT
                      </Typography>
                      <Typography fontWeight={600}>{item.title}</Typography>
                      <Typography color="gray">Variant</Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", mr: 3, border: "1px solid #ccc" }}>
                      <IconButton onClick={() => handleQuantity(item.id, "dec")}><Remove /></IconButton>
                      <Typography fontWeight="bold" sx={{ mx: 1 }}>{item.quantity}</Typography>
                      <IconButton onClick={() => handleQuantity(item.id, "inc")}><Add /></IconButton>
                    </Box>
                    <Typography fontWeight="bold" sx={{ ml: 3 }}>
                      ₹{item.price * item.quantity}.00
                    </Typography>
                  </Paper>
                </motion.div>
              ))
            )}
          </Grid>

          {/* Right Side Summary */}
          <Grid item xs={12} md={4} mt={15} ml={30}>
            <Paper
              elevation={5}
              component={motion.div}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              sx={{
                p: 4,
                backdropFilter: "blur(12px)",
                background: "rgba(255, 255, 255, 0.75)",
              }}
            >
              <Typography variant="h6" fontWeight="bold">Summary</Typography>
              <Divider sx={{ my: 2 }} />
              <Box display="flex" justifyContent="space-between" mb={1}>
                <Typography color="text.secondary">Subtotal</Typography>
                <Typography>₹{subtotal}.00</Typography>
              </Box>
              {discount > 0 && (
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography color="green">Discount</Typography>
                  <Typography color="green">- ₹{discount}.00</Typography>
                </Box>
              )}
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Typography color="text.secondary">Shipping</Typography>
                <Typography>₹{shipping}.00</Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" fontWeight="bold" fontSize="1.1rem" mb={3}>
                <Typography>Total</Typography>
                <Typography>₹{total}.00</Typography>
              </Box>

              <TextField
                fullWidth
                placeholder="Enter coupon code here"
                variant="outlined"
                size="small"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                sx={{ mb: 2, backgroundColor: "#f9f9f9", borderRadius: 2 }}
              />

              <Button
                variant="contained"
                fullWidth
                onClick={handleCheckout}
                sx={{
                  backgroundColor: "#1b263b",
                  color: "#fff",
                  fontWeight: "bold",
                  borderRadius: 2,
                  py: 1.2,
                  ":hover": { backgroundColor: "#333" },
                }}
              >
                Check Out
              </Button>

              {successMsg && (
                <Typography mt={2} color={successMsg.includes("success") ? "green" : "error"}>
                  {successMsg}
                </Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CartPage;
