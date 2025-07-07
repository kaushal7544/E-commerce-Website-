import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { motion } from "framer-motion";
import Navbar from "../../Components/Navbar/Navbar"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 7,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const ContactUsSimple = () => {
  return (
    <Box
    sx={{
      minHeight: "auto",
      py: 8,
      px: 2,
      display: "flex",
      marginTop: "7%",
      marginLeft:"20%",
      justifyContent: "center",
      alignItems: "center",
      
    }}
    >
      <Navbar/>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        style={{ width: "100%" }}
      >
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            width: "90%",
            maxWidth: 1000,
            borderRadius: 3,
            overflow: "hidden",
            border: "2px solid #fff",
            "&:hover": {
              boxShadow: "0 8px 20px #1b263b", 
            },
          }}
        >
          {/* Left Info Section */}
          <Box
            sx={{
              flex: 1,
              bgcolor: "#1b263b",
              p: 4,
              color: "#FFF",
            }}
          >
            <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold", mt:"50px" }}>
              <CallIcon sx={{ mr: 1 }} />
              CALL US
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc", mb: 4 }}>
              1 (234) 567-891, 1 (234) 987-654
            </Typography>

            <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
              <LocationOnIcon sx={{ mr: 1 }} />
              LOCATION
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc", mb: 4 }}>
              121 Rock Street, 21 Avenue, New York, NY 92103-9000
            </Typography>

            <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
              <AccessTimeIcon sx={{ mr: 1 }} />
              BUSINESS HOURS
            </Typography>
            <Typography variant="body2" sx={{ color: "#ccc" }}>
              Mon – Fri ….. 10 am – 8 pm
              <br />
              Sat, Sun …… Closed
            </Typography>
          </Box>

          {/* Right Form Section */}
          <Box
            sx={{
              flex: 1,
              bgcolor: "#1b263b",
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{ fontWeight: "bold", color: "#fff", mb: 4 }}
            >
              CONTACT US
            </Typography>

            <TextField
              placeholder="Enter your Name"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
              InputProps={{
                style: {
                  backgroundColor: "#fff",
                  borderRadius: 4,
                },
              }}
            />
            <TextField
              placeholder="Enter a valid email address"
              fullWidth
              variant="outlined"
              sx={{ mb: 2 }}
              InputProps={{
                style: {
                  backgroundColor: "#fff",
                  borderRadius: 4,
                },
              }}
            />
            <TextField
              placeholder="Your Message"
              fullWidth
              multiline
              rows={5}
              variant="outlined"
              sx={{ mb: 3 }}
              InputProps={{
                style: {
                  backgroundColor: "#fff",
                  borderRadius: 4,
                },
              }}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#17252A",
                color: "#fff",
                fontWeight: "bold",
                borderRadius: "50px",
                py: 1.2,
                border:"2px solid #fff",
              }}
            >
              SUBMIT
            </Button>
          </Box>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default ContactUsSimple;
