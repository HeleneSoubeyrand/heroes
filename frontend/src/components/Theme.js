import { createTheme } from '@mui/material/styles';

const Theme = createTheme({

    typography: {
      allVariants: {
        color: "#FFFFFF",
        fontFamily: [
        'Montserrat',
        'sans-serif',
        'Keania One',
        'cursive',
        ].join(','),
      },
    },
    palette: {
      primary: {
        main: '#ffffff',
      },
      red: '#c62828',
      blue: '#004e92',
      green: '#43a047',
    },
});

export default Theme 