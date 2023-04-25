import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const ImageSection = () => {
  return (
    <Box sx={{ bgcolor: '#fff', color: '#000', py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to My Website
        </Typography>
        <img src="path/to/image.jpg" alt="My Image" style={{ width: '100%', height: 'auto' }} />
      </Container>
    </Box>
  );
};

export default ImageSection;