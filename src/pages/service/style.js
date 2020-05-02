import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  btn_save_service: {
    backgroundColor: '#8282ff',
    borderColor: '#8282ff',
    textShadow: '0 -1px 0 rgba(0,0,0,.12)',
    color: 'white',
    '&:hover': {
      backgroundColor: '#7654ff',
    },
  },
  expansion_panel: {
    border: '1px solid #cbcbeb',
    boxShadow: 'none',
    MozBoxShadow: 'none',
    WebkitBoxShadow: 'none',
  },
  btn_save_time_oulined: {
    border: '1px solid #8282ff',
    textShadow: '0 -1px 0 rgba(0,0,0,.12)',
    color: '#8282ff',
  },
});
