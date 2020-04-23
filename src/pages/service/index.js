import React from 'react';
import { MainLayout, ServiceHeader, Statuses } from '../../components';
import ServiceDetail from './components/serviceDetail';

const Service = () => {
  return (
    <MainLayout padding='0'>
      <ServiceHeader />
      <ServiceDetail />
      <Statuses type='service' />
    </MainLayout>
  );
};

export default Service;
