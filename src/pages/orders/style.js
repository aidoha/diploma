import { makeStyles, styled } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

export const Spinner = styled(CircularProgress)((props) => ({
  color: 'white',
  height: `${props.height} !important`,
  width: `${props.width} !important`,
}));

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

export const containerStyles = (theme) => ({
  container: {
    width: theme.spacing(68),
    padding: 0,
    paddingBottom: theme.spacing(2),
  },
  content: {
    padding: theme.spacing(2),
    paddingTop: 0,
  },
  header: {
    overflow: 'hidden',
    paddingTop: theme.spacing(0.5),
  },
  closeButton: {
    float: 'right',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 2),
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  picker: {
    marginRight: theme.spacing(2),
    '&:last-child': {
      marginRight: 0,
    },
    width: '50%',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(1, 0),
  },
  icon: {
    margin: theme.spacing(2, 0),
    marginRight: theme.spacing(2),
  },
  textField: {
    width: '100%',
  },
});
