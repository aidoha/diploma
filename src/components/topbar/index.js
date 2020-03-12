import React, { useEffect } from 'react';

import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  useMediaQuery
} from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import { Steps } from '../index';
import { useStyles } from './style';

const TopBar = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');
  const { pathname } = useLocation();
  const { push } = useHistory();
  const btnText = pathname === '/signup' ? 'Вход' : 'Зарегистрироваться';
  const authLink = pathname === '/signup' ? '/signin' : '/signup';
  const title = pathname === '/signup' ? 'Регистрация' : 'Вход';

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      {pathname === '/' && (
        <AppBar position='static' className={classes.mainBar}>
          <Grid container justify='flex-end'>
            <Toolbar>
              <Button
                color='inherit'
                onClick={() => push('/signin')}
                className={classes.btn_auth}
              >
                Войти
              </Button>
              <Button
                color='default'
                variant='contained'
                onClick={() => push('/signup')}
                className={classes.btn_auth}
              >
                Зарегистрироваться
              </Button>
            </Toolbar>
          </Grid>
        </AppBar>
      )}
      {(pathname === '/signin' || pathname === '/signup') && (
        <AppBar
          color='transparent'
          position='static'
          className={classes.topbar}
        >
          <Grid container justify='space-between' alignItems='center'>
            <div>Icon</div>
            <Toolbar>
              <Button
                color='default'
                onClick={() => push(authLink)}
                className={classes.btn_auth}
              >
                {btnText}
              </Button>
            </Toolbar>
          </Grid>
        </AppBar>
      )}
      {pathname === '/intro' && (
        <AppBar position='sticky' className={classes.topbar}>
          <Grid container justify='flex-start' alignItems='center'>
            <div style={{ color: 'black' }}>ICON</div>
            {!matches && (
              <Toolbar>
                <Steps />
              </Toolbar>
            )}
          </Grid>
        </AppBar>
      )}
    </>
  );
};

export default TopBar;
