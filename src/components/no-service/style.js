import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  no_order: {
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0px 0px 30px #eeecf3',
      transition: 'box-shadow 0.3s ease-in-out;',
    },
  },
});
