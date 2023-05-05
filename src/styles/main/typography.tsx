import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#000',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        // light: will be calculated from palette.primary.main,
        main: '#000',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
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
