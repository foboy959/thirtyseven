import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
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

const SocialButton = styled(IconButton)(({ theme }) => ({
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

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
        <Toolbar variant="dense" disableGutters sx={{ py: 1 }}>
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <LogoImage src={logo} alt="Thirty Seven BJJ" />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 4 }}>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button
                variant="text"
                size="small"
                sx={{
                  ...fontFamilyStyle,
                  color: '#374151',
                  textTransform: 'uppercase',
                  fontSize: '0.95rem',
                  '&:hover': { color: '#ff4694', backgroundColor: 'transparent' }
                }}
              >
                About
              </Button>
            </Link>
            <Link to="/coaches" style={{ textDecoration: 'none' }}>
              <Button
                variant="text"
                size="small"
                sx={{
                  ...fontFamilyStyle,
                  color: '#374151',
                  textTransform: 'uppercase',
                  fontSize: '0.95rem',
                  '&:hover': { color: '#ff4694', backgroundColor: 'transparent' }
                }}
              >
                Meet the Coaches
              </Button>
            </Link>
            <Link to="/services" style={{ textDecoration: 'none' }}>

              <Button
                variant="text"
                size="small"
                sx={{
                  ...fontFamilyStyle,
                  color: '#374151',
                  textTransform: 'uppercase',
                  fontSize: '0.95rem',
                }}
              >
                Services
              </Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button
                variant="text"
                size="small"
                sx={{
                  ...fontFamilyStyle,
                  color: '#374151',
                  textTransform: 'uppercase',
                  fontSize: '0.95rem',
                }}
              >
                Contact
              </Button>
            </Link>
            <Link to="/beginners" style={{ textDecoration: 'none' }}>
              <Button
                variant="text"
                size="small"
                sx={{
                  ...fontFamilyStyle,
                  color: '#374151',
                  textTransform: 'uppercase',
                  fontSize: '0.95rem',
                }}
              >
                Beginners Course
              </Button>
            </Link>
              <Button
                variant="text"
                size="small"
              sx={{
                ...fontFamilyStyle,
                color: '#374151',
                textTransform: 'uppercase',
                fontSize: '0.95rem',
              }}
            >
              Testimonials
            </Button>
            <Button
                variant="text"
                size="small"
              sx={{
                ...fontFamilyStyle,
                color: '#374151',
                textTransform: 'uppercase',
                fontSize: '0.95rem',
              }}
            >
              FAQ
            </Button>
          </Box>

          {/* Social Media Icons - Desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <SocialLink href="https://www.instagram.com/37jiujitsu" target="_blank" rel="noopener">
              <SocialButton size="medium" aria-label="Follow us on Instagram">
                <InstagramIcon fontSize="medium" />
              </SocialButton>
            </SocialLink>
            <SocialLink href="https://www.facebook.com/p/37-JiuJitsu-100076225269243/" target="_blank" rel="noopener">
              <SocialButton size="medium" aria-label="Like us on Facebook">
                <FacebookRoundedIcon fontSize="medium" />
              </SocialButton>
            </SocialLink>
          </Box>

          {/* Mobile Menu Button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: '#374151' }} />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              slotProps={{
                paper: {
                  sx: {
                    backgroundColor: '#ffffff',
                    borderTop: '1px solid #e5e7eb',
                  },
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: '#ffffff' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon sx={{ color: '#374151' }} />
                  </IconButton>
                </Box>

                <MenuItem sx={{ ...fontFamilyStyle, '&:hover': { backgroundColor: '#f3f4f6' }, textTransform: 'uppercase', fontSize: '0.95rem' }}>About</MenuItem>
                <MenuItem sx={{ ...fontFamilyStyle, '&:hover': { backgroundColor: '#f3f4f6' }, textTransform: 'uppercase', fontSize: '0.95rem' }}>Services</MenuItem>
                <MenuItem sx={{ ...fontFamilyStyle, '&:hover': { backgroundColor: '#f3f4f6' }, textTransform: 'uppercase', fontSize: '0.95rem' }}>Contact</MenuItem>
                <MenuItem sx={{ ...fontFamilyStyle, '&:hover': { backgroundColor: '#f3f4f6' }, textTransform: 'uppercase', fontSize: '0.95rem' }}>Beginners Course</MenuItem>
                <MenuItem sx={{ ...fontFamilyStyle, '&:hover': { backgroundColor: '#f3f4f6' }, textTransform: 'uppercase', fontSize: '0.95rem' }}>Testimonials</MenuItem>

                {/* Social Media Icons - Mobile */}
                <Box sx={{ display: 'flex', gap: 1, mt: 2, justifyContent: 'center' }}>
                  <SocialLink href="https://www.instagram.com/37jiujitsu" target="_blank" rel="noopener">
                    <SocialButton size="large" aria-label="Follow us on Instagram">
                      <InstagramIcon fontSize="large" />
                    </SocialButton>
                  </SocialLink>
                  <SocialLink href="https://www.facebook.com/p/37-JiuJitsu-100076225269243/" target="_blank" rel="noopener">
                    <SocialButton size="large" aria-label="Like us on Facebook">
                      <FacebookRoundedIcon fontSize="large" />
                    </SocialButton>
                  </SocialLink>
                </Box>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}