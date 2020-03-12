import { makeStyles, styled } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

export const Spinner = styled(CircularProgress)(props => ({
  color: 'white',
  height: `${props.height} !important`,
  width: `${props.width} !important`
}));

export const useStyles = makeStyles({
  btn_auth: {
    backgroundColor: '#7654ff',
    color: 'white',
    '&:hover': {
      backgroundColor: '#7654ff'
    }
  },
  auth__container: {
    marginTop: '50px'
  }
});
