import { makeStyles, withStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import { TextField, CircularProgress } from '@material-ui/core';

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#7654ff'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#7654ff'
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#7654ff'
      }
    }
  }
})(TextField);

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
