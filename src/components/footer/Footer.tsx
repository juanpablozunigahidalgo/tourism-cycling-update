import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', py: 4 }}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          &copy; 2023 My Website. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;