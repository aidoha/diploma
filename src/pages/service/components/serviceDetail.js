import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box } from '@material-ui/core';
import ServiceForm from './serviceForm';

const ServiceDetail = () => {
  const { slug } = useParams();
  return (
    <Grid container direction='column'>
      <Box margin='25px 25px 0 25px'>
        <Box fontWeight={600} fontSize={24}>
          {slug === 'add' && 'Создание новой услуги'}
          {slug === 'edit' && 'Редактирование услуги'}
        </Box>
        <Box fontSize='16px' color='#999' marginTop='15px'>
          {slug === 'add' &&
            'Создайте услугу и настройте расписание, чтобы ваши клиенты могли записаться онлайн'}
        </Box>
      </Box>
      <Box margin='25px'>
        <Grid item lg={5} md={5} xs={12}>
          <ServiceForm />
        </Grid>
      </Box>
    </Grid>
  );
};

export default ServiceDetail;
