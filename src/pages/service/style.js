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
});
