import { makeStyles, withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#7654ff'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#7654ff'
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#7654ff'
      },
      '&:hover fieldset': {
        borderColor: '#7654ff'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#7654ff'
      }
    }
  }
})(TextField);

export const useStyles = makeStyles({
  btn_auth: {
    backgroundColor: '#7654ff',
    color: 'white',
    '&:hover': {
      backgroundColor: '#7654ff'
    }
  }
});
