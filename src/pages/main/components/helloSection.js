import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from '@material-ui/core';

const HelloSection = ({ classes }) => {
  const { push } = useHistory();
  return (
    <Grid item lg={4} md={4} container justify='center' alignItems='center'>
      <Typography component='h3' variant='h3' className={classes.heading}>
        Онлайн-запись и работа с клиентами
      </Typography>
      <Typography component='h5' variant='h5' className={classes.subheading}>
        CRM-система для сферы услуг. Настройте запись клиентов, продажу билетов,
        аренду площадок и оборудования.
      </Typography>
      <Button
        type='submit'
        fullWidth
        variant='contained'
        size='large'
        className={classes.btn_start}
        onClick={() => push('/signup')}
      >
        Настроить за 15 минут
      </Button>
    </Grid>
  );
};

export default HelloSection;
