import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    margin: '100px 0'
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  subheading: {
    margin: '20px 0',
    textAlign: 'center'
  },
  btn_start: {
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: '20px',
    backgroundColor: '#7654ff',
    width: '70%',
    color: 'white',
    '&:hover': {
      backgroundColor: '#7654ff'
    }
  }
});
