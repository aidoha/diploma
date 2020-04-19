import React from 'react';
import { MainLayout, ServiceHeader, ServiceStatuses } from '../../components';
import ServiceDetail from './components/serviceDetail';

const Service = () => {
  return (
    <MainLayout padding='0'>
      <ServiceHeader />
      <ServiceDetail />
      <ServiceStatuses />
    </MainLayout>
  );
};

export default Service;
