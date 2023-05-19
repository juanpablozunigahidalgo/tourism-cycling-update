import { Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface Props {
  boxData: { text: string; link: string }[];
}

const BoxGrid2: React.FC<Props> = ({ boxData }) => {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: '2vh' }}>
      <Grid container spacing={4}>
        {boxData.map((box, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                transform: 'scale(0.90)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#2951a3',
                borderRadius: 4,
                boxShadow: 'none',
                overflow: 'hidden',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  bgcolor: '#3365cc',
                  boxShadow: 'none',
                  transform: 'scale(1.02)',
                },
                position: 'relative', // to make the height calculation work correctly
                paddingBottom: '100%', // set to 100% to make the height equal to the width
              }}
              onClick={() => navigate(box.link)}
              style={{ cursor: 'pointer' }}
            >
              <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, p: 2 }}>
                <div style={{ color: 'white', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontFamily: 'Consolas, monospace' }}>
                  {box.text}
                </div>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BoxGrid2;