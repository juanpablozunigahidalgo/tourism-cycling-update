import { Grid, Box, Typography, Link } from '@mui/material';

interface Props {
  boxData: { text: string; link: string }[];
}

const BoxGrid: React.FC<Props> = ({ boxData }) => {
  return (
    <div style={{ marginTop: '10vh' }}>
      <Grid container spacing={4}>
        {boxData.map((box, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                transform: 'scale(0.90)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'grey.200',
                borderRadius: 4,
                boxShadow: 'none',
                overflow: 'hidden',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  bgcolor: 'grey.300',
                  boxShadow: 'none',
                  transform: 'scale(1.02)',
                },
                position: 'relative', // to make the height calculation work correctly
                paddingBottom: '100%', // set to 100% to make the height equal to the width
              }}
            >
              <Link href={box.link} underline="none">
                <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, p: 2 }}>
                  <Typography variant="body1" gutterBottom style={{ color: 'black', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    {box.text}
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BoxGrid;