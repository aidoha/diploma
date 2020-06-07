import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { Box, Container, Button, FormControl } from '@material-ui/core';
import { Topbar } from '../../../components';
import { CssTextField } from '../../../globalStyle';
import { useStyles, Spinner } from '../style';
import { RESET_PASSWORD } from '../queries';
import withApollo from '../../../hoc/withApollo';

const ResetPassword = () => {
  const classes = useStyles();
  const [password, setPassword] = useState('');
  const { search } = useLocation();
  const queryEmail = search.slice(7, search.length);
  const [resetPasswordMutate, { loading }] = useMutation(RESET_PASSWORD);

  const onSubmit = () => {
    resetPasswordMutate({
      variables: {
        businessOwnerEmail: queryEmail,
        businessOwnerPassword: password,
      },
    }).then(() => alert('Ваш пароль успешно изменен!'));
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
              type='password'
              placeholder={'Новый пароль'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            startIcon={loading && <Spinner width='20px' height='20px' />}
            disabled={password === ''}
          >
            Восстановить
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default withApollo(ResetPassword);
