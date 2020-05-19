import React from 'react';
import { format } from 'date-fns';
import { Box } from '@material-ui/core';
import { convertUTCDateToLocalDate } from '../../../utils';

const AvailableHour = ({ item, selectAvailableHour, availableHour }) => {
  console.log('item', item);
  return (
    <Box
      border='1px solid #8282ff'
      padding='10px'
      margin='10px'
      borderRadius='10px'
      color={availableHour.clicked === item ? 'white' : '#8282ff'}
      style={{
        cursor: 'pointer',
        backgroundColor: availableHour.clicked === item ? '#8282ff' : 'white',
      }}
      onClick={() => selectAvailableHour(item)}
    >
      {format(convertUTCDateToLocalDate(new Date(item)), 'HH:mm')}
    </Box>
  );
};

export default AvailableHour;
