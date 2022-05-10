import {createMuiTheme} from '@material-ui/core/styles';
import { purple } from '@mui/material/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[700]
        }
    }
});

export default theme