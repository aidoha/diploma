import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  ThemeProvider,
} from '@material-ui/core';
import { ArrowBack, AddCircle } from '@material-ui/icons';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, theme } from '../../globalStyle';
import { useStyles } from './style';

const OrdersHeader = ({ hasBackArrow }) => {
  const classes = useStyles();
  const { goBack } = useHistory();

  return (
    <AppBar position='sticky' elevation={1} className={classes.company_toolbar}>
      <Toolbar>
        <Grid container justify='space-between' alignItems='center'>
          <Grid item lg={4} md={4}>
            <Box display='flex' alignItems='center'>
              {hasBackArrow && (
                <ArrowBack
                  className={classes.service_arrow_back}
                  onClick={() => goBack()}
                />
              )}
              <Typography variant='h4'>
                <Box fontWeight={600} fontSize={18}>
                  Календарь заказов
                </Box>
              </Typography>
            </Box>
          </Grid>
          {/* <Grid item lg={5} md={5}>
            <Box
              display='flex'
              justifyContent='space-around'
              alignItems='center'
            >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  inputVariant='outlined'
                  format='dd/MM/yyyy'
                  margin='normal'
                  label='Дата с'
                />
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  inputVariant='outlined'
                  format='dd/MM/yyyy'
                  margin='normal'
                  label='Дата с'
                />
              </MuiPickersUtilsProvider>

              <Box>
                <AddCircle className={classes.add_icon} />
              </Box>
            </Box>
          </Grid> */}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default OrdersHeader;
