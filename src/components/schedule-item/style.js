import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  service_item_actions: {
    margin: '0 10px',
    cursor: 'pointer',
    '&:hover': {
      color: '#8282ff',
    },
  },
  textfield: {
    '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none',
    },
  },
  btn_save_time: {
    backgroundColor: '#8282ff',
    borderColor: '#8282ff',
    textShadow: '0 -1px 0 rgba(0,0,0,.12)',
    color: 'white',
    '&:hover': {
      backgroundColor: '#7654ff',
    },
  },
});
