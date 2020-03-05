import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useSelector, useDispatch } from 'react-redux';
import { Button, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  handleCustomerEmail,
  handleCustomerPassword,
  handleCustomerName,
  handlePasswordVisibility
} from '../../../../redux';
import { useStyles, CssTextField, Spinner } from '../../style';
import { handleSetAuthorized } from '../../../../redux/auth/actions';
import { useHistory } from 'react-router-dom';

const SecondStep = () => {
  const classes = useStyles();
  const { push } = useHistory();
  const signUpState = useSelector(state => state.signUp);
  const dispatch = useDispatch();
  const {
    name,
    email,
    password,
    showPassword,
    touched,
    isLoggedIn
  } = signUpState;
  // const [register, { loading, error }] = useMutation();
  console.log('signUpState', signUpState);

  const onSubmit = event => {
    event.preventDefault();
    // const id = 1;
    // register({ variables: { id, type: name } }).then(res =>
    //   console.log('res', res)
    // );
    dispatch(handleSetAuthorized());
    localStorage.setItem('isLoggedIn', isLoggedIn);
  };

  return (
    <form noValidate onSubmit={onSubmit}>
      <CssTextField
        variant='outlined'
        margin='normal'
        fullWidth
        label='Имя'
        name='name'
        value={name}
        error={touched.name && name === ''}
        onBlur={e => dispatch(handleCustomerName(e.target.value))}
        onChange={e => dispatch(handleCustomerName(e.target.value))}
      />
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
        color='primary'
        size='large'
        className={classes.btn_auth}
        startIcon={false && <Spinner width='20px' height='20px' />}
        disabled={name === '' || email === '' || password === ''}
      >
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default SecondStep;
