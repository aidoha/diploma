import React from 'react';
import { useSelector } from 'react-redux';
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

import './index.css';

const SignUp = () => {
  useSelector(state => console.log('stsate', state));
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
            />
            <TextField
              fullWidth
              select
              label='Категория бизнеса'
              variant='outlined'
              margin='normal'
              id='business-category'
              name='business-category'
            >
              {BUSINESS_CATEGORIES.map(option => (
                <MenuItem key={option.value}>{option.label}</MenuItem>
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
