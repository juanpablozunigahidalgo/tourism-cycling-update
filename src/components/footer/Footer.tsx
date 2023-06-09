import { Box, Container, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#fff', color: '#000', py: 4, width: '100%', pt: '4rem' }}>
      <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <Typography variant="body1" sx={{ color: '#142952' }}>
          For cyclists.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <a href="https://www.facebook.com/tourismcycling/"><FacebookIcon sx={{ color: '#142952', mx: 1 }} /></a>
          <a href="https://www.instagram.com/tourism_cycling/"><InstagramIcon sx={{ color: '#142952', mx: 1 }} /></a>
          <a href="https://github.com/juanpablozunigahidalgo/toursimcycling.github.io"><GitHubIcon sx={{ color: '#142952', mx: 1 }} /></a>
          <a href="mailto:juanpablo.zunigah@gmail.com"><EmailIcon sx={{ color: '#142952', mx: 1 }} /></a>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;