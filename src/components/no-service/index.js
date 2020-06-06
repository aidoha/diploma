import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './style';

const NoServiceBlock = () => {
  const classes = useStyles();
  return (
    <Box
      border='1px solid #eeecf3'
      padding='25px'
      margin='20px'
      borderRadius='12px'
      width='50%'
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
      className={classes.no_order}
    >
      <Box fontSize={40} fontWeight='600'>
        У вас нет услуг!
      </Box>
      <Box marginTop='20px'>
        Пожалуйста, добавьте услуги для того, чтобы создать запись.
      </Box>
    </Box>
  );
};

export default NoServiceBlock;
