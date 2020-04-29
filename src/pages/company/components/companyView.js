import React, { useEffect, useState, memo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Box } from '@material-ui/core';
import { MainLayout, Loader, InputField } from '../../../components';
import withCurrentUser from '../../../hoc/currentUser';
import withApollo from '../../../hoc/withApollo';
import { GET_BUSINESS_COMPANY } from '../queries';

const CompanyView = memo((props) => {
  const businessCompanyID =
    props &&
    props.currentUser &&
    props.currentUser[0] &&
    props.currentUser[0].businessCompanyID;
  const [companyName, setCompanyName] = useState('');

  const { data: companyData, loading: companyLoading } = useQuery(
    GET_BUSINESS_COMPANY,
    {
      variables: { businessCompanyID },
    }
  );

  useEffect(() => {
    setCompanyName(companyData?.getBusinessCompany?.businessCompanyName);
  }, [companyData]);

  const onChangeCompanyName = (name, value) => {
    setCompanyName(value);
  };

  return (
    <MainLayout padding='25px' section='company'>
      {companyLoading ? (
        <Loader />
      ) : (
        <>
          <Grid container direction='column'>
            <Box fontWeight={600} fontSize='24px'>
              Информация о компании
            </Box>
            <Box fontSize='16px' color='#999' marginTop='15px'>
              Заполненная информация отображается на странице с онлайн-записью.
            </Box>
            <Grid item lg={6} md={6} xs={12}>
              <InputField
                label='Название компании*'
                name='company-name'
                value={companyName}
                onChange={onChangeCompanyName}
              />
            </Grid>
          </Grid>
        </>
      )}
    </MainLayout>
  );
});

export default withApollo(withCurrentUser(CompanyView));
