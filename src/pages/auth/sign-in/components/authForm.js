import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  handleCustomerEmail,
  handleCustomerPassword,
  handlePasswordVisibility
} from '../../../../redux';
import { useStyles, CssTextField } from '../../style';

const AuthForm = () => {
  const classes = useStyles();
  const signInState = useSelector(state => state.signIn);
  const { email, password, showPassword, touched } = signInState;
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();
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
        onBlur={e => dispatch(handleCustomerEmail(e.target.value))}
        onChange={e => dispatch(handleCustomerEmail(e.target.value))}
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
        onBlur={e => dispatch(handleCustomerPassword(e.target.value))}
        onChange={e => dispatch(handleCustomerPassword(e.target.value))}
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
          )
        }}
      />
      <Button
        type='submit'
        fullWidth
        variant='contained'
        size='large'
        className={classes.btn_auth}
        disabled={email === '' || password === ''}
      >
        Войти
      </Button>
    </form>
  );
};

export default AuthForm;
