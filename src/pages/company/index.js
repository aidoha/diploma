import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { MainLayout } from '../../components';
import CompanyPreview from './components/companyPreview';
import CompanyServices from './components/companyServices';
import CompanyView from './components/companyView';
import { GET_BUSINESS_COMPANY, GET_BUSINESS_COMPANY_SERVICES } from './queries';
import withCurrentUser from '../../hoc/currentUser';
import withApollo from '../../hoc/withApollo';

const Company = (props) => {
  const businessCompanyID =
    props &&
    props.currentUser &&
    props.currentUser[0] &&
    props.currentUser[0].businessCompanyID;

  const { data: companyData, loading: companyLoading } = useQuery(
    GET_BUSINESS_COMPANY,
    {
      variables: { businessCompanyID },
    }
  );
  const {
    data: companyServicesData,
    loading: companyServicesLoading,
  } = useQuery(GET_BUSINESS_COMPANY_SERVICES, {
    variables: { businessCompanyID },
  });

  return (
    <MainLayout padding='25px' section='company'>
      <CompanyPreview
        companyData={companyData}
        companyLoading={companyLoading}
        companyServicesData={companyServicesData}
        businessCompanyID={businessCompanyID}
      />
      <CompanyServices
        companyServicesData={companyServicesData}
        companyServicesLoading={companyServicesLoading}
      />
    </MainLayout>
  );
};

export default withApollo(withCurrentUser(Company));
