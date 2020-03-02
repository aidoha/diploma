import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Topbar } from '../../components';
import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  MenuItem
} from '@material-ui/core';
import { BUSINESS_CATEGORIES } from '../../constants';
import { handleCompanyName, handleBusinessCategory } from '../../redux';

import './index.css';

const SignUp = () => {
  const signUpState = useSelector(state => state.signUp);
  const dispatch = useDispatch();
  const { companyName, businessCategory } = signUpState;
  return (
    <>
      <Topbar />
      <Container maxWidth='xs' className='auth__container'>
        <Typography component='h1' variant='h5'>
          Регистрация
        </Typography>
        <Grid container alignItems='center'>
          <form noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              fullWidth
              id='company'
              label='Название компании'
              name='company'
              value={companyName}
              onChange={e => dispatch(handleCompanyName(e.target.value))}
            />
            <TextField
              fullWidth
              select
              label='Категория бизнеса'
              variant='outlined'
              margin='normal'
              id='business-category'
              name='business-category'
              value={businessCategory}
              onChange={e => dispatch(handleBusinessCategory(e.target.value))}
            >
              {BUSINESS_CATEGORIES.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              size='large'
            >
              Продолжить
            </Button>
          </form>
        </Grid>
      </Container>
    </>
  );
};

export default SignUp;
