import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { useStyles } from '../../pages/company/style';

const CompanyHeader = () => {
  const classes = useStyles();
  return (
    <AppBar position='sticky' elevation={1} className={classes.company_toolbar}>
      <Toolbar>
        <Typography variant='h4'>
          <Box fontWeight={600} fontSize={18}>
            Компания и услуги
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CompanyHeader;
