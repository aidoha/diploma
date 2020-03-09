import { withStyles } from '@material-ui/core/styles';
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
      '&.Mui-focused fieldset': {
        borderColor: '#7654ff'
      }
    },
    '& .MuiInputBase-input[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none'
    }
  }
})(TextField);
