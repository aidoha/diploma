import React from 'react';

import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import { useLocation, useHistory } from 'react-router-dom';

const TopBar = () => {
  const { pathname } = useLocation();
  const { push } = useHistory();
  return (
    <>
      {pathname === '/' && (
        <AppBar position='static'>
          <Grid container justify='flex-end'>
            <Toolbar>
              <Button color='inherit' onClick={() => push('/signin')}>
                Войти
              </Button>
              <Button
                color='default'
                variant='contained'
                onClick={() => push('/signup')}
              >
                Зарегистрироваться
              </Button>
            </Toolbar>
          </Grid>
        </AppBar>
      )}
      {pathname === '/signin' && (
        <AppBar color='transparent'>
          <Grid container justify='space-between' alignItems='center'>
            <div>Icon</div>
            <Toolbar>
              <Button color='default' onClick={() => push('/signup')}>
                Зарегистрироваться
              </Button>
            </Toolbar>
          </Grid>
        </AppBar>
      )}
    </>
  );
};

export default TopBar;
