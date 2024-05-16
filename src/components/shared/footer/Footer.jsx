import { Box, Container, Grid, Typography, Link, IconButton, Avatar } from '@mui/material';
import { LinkedIn, Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box bgcolor="#333" color="white" py={5}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar src={''} alt="Logo" sx={{ width: 56, height: 56, mr: 2 }} />
              <Typography variant="h6">Your Company</Typography>
            </Box>
            <Typography variant="body2">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Services</Typography>
            <Link href="#" color="inherit" display="block">Service 1</Link>
            <Link href="#" color="inherit" display="block">Service 2</Link>
            <Link href="#" color="inherit" display="block">Service 3</Link>
            <Link href="#" color="inherit" display="block">Service 4</Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Quick Links</Typography>
            <Link href="#" color="inherit" display="block">About Us</Link>
            <Link href="#" color="inherit" display="block">Contact Us</Link>
            <Link href="#" color="inherit" display="block">Privacy Policy</Link>
            <Link href="#" color="inherit" display="block">Terms of Service</Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>Follow Us</Typography>
            <Box>
              <IconButton component="a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" color="inherit">
                <LinkedIn />
              </IconButton>
              <IconButton component="a" href="https://facebook.com" target="_blank" rel="noopener noreferrer" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton component="a" href="https://twitter.com" target="_blank" rel="noopener noreferrer" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton component="a" href="https://instagram.com" target="_blank" rel="noopener noreferrer" color="inherit">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
