import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    margin: '50px 0'
  },
  heading: {
    fontSize: '32px',
    fontWeight: '700',
    textAlign: 'justify'
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
  intro__form: {
    margin: '30px 0'
  },
  form__group: {
    margin: '20px 0'
  },
  schedule__row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0'
  },
  addIcon: {
    color: '#8282ff',
    margin: '4px',
    width: '30px',
    height: '30px',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  removeIcon: {
    color: '#f5f5f5',
    margin: '4px',
    width: '30px',
    height: '30px',
    '&:hover': {
      cursor: 'pointer'
    }
  }
});
