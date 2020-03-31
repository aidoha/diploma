import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container_hello: {
    padding: '100px 0'
  },
  container_category: {
    backgroundColor: '#f3f6fa',
    padding: '50px'
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
  },
  category_box: {
    backgroundColor: '#fff',
    borderRadius: '4px',
    padding: '20px',
    margin: '10px',
    height: '200px',
    boxShadow: '0 30px 50px 0 rgba(6,6,6, .15)',
    cursor: 'pointer'
  },
  category_name: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  subcategory_name: {
    fontSize: '14px',
    color: 'rgba(54,54,54,.4)',
    marginTop: '10px'
  }
});
