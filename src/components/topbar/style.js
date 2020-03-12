import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  main_bar: {
    background: '#8282ff',
    border: 0
  },
  btn_auth: {
    textTransform: 'none'
  },
  topbar: {
    background: '#fff',
    [theme.breakpoints.only('xs')]: {
      padding: '20px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '0 20px'
    }
  }
}));
