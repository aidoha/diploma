import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { Button, InputAdornment, IconButton } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  handleCustomerEmail,
  handleCustomerPassword,
  handleCustomerName,
  handlePasswordVisibility,
  handleCustomerPhone,
  handleSetAuthorized,
} from '../../../../redux';
import { CREATE_BUSINESS_OWNER } from '../../queries';
import { useStyles, Spinner } from '../../style';
import { CssTextField } from '../../../../globalStyle';

const SecondStep = () => {
  const classes = useStyles();
  const signUpState = useSelector((state) => state.signUp);
  const dispatch = useDispatch();
  const {
    name,
    email,
    password,
    phone,
    showPassword,
    companyId,
    touched,
  } = signUpState;
  const [register, { loading, error }] = useMutation(CREATE_BUSINESS_OWNER);

  const onSubmit = (event) => {
    event.preventDefault();
    const businessOwner = {
      businessOwnerName: name,
      businessCompanyID: companyId,
      businessOwnerEmail: email,
      businessOwnerPassword: password,
      businessOwnerPhoneNumber: phone,
      businessOwnerPhoneNumberPrefix: '+7',
    };
    register({ variables: businessOwner }).then((res) => {
      if (res.data) {
        dispatch(handleSetAuthorized());
        localStorage.setItem(
          'isLoggedIn',
          res.data.createBusinessOwner.token.accessToken
        );
      }
    });
  };

  if (error) {
    return <div />;
  }

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
        onBlur={(e) => dispatch(handleCustomerName(e.target.value))}
        onChange={(e) => dispatch(handleCustomerName(e.target.value))}
      />
      <CssTextField
        type='email'
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
        variant='outlined'
        margin='normal'
        fullWidth
        label='Номер телефона'
        name='phone'
        value={phone}
        error={touched.phone && phone === ''}
        onBlur={(e) => dispatch(handleCustomerPhone(e.target.value))}
        onChange={(e) => dispatch(handleCustomerPhone(e.target.value))}
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
        color='primary'
        size='large'
        className={classes.btn_auth}
        startIcon={loading && <Spinner width='20px' height='20px' />}
        disabled={name === '' || email === '' || password === ''}
      >
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default SecondStep;
