import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  InputAdornment,
  IconButton,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { motion } from 'framer-motion';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#17252A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: '#b3af8f',
            width: '100%',
            maxWidth: 500,
            boxShadow: 'inset 0 0 12px rgba(0,0,0,0.08)',
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            sx={{ color: '#17252A', letterSpacing: 1 }}
          >
            Sign Up
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#000' },
                    '&:hover fieldset': { borderColor: '#17252A' },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: 1,
                  width:"115%",
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#000' },
                    '&:hover fieldset': { borderColor: '#17252A' },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#000' },
                    '&:hover fieldset': { borderColor: '#17252A' },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                sx={{
                  backgroundColor: '#fff',
                  borderRadius: 1,
                  width:"99%",
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#000' },
                    '&:hover fieldset': { borderColor: '#17252A' },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword((prev) => !prev)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                py: 1.2,
                fontWeight: 'bold',
                fontSize: '1rem',
                backgroundColor: '#17252A',
                color: '#b3af8f',
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: '#0f1d24',
                  color: '#fff',
                },
              }}
            >
              Create Account
            </Button>
          </motion.div>

          <Typography
            variant="body2"
            textAlign="center"
            sx={{ mt: 2, color: '#17252A' }}
          >
            Already have an account?{' '}
            <span style={{ fontWeight: 'bold', cursor: 'pointer' }}>
              Login
            </span>
          </Typography>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default SignUpPage;
