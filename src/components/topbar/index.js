import React, { useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  useMediaQuery,
  Box,
} from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';
import { Steps } from '../index';
import { routes } from '../../constants';
import { useStyles } from './style';
import logo from '../../images/icon.png';

const { main, signIn, signUp, forgotPassword, resetPassword } = routes;

const TopBar = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width:600px)');
  const { pathname } = useLocation();
  const { push } = useHistory();
  const btnText = pathname === '/signup' ? 'Вход' : 'Зарегистрироваться';
  const authLink = pathname === '/signup' ? '/signin' : '/signup';
  const title =
    (pathname === '/signup' && 'Регистрация') ||
    (pathname === '/signin' && 'Вход') ||
    (pathname === '/' && 'Cactus') ||
    (pathname === '/forgot-password' && 'Забыли пароль?') ||
    (pathname === '/reset' && 'Восстановление пароля');

  useEffect(() => {
    document.title = title;
  }, [title]);

  const renderLogo = () => (
    <Box onClick={() => push(main)}>
      <img src={logo} alt='icon' style={{ width: '100px', height: 'auto' }} />
    </Box>
  );

  return (
    <>
      {(pathname === main ||
        pathname === forgotPassword ||
        pathname === resetPassword) && (
        <AppBar position='static' className={classes.main_bar}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            margin='0 10px'
          >
            {renderLogo()}
            <Box>
              <Toolbar>
                <Button
                  color='inherit'
                  onClick={() => push(signIn)}
                  className={classes.btn_auth}
                >
                  Войти
                </Button>
                <Button
                  color='default'
                  variant='contained'
                  onClick={() => push(signUp)}
                  className={classes.btn_auth}
                >
                  Зарегистрироваться
                </Button>
              </Toolbar>
            </Box>
          </Box>
        </AppBar>
      )}
      {(pathname === signIn || pathname === signUp) && (
        <AppBar
          color='transparent'
          position='static'
          className={classes.main_bar}
        >
          <Box margin='0 10px'>
            <Grid container justify='space-between' alignItems='center'>
              {renderLogo()}
              <Toolbar>
                <Button
                  onClick={() => push(authLink)}
                  className={classes.btn_auth}
                  style={{ color: '#fff' }}
                >
                  {btnText}
                </Button>
              </Toolbar>
            </Grid>
          </Box>
        </AppBar>
      )}
      {/* {pathname === '/intro' && (
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
      )} */}
    </>
  );
};

export default TopBar;
