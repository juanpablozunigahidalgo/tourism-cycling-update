import { Grid, Box, Typography, Link } from '@mui/material';

interface Props {
  boxData: { text: string; link: string }[];
}

const BoxGrid: React.FC<Props> = ({ boxData }) => {
  return (
    <Grid container spacing={2}>
      {boxData.map((box, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Box
            sx={{
              bgcolor: 'grey.200',
              borderRadius: 4,
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              overflow: 'hidden',
              '&:hover': {
                boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.25)',
              },
            }}
          >
            <Link href={box.link} underline="none">
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {box.text}
                </Typography>
              </Box>
            </Link>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default BoxGrid;