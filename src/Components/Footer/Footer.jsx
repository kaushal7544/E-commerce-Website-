import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ borderTop: "5px solid #1b263b" }}>
      <Box
        sx={{
          backgroundColor: "#b3af8f",
          color: "#ffffff",
          mt: 8,
          pt: 8,
          px: { xs: 3, md: 10 },
          pb: 4,
          position: "relative",
          maxWidth: "1800px",
          margin: "auto",
        }}
      >
        {/* Content */}
        <Grid container spacing={6}>
          {/* Logo & About */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              fontWeight="bold"
              gutterBottom
              color="#1b263b"
              textAlign={{ xs: "center", md: "left" }}
            >
              SPORTS MART
            </Typography>
            <Typography
              variant="body2"
              color="#17252A"
              textAlign={{ xs: "center", md: "left" }}
            >
              Elevating your shopping experience with curated products,
              seamless delivery, and unmatched service.
            </Typography>
          </Grid>

          {/* Quick Links & Support */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-between",
                textAlign: { xs: "center", sm: "left" },
                gap: 4,
              }}
            >
              {/* Quick Links */}
              <Box ml={15}>
                <Typography variant="h6" gutterBottom color="#1b263b">
                  Quick Links
                </Typography>
                {["Home", "Shop", "About", "Contact"].map((text) => (
                  <Typography key={text} variant="body2" color="#1b263b">
                    {text}
                  </Typography>
                ))}
              </Box>

              {/* Support */}
              <Box ml={15}>
                <Typography variant="h6" gutterBottom color="#1b263b">
                  Support
                </Typography>
                {["FAQs", "Shipping & Returns", "Privacy Policy", "Terms & Conditions"].map((text) => (
                  <Typography key={text} variant="body2" color="#1b263b">
                    {text}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4}
          sx={{
          marginLeft: { xs: 0, md: 16 }
          }}>
            <Typography
              variant="h6"
              gutterBottom
              color="#1b263b"
              textAlign={{ xs: "center", md: "left" }}
            >
              Subscribe to Newsletter
            </Typography>
            <Typography
              variant="body2"
              color="#1b263b"
              gutterBottom
              textAlign={{ xs: "center", md: "left" }}
            >
              Get the latest updates on new products and upcoming sales.
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 1,
                mt: 1,
              }}
            >
              <TextField
                placeholder="Your email"
                size="small"
                variant="filled"
                sx={{
                  backgroundColor: "#b3af8f",
                  borderRadius: 1,
                  flexGrow: 1,
                }}
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1b263b",
                  color: "#DEF2F1",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Divider
          sx={{
            my: 4,
            borderBottom: "1px solid black",
          }}
        />

        {/* Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="#1b263b">
            © {new Date().getFullYear()} ShopSmart. All rights reserved.
          </Typography>
          <Box>
            {[Facebook, Instagram, Twitter, YouTube].map((Icon, index) => (
              <IconButton key={index} sx={{ color: "#1b263b" }}>
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
