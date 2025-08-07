import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Badge
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const navItems = ['Home', 'About Us', 'Shop', 'Contact Us'];

export default function TrekStyleNavbar() {
  const activePage = '';
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);

  const navRoutes = {
    "Home": "/#",
    "About Us": "/about",
    "Shop": "/dash-borad",
    "Contact Us": "/contact"

  };

  const navigate = useNavigate();
  const handleUserMenuClose = () => setUserMenuAnchor(null);

  const cartItems = useSelector((state) => state.cart); // redux cart state
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {!drawerOpen && (
        <AppBar
          position="fixed"
          sx={{
            background: 'transparent',
            backdropFilter: 'blur(12px)',
            px: { xs: 1, sm: 2 },
            py: { xs: 0.5, sm: 1 },
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1300,
            boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
          }}
        >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                fontStyle: 'italic',
                letterSpacing: 2,
                fontFamily: 'Arial Black, sans-serif',
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.75rem' },
                background: "#DEF2F1",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",   
                // cursor:"pointer"
              }}
              onClick={() => navigate('/')}
            >
              SPORTS MART
            </Typography>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, marginRight: "70px" }}>
              {navItems.map((item) => (
                <HashLink key={item} to={navRoutes[item]} smooth style={{ textDecoration: 'none' }}>
                  <Box
                    sx={{
                      position: 'relative',
                      color: item === activePage ? '#ffba75' : '#ccc',
                      fontWeight: 800,
                      fontSize: '1rem',
                      cursor: 'pointer',
                      fontFamily: 'sans-serif',
                      background: "#DEF2F1",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bottom: -4,
                        height: '2px',
                        width: item === activePage ? '50%' : '0%',
                        backgroundColor: '#17252A',
                        transition: 'width 0.3s ease-in-out',
                      },
                      '&:hover::after': {
                        width: '50%',
                      },
                      ":hover": {
                        backgroundColor: '#17252A',
                      }
                    }}
                  >
                    {item}
                  </Box>
                </HashLink>
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Tooltip title="Search">
                <IconButton
                  sx={{
                    background: "#DEF2F1",
                    color: '#000',
                    width: { xs: 28, md: 36 },
                    height: { xs: 28, md: 36 },
                    ":hover": {
                      backgroundColor: "#17252A",
                      color: "#DEF2F1"
                    }
                  }}
                  onClick={() => navigate('/search-bar')}
                >
                  <SearchIcon sx={{ fontSize: { xs: '14px', md: '18px' } }} />
                </IconButton>
              </Tooltip>

              <Tooltip title="Cart">
                <IconButton
                  sx={{
                    background: "#DEF2F1",
                    color: '#000',
                    width: { xs: 28, md: 36 },
                    height: { xs: 28, md: 36 },
                    ":hover": {
                      backgroundColor: "#17252A",
                      color: "#DEF2F1",
                    }
                  }}
                  onClick={() => navigate('/cart-item')}
                >
                  <Badge badgeContent={totalQuantity} color="error">
                    <ShoppingCartIcon sx={{ fontSize: { xs: '14px', md: '18px' } }} />
                  </Badge>
                </IconButton>
              </Tooltip>

              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Tooltip title="User">
                  <IconButton
                    onClick={(e) => setUserMenuAnchor(e.currentTarget)}
                    sx={{
                      background: "#DEF2F1",
                      color: '#000',
                      width: 36,
                      height: 36,
                      ":hover": {
                        backgroundColor: "#17252A",
                        color: "#DEF2F1",
                      }
                    }}
                  >
                    <AccountCircleIcon fontSize="small" />
                  </IconButton>
                </Tooltip>

                <Menu
                  anchorEl={userMenuAnchor}
                  open={Boolean(userMenuAnchor)}
                  onClose={handleUserMenuClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  PaperProps={{
                    sx: {
                      backgroundColor: '#b3af8f',
                      borderRadius: 2,
                      mt: 1,
                      px: 1,
                      boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
                      minWidth: 150,
                    }
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      navigate('/login');
                      handleUserMenuClose();
                    }}
                    sx={{
                      fontWeight: 'bold',
                      color: '#17252A',
                      fontSize: '0.95rem',
                      borderRadius: 1,
                      '&:hover': {
                        backgroundColor: '#a29f7f',
                        color: '#fff',
                      },
                    }}
                  >
                    Login
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate('/signup');
                      handleUserMenuClose();
                    }}
                    sx={{
                      fontWeight: 'bold',
                      color: '#17252A',
                      fontSize: '0.95rem',
                      borderRadius: 1,
                      '&:hover': {
                        backgroundColor: '#a29f7f',
                        color: '#fff',
                      },
                    }}
                  >
                    Sign Up
                  </MenuItem>
                </Menu>
              </Box>

              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton onClick={() => setDrawerOpen(true)}>
                  <MenuIcon sx={{ color: '#DEF2F1' }} />
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      )}

      {/* ✅ Fullscreen Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            backgroundColor: '#17252A',
            width: '100vw',
            height: '100vh',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }
        }}
      >
        {/* 🔝 Login/Signup at Top */}
        <Box sx={{ pt: 4, px: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box
            onClick={() => {
              navigate('/login');
              setDrawerOpen(false);
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2,
              py: 1.2,
              border: '2px dashed #DEF2F1',
              borderRadius: 2,
              color: '#DEF2F1',
              fontWeight: 'bold',
              fontSize: '1.05rem',
              cursor: 'pointer',
              transition: '0.3s',
              '&:hover': {
                backgroundColor: '#DEF2F1',
                color: '#17252A',
              },
            }}
          >
            <AccountCircleIcon />
            Login
          </Box>

          <Box
            onClick={() => {
              navigate('/signup');
              setDrawerOpen(false);
            }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2,
              py: 1.2,
              border: '2px dashed #DEF2F1',
              borderRadius: 2,
              color: '#DEF2F1',
              fontWeight: 'bold',
              fontSize: '1.05rem',
              cursor: 'pointer',
              transition: '0.3s',
              '&:hover': {
                backgroundColor: '#DEF2F1',
                color: '#17252A',
              },
            }}
          >
            <AccountCircleIcon />
            Sign Up
          </Box>
        </Box>

        {/* 🧭 Centered Navigation Links */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
          <List>
            {navItems.map((item) => (
              <HashLink
                key={item}
                to={navRoutes[item]}
                smooth
                onClick={() => setDrawerOpen(false)}
                style={{ textDecoration: 'none', color: '#fff' }}
              >
                <ListItem sx={{ py: 2, px: 4, justifyContent: 'center' }}>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontWeight: 'bold',
                      fontSize: '1.2rem',
                      textAlign: 'center',
                      marginBottom: "20px"
                    }}
                  />
                </ListItem>
              </HashLink>
            ))}
          </List>
        </Box>

        {/* ⬇️ Close Button */}
        <Box sx={{ textAlign: 'center', pb: 3 }}>
          <Typography
            onClick={() => setDrawerOpen(false)}
            sx={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: '#fff',
              cursor: 'pointer',
              p: 1,
              borderRadius: 2,
              backgroundColor: '#1e2a38',
              display: 'inline-block',
              border: "2px solid #fff",
              '&:hover': {
                backgroundColor: '#111f2b',
              },
            }}
          >
            Close Menu
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
