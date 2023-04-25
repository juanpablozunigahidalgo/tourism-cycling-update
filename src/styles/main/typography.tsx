import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      background: {
        default: '#fff',
      },
      text: {
        primary: '#000',
      },
    },
    typography: {
      fontFamily: 'Consolas, monospace',
    },
  });
  
  export default theme;