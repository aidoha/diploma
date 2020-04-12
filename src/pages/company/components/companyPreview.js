import React from 'react';
import { Grid, Typography, Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { useStyles } from '../style';

const CompanyPreview = () => {
  const classes = useStyles();
  const count = 5;
  return (
    <Grid
      container
      lg={6}
      md={6}
      xs={12}
      spacing={2}
      className={classes.company_preview_container}
    >
      <Grid item>
        <Skeleton variant='rect' width={110} height={110} animation='wave' />
      </Grid>
      <Grid item>
        <Typography variant='h3'>
          <Box fontSize={20} fontWeight={600}>
            company name
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
            {count}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CompanyPreview;
