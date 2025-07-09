import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";


const Footer = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #1b263b, #0d1b2a)",
        color: "#b3af8f",
        px: { xs: 3, sm: 8 },
        py: 6,
        // borderTopLeftRadius: "40px",
        // borderTopRightRadius: "40px",
        boxShadow: "0px -4px 20px rgba(0,0,0,0.3)",
        mt: 5,
        // justifyContent:"space-evenly",
        // display:"grid",
      }}
    >
      <Grid container spacing={4}
      sx={{
        display:"flex",
        justifyContent:"space-around",
      }}
      >
        {/* Store Info */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 2,
              position: "relative",
              "&::after": {
                content: '""',
                width: "40px",
                height: "3px",
                background: "#b3af8f",
                position: "absolute",
                left: 0,
                bottom: -4,
              },
            }}
          >
            🛍️ SPORTS MART
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Your one-stop shop for all your needs. Quality meets affordability!
          </Typography>
          <Typography variant="body2">
            Seamless shopping with secure checkout, fast delivery, and top-tier support.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={6} sm={6} md={2.25}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              position: "relative",
              "&::after": {
                content: '""',
                width: "30px",
                height: "2px",
                background: "#b3af8f",
                position: "absolute",
                left: 0,
                bottom: -4,
              },
            }}
          >
            Quick Links
          </Typography>
          {["Home", "Shop", "About Us", "Contact"].map((item, i) => (
            <Typography
              key={i}
              sx={{
                cursor: "pointer",
                mb: 1,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Support */}
        <Grid item xs={6} sm={6} md={2.25}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              position: "relative",
              "&::after": {
                content: '""',
                width: "30px",
                height: "2px",
                background: "#b3af8f",
                position: "absolute",
                left: 0,
                bottom: -4,
              },
            }}
          >
            Support
          </Typography>
          {["Help Center", "Returns", "Privacy Policy", "Terms"].map((item, i) => (
            <Typography
              key={i}
              sx={{
                cursor: "pointer",
                mb: 1,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {item}
            </Typography>
          ))}
        </Grid>

        {/* Newsletter */}
        <Grid item xs={12} sm={6} md={2.5}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              position: "relative",
              "&::after": {
                content: '""',
                width: "30px",
                height: "2px",
                background: "#b3af8f",
                position: "absolute",
                left: 0,
                bottom: -4,
              },
            }}
          >
            Newsletter
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Subscribe for exclusive deals and updates!
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              placeholder="Your Email"
              size="small"
              sx={{
                backgroundColor: "rgba(255,255,255,0.1)",
                borderRadius: 2,
                flex: 1,
                input: { color: "#fff" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#b3af8f" },
                  "&:hover fieldset": { borderColor: "#fff" },
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#b3af8f",
                color: "#1b263b",
                fontWeight: "bold",
                px: 2.5,
                "&:hover": {
                  backgroundColor: "#a29e7e",
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ backgroundColor: "#b3af8f", my: 4 }} />

      {/* Bottom Text */}
      <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            textAlign: "center",
          }}mc
        >
          <Typography variant="body2" color="#b3af8f">
            © {new Date().getFullYear()} ShopSmart. All rights reserved.
          </Typography>
          <Box>
            {[Facebook, Instagram, Twitter, YouTube].map((Icon, index) => (
              <IconButton key={index} sx={{ color: "#b3af8f" }}>
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Box>
    </Box>
  );
};

export default Footer;
