import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  service_item: {
    background: '#fff',
    padding: '25px',
    margin: '30px',
    borderRadius: '12px',
    border: '1px solid #eeecf3',
    '&:hover': {
      boxShadow: '0px 0px 30px #eeecf3',
      transition: 'box-shadow 0.3s ease-in-out;',
    },
  },
  service_item_name: {
    cursor: 'pointer',
    '&:hover': {
      color: '#8282ff',
    },
  },
});
