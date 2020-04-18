import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import ServiceForm from './serviceForm';

const ServiceDetail = () => {
  return (
    <Grid container>
      <Box margin='25px'>
        <Grid item lg={12} md={12} xs={12}>
          <Typography variant='h3'>
            <Box fontWeight={600} fontSize={24}>
              Создание новой услуги
            </Box>
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <Typography variant='h6'>
            <Box fontSize='16px' color='#999' marginTop='15px'>
              Создайте услугу и настройте расписание, чтобы ваши клиенты могли
              записаться онлайн
            </Box>
          </Typography>
        </Grid>
        <Grid item lg={12} md={12} xs={12}>
          <ServiceForm />
        </Grid>
      </Box>
    </Grid>
  );
};

export default ServiceDetail;
