import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core/styles';

export const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#7654ff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#7654ff',
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#7654ff',
      },
    },
    '& .MuiInputBase-input[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
    },
  },
})(TextField);

export const theme = createMuiTheme({
  MuiPickersDay: {
    root: {
      '&$selected': {
        backgroundColor: 'black',
        '&:hover': {
          backgroundColor: 'black',
        },
      },
    },
  },
});

// export const DatePicker = withStyles({
//   root: {
//     '& label.Mui-focused': {
//       color: '#7654ff',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: '#7654ff',
//     },
//     '& .MuiButtonBase-root .MuiPickersDay-daySelected': {
//       backgroundColor: '#7654ff',
//     },
//     '& .MuiOutlinedInput-root': {
//       '& :hover': {
//         '& fieldset': {
//           borderColor: '#7654ff',
//         },
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#7654ff',
//       },
//     },
//   },
// })(KeyboardDatePicker);
