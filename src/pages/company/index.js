import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { MainLayout } from '../../components';
import CompanyPreview from './components/companyPreview';
import CompanyServices from './components/companyServices';
import { GET_BUSINESS_COMPANY, GET_BUSINESS_COMPANY_SERVICES } from './queries';

const Company = () => {
  const { data: companyData, loading: companyLoading } = useQuery(
    GET_BUSINESS_COMPANY,
    {
      variables: { businessCompanyID: 6 },
    }
  );
  const {
    data: companyServicesData,
    loading: companyServicesLoading,
  } = useQuery(GET_BUSINESS_COMPANY_SERVICES, {
    variables: { businessCompanyID: 6 },
  });

  return (
    <MainLayout padding='25px' section='company'>
      <CompanyPreview
        companyData={companyData}
        companyLoading={companyLoading}
        companyServicesData={companyServicesData}
      />
      <CompanyServices
        companyServicesData={companyServicesData}
        companyServicesLoading={companyServicesLoading}
      />
    </MainLayout>
  );
};

export default Company;
