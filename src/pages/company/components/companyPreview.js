import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useStyles, ImageBackground } from '../style';
import { routes } from '../../../constants';

const CompanyPreview = ({
  companyData,
  companyLoading,
  companyServicesData,
  businessCompanyID,
}) => {
  const classes = useStyles();
  const { push } = useHistory();
  const businessCompanyService =
    companyServicesData?.getBusinessCompanyServices?.businessCompanyService;

  const companyName = companyData?.getBusinessCompany?.businessCompanyName;
  const servicesCount = !businessCompanyService
    ? 0
    : businessCompanyService.length;
  const images = companyData?.getBusinessCompany?.businessCompanyImages;

  return (
    <Grid
      container
      item
      lg={6}
      md={6}
      xs={12}
      justify='space-between'
      className={classes.company_preview_container}
    >
      <Grid container item lg={8} md={8} spacing={2}>
        <Grid item container lg={4} md={4}>
          {companyLoading && (
            <Skeleton
              variant='rect'
              width={110}
              height={110}
              animation='wave'
            />
          )}
          {!companyLoading && (
            <ImageBackground
              src={images?.[images?.length - 1]?.imagePath}
              width='100%'
              height='100px'
            />
          )}
        </Grid>
        <Grid item container lg={4} md={4} alignItems='center'>
          <Typography
            variant='h3'
            onClick={() => push(`${routes.companyView}/${businessCompanyID}`)}
          >
            <Box fontSize={20} fontWeight={600}>
              {companyName}
            </Box>
          </Typography>
          <Grid container alignItems='center' style={{ marginTop: '20px' }}>
            <Typography variant='h6'>
              <Box fontSize={14} fontWeight={200}>
                Услуги
              </Box>
            </Typography>
            <Grid
              container
              justify='center'
              alignItems='center'
              className={classes.company_preview_counts_item}
            >
              {servicesCount}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CompanyPreview;
