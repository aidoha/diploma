import React from 'react';
import { MainLayout, ServiceHeader, Statuses } from '../../components';
import ServiceDetail from './components/serviceDetail';
import withCurrentUser from '../../hoc/currentUser';
import withApollo from '../../hoc/withApollo';

const Service = () => {
  return (
    <MainLayout padding='0'>
      <ServiceHeader />
      <ServiceDetail />
      <Statuses />
    </MainLayout>
  );
};

export default withApollo(withCurrentUser(Service));
