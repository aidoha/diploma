import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { Button, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  handleCustomerEmail,
  handleCustomerPassword,
  handlePasswordVisibility,
  handleValidateEmail,
  handleAuthError,
  handleSetAuthorized,
} from '../../../../redux/auth/actions';
import { GENERATE_TOKEN } from '../../queries';
import { useStyles, Spinner } from '../../style';
import { CssTextField } from '../../../../globalStyle';
import { validateEmail } from '../../../../utils';
// import { errors } from '../../../../constants';

const AuthForm = () => {
  const classes = useStyles();
  // const [errorLabel, setErrorLabel] = useState(null);
  const signInState = useSelector((state) => state.signIn);
  const { email, password, showPassword, touched, validated } = signInState;
  const dispatch = useDispatch();
  const [auhtorize, { loading }] = useMutation(GENERATE_TOKEN);

  const onSubmit = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      dispatch(handleValidateEmail(true));
      auhtorize({ variables: { email, password } })
        .then((res) => {
          if (res.data) {
            dispatch(handleSetAuthorized(true));
            localStorage.setItem(
              'isLoggedIn',
              res.data.generateToken.accessToken
            );
          }
        })
        .catch((err) => {
          dispatch(handleAuthError(true));
          // if (err === errors.auth.no_such_email.text) {
          //   setErrorLabel(errors.auth.no_such_email.label);
          // }
        });
    } else {
      dispatch(handleValidateEmail(false));
    }
  };

  return (
    <form noValidate onSubmit={onSubmit}>
      <CssTextField
        variant='outlined'
        margin='normal'
        fullWidth
        label='E-mail'
        name='email'
        value={email}
        error={touched.email && email === ''}
        onBlur={(e) => dispatch(handleCustomerEmail(e.target.value))}
        onChange={(e) => dispatch(handleCustomerEmail(e.target.value))}
      />
      <CssTextField
        type={showPassword ? 'text' : 'password'}
        variant='outlined'
        margin='normal'
        fullWidth
        label='Пароль'
        name='password'
        value={password}
        error={touched.password && password === ''}
        onBlur={(e) => dispatch(handleCustomerPassword(e.target.value))}
        onChange={(e) => dispatch(handleCustomerPassword(e.target.value))}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                onClick={() =>
                  dispatch(handlePasswordVisibility(!showPassword))
                }
              >
                {!showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        type='submit'
        fullWidth
        variant='contained'
        size='large'
        className={classes.btn_auth}
        startIcon={loading && <Spinner width='20px' height='20px' />}
        disabled={email === '' || password === ''}
      >
        Войти
      </Button>
      {/* <div>{validated.email === false && 'ERROR EMAIL'}</div> */}
      {/* <div>{errorLabel}</div> */}
    </form>
  );
};

export default AuthForm;
