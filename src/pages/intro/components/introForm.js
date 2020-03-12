import React from 'react';

import {
  Typography,
  IconButton,
  InputAdornment,
  useMediaQuery
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { CssTextField } from '../../../globalStyle';
import { useStyles } from '../style';
import { handleServiceName, handleServiceAddress } from '../../../redux';

const IntroForm = ({ introFormState, dispatch }) => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');
  const { service, touched } = introFormState;
  const { name, address } = service;
  const onChangeServiceName = value => {
    dispatch(handleServiceName(value));
  };
  const onChangeServiceAddress = value => {
    dispatch(handleServiceAddress(value));
  };

  return (
    <>
      {matches && <div>dajsndjl</div>}
      <Typography variant='h1' className={classes.heading}>
        Привет! Мы поможем настроить онлайн-запись для твоего бизнеса за
        несколько минут.
      </Typography>
      <Typography paragraph className={classes.subheading}>
        Добавьте первую услугу, на которую будут записываться ваши клиенты
      </Typography>
      <form noValidate className={classes.intro__form}>
        <div className={classes.form__group}>
          <Typography paragraph>Название услуги*</Typography>
          <CssTextField
            variant='outlined'
            fullWidth
            required
            name='serviceName'
            value={name}
            error={touched.name && name === ''}
            onBlur={e => onChangeServiceName(e.target.value)}
            onChange={e => onChangeServiceName(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={() => onChangeServiceName('')}>
                    <Clear />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
        <div className={classes.form__group}>
          <Typography paragraph>Адрес услуги</Typography>
          <CssTextField
            variant='outlined'
            fullWidth
            name='serviceAddress'
            value={address}
            onBlur={e => onChangeServiceAddress(e.target.value)}
            onChange={e => onChangeServiceAddress(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default IntroForm;
