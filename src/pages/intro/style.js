import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '50px'
  },
  heading: {
    fontSize: '32px',
    fontWeight: '700'
  },
  btn__next: {
    marginRight: theme.spacing(1),
    backgroundColor: '#7654ff',
    color: 'white',
    '&:hover': {
      backgroundColor: '#7654ff'
    }
  }
}));
