import { createTheme } from '@material-ui/core/styles';
import { COLOR } from 'ds-constants';

export default createTheme({
  palette: {
    primary: {
      main: COLOR.sodium,
    },
    secondary: {
      main: COLOR.textDanger,
    },
    textSecondary: {
      main: COLOR.textSecondary,
    },
  },
});
