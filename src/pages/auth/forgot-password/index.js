import React, { useState } from 'react';
import { Box, Container, Button, FormControl } from '@material-ui/core';
import { Topbar } from '../../../components';
import { CssTextField } from '../../../globalStyle';
import { useStyles, Spinner } from '../style';
import { validateEmail } from '../../../utils/index';

const ForgotPassword = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');

  const onSubmit = () => {
    if (validateEmail(email)) {
      console.log('ok');
    }
  };

  return (
    <>
      <Topbar />
      <Container maxWidth='xs'>
        <Box display='flex' alignItems='center' marginTop='50px'>
          <FormControl fullWidth>
            <CssTextField
              variant='outlined'
              required
              placeholder={'E-mail'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
        </Box>
        <Box marginTop='20px'>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            size='large'
            className={classes.btn_auth}
            onClick={onSubmit}
            // startIcon={loading && <Spinner width='20px' height='20px' />}
            disabled={email === ''}
          >
            Отправить
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default ForgotPassword;
