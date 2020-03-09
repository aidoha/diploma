import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    margin: '50px 100px',
    width: '60%'
  },
  heading: {
    fontSize: '32px',
    fontWeight: '700'
  },
  subheading: {
    marginTop: '30px'
  },
  btn__next: {
    backgroundColor: '#7654ff',
    color: 'white',
    '&:hover': {
      backgroundColor: '#7654ff'
    }
  },
  introForm: {
    margin: '30px 0'
  },
  form__group: {
    margin: '20px 0'
  },
  schedule__container: {
    width: '40%',
  },
  schedule__row: {
    margin: '40px 0'
  }
});
