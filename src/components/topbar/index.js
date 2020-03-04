import React, { useEffect } from 'react';

import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import { useStyles } from './style';

const TopBar = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const { push } = useHistory();
  const btnText = pathname === '/signup' ? 'Вход' : 'Зарегистрироваться';
  const authLink = pathname === '/signup' ? '/signin' : '/signup';
  const title = pathname === '/signup' ? 'Регистрация' : 'Вход';

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      {pathname === '/' && (
        <AppBar position='static' className={classes.main}>
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
        <AppBar color='transparent' position='static'>
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
    </>
  );
};

export default TopBar;
