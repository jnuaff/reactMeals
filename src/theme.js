import { createTheme } from '@mui/material/styles';
import { brown, deepOrange } from '@mui/material/colors';

const customTheme = createTheme({
  palette: {
    primary: {
      main: deepOrange[200],
    },
    secondary: {
      main: brown[400],
    },
  },
});

export default customTheme