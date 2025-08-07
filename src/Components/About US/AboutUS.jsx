import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar"


const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const AboutUs = () => {
  return (
    <Box
      sx={{
        // bgcolor: "#000",
        color: "#1b263b",
        py: 6,
        px: { xs: 2, md: 10 },
        mt: { xs: 10, md: 4 },
        height: "auto",
        pt: "7%",
      }}
    >
      <Navbar />
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 600,
          textTransform: "uppercase",
          mb: 4,
          letterSpacing: 2,
          marginLeft: "70px",
          ml: { xs: 1, md: 0 },
          // textDecoration: 'underline',
        }}
      >
        About Us
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: "900px", mx: "auto", color: "#fff", mb: 6, fontWeight: 600 }}
      >
        Welcome to{" "}
        <span style={{ color: "#fff" }}>SPORTS MART</span>, your ultimate
        destination for high-quality sports gear and accessories. We’re
        passionate about helping athletes and enthusiasts find the best
        products for their sport — be it Cricket, Football, Badminton, or more.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {[StorefrontIcon, EmojiEventsIcon, SupportAgentIcon].map((Icon, i) => (
          <Grid item xs={12} md={4} key={i}>
            <motion.div
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  backgroundColor: "#1b263b",
                  border: "2px solid #fff",
                  borderRadius: 3,
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 8px 20px #1b263b",
                  },
                }}

              >
                <Icon sx={{ fontSize: 40, mb: 2, color: "#fff" }} />
                <Typography variant="h6" fontWeight="bold" gutterBottom color="#fff">
                  {i === 0
                    ? "Quality Products"
                    : i === 1
                      ? "Trusted by Athletes"
                      : "24/7 Support"}
                </Typography>
                <Typography variant="body2" sx={{ color: "#bbb" }}>
                  {i === 0 &&
                    "We offer a wide range of branded sports equipment with top-notch quality and durability."}
                  {i === 1 &&
                    "From beginners to professionals, we’re trusted by sportspeople across India."}
                  {i === 2 &&
                    "Our customer service team is always ready to assist you with any queries or issues."}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUs;
