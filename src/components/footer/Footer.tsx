import { Box, Container, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#fff', color: '#000', py: 4, width: '100%' }}>
      <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'left', width: '100%' }}>
        <Typography variant="body1">
          <p>For cyclists.</p>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 'auto' }}>
          <a href="https://www.facebook.com/"><FacebookIcon sx={{ color: 'black', mx: 1 }} /></a>
          <a href="https://www.instagram.com/"><InstagramIcon sx={{ color: 'black', mx: 1 }} /></a>
          <a href="https://github.com/"><GitHubIcon sx={{ color: 'black', mx: 1 }} /></a>
          <a href="mailto:"><EmailIcon sx={{ color: 'black', mx: 1 }} /></a>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;