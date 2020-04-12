import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from '../../pages/company/style';

const CompanyHeader = () => {
  const classes = useStyles();
  return (
    <AppBar position='sticky' elevation={1} className={classes.company_toolbar}>
      <Toolbar>
        <Typography>Компания и услуги</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CompanyHeader;
