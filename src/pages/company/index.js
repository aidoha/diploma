import React from 'react';
import { MainLayout } from '../../components';
import CompanyPreview from './components/companyPreview';
import CompanyServices from './components/companyServices';

const Company = () => {
  return (
    <MainLayout padding='25px' section='company'>
      <CompanyPreview />
      <CompanyServices />
    </MainLayout>
  );
};

export default Company;
