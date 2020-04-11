import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  menu: {
    backgroundColor: '#8282ff',
    height: '100%',
    position: 'fixed',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  listItem: {
    padding: '20px 5px',
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    color: 'white',
  },
  divider: {
    backgroundColor: 'white',
    width: '60%',
  },
});
