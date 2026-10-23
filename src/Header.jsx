import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';

import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

const LogoImage = styled('img')(({ theme }) => ({
  height: '90px',
  width: 'auto',
  marginRight: theme.spacing(2),
}));

const fontFamilyStyle = {
  fontFamily: '"Anton", "Impact", sans-serif',
  fontWeight: 400,
  letterSpacing: '0.05em',
};

// Desktop navigation styles
const navButtonStyle = {
  ...fontFamilyStyle,
  color: '#374151',
  textTransform: 'uppercase',
  fontSize: '0.95rem',
  transition: 'color 0.2s ease',
  '&:hover': {
    color: '#ff4694',
    backgroundColor: 'transparent',
  },
};

// Mobile navigation styles
const mobileMenuItemStyle = {
  ...fontFamilyStyle,
  color: '#374151',
  textTransform: 'uppercase',
  fontSize: '0.95rem',
  transition: 'color 0.2s ease, background-color 0.2s ease',
  '&:hover': {
    color: '#ff4694',
    backgroundColor: '#f9fafb',
  },
};

const SocialButton = styled(IconButton)(() => ({
  color: '#374151',
  transition: 'color 0.2s ease, transform 0.2s ease',
  '&:hover': {
    color: '#ff4694',
    transform: 'scale(1.1)',
  },
}));

const SocialLink = styled('a')({
  textDecoration: 'none',
});

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Meet the Coaches', path: '/coaches' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'Beginners Course', path: '/beginners' },
  { label: 'Testimonials' },
  { label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: '#ffffff',
        backgroundImage: 'none',
        borderBottom: '1px solid #e5e7eb',
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="dense"
          disableGutters
          sx={{ py: 1 }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <LogoImage
                src={logo}
                alt="Thirty Seven BJJ"
              />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
            }}
          >
            {navItems.map((item) => (
              item.path ? (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  variant="text"
                  size="small"
                  sx={navButtonStyle}
                >
                  {item.label}
                </Button>
              ) : (
                <Button
                  key={item.label}
                  variant="text"
                  size="small"
                  sx={navButtonStyle}
                >
                  {item.label}
                </Button>
              )
            ))}
          </Box>

          {/* Desktop Social Media Icons */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <SocialLink
              href="https://www.instagram.com/37jiujitsu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialButton
                size="medium"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon fontSize="medium" />
              </SocialButton>
            </SocialLink>

            <SocialLink
              href="https://www.facebook.com/p/37-JiuJitsu-100076225269243/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialButton
                size="medium"
                aria-label="Like us on Facebook"
              >
                <FacebookRoundedIcon fontSize="medium" />
              </SocialButton>
            </SocialLink>
          </Box>

          {/* Mobile Hamburger Button */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              ml: 'auto',
            }}
          >
            <IconButton
              aria-label="Open navigation menu"
              aria-expanded={open}
              onClick={toggleDrawer(true)}
              sx={{
                color: '#374151',
                transition: 'color 0.2s ease',
                '&:hover': {
                  color: '#ff4694',
                  backgroundColor: 'transparent',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Mobile Drawer */}
          <Drawer
            anchor="top"
            open={open}
            onClose={closeDrawer}
            PaperProps={{
              sx: {
                backgroundColor: '#ffffff',
                borderTop: '1px solid #e5e7eb',
              },
            }}
          >
            <Box
              sx={{
                p: 2,
                backgroundColor: '#ffffff',
              }}
            >
              {/* Close Button */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <IconButton
                  aria-label="Close navigation menu"
                  onClick={closeDrawer}
                  sx={{
                    color: '#374151',
                    '&:hover': {
                      color: '#ff4694',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  <CloseRoundedIcon />
                </IconButton>
              </Box>

              {/* Mobile Navigation */}
              <List disablePadding>
                {navItems.map((item) => (
                  <ListItemButton
                    key={item.label}
                    component={item.path ? Link : 'button'}
                    to={item.path}
                    onClick={closeDrawer}
                    sx={{
                      ...mobileMenuItemStyle,
                      width: '100%',
                      textAlign: 'left',
                    }}
                  >
                    {item.label}
                  </ListItemButton>
                ))}
              </List>

              {/* Mobile Social Media Icons */}
              <Box
                sx={{
                  display: 'flex',
                  gap: 1,
                  mt: 2,
                  justifyContent: 'center',
                }}
              >
                <SocialLink
                  href="https://www.instagram.com/37jiujitsu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialButton
                    size="large"
                    aria-label="Follow us on Instagram"
                  >
                    <InstagramIcon fontSize="large" />
                  </SocialButton>
                </SocialLink>

                <SocialLink
                  href="https://www.facebook.com/p/37-JiuJitsu-100076225269243/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialButton
                    size="large"
                    aria-label="Like us on Facebook"
                  >
                    <FacebookRoundedIcon fontSize="large" />
                  </SocialButton>
                </SocialLink>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}