import React from 'react';

import { Typography, IconButton, InputAdornment } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { CssTextField } from '../../../globalStyle';
import { useStyles } from '../style';
import { handleServiceName, handleServiceAddress } from '../../../redux';

const IntroFrom = ({ introState, dispatch }) => {
  const classes = useStyles();
  const { service, touched } = introState;
  const { name, address } = service;
  const onChangeServiceName = value => {
    dispatch(handleServiceName(value));
  };
  const onChangeServiceAddress = value => {
    dispatch(handleServiceAddress(value));
  };

  console.log('service', service);

  return (
    <form noValidate className={classes.introForm}>
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
                <IconButton>
                  <Clear onClick={() => onChangeServiceName('')} />
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
  );
};

export default IntroFrom;
