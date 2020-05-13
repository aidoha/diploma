import React from 'react';
import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import {
  Edit,
  Delete,
  Close,
  Comment,
  Person,
  Schedule,
} from '@material-ui/icons';
import { format } from 'date-fns';
import { convertUTCDateToLocalDate } from '../../../utils';

const classes = makeStyles({
  order_actions: {
    margin: '0 10px',
    cursor: 'pointer',
    '&:hover': {
      color: '#8282ff',
    },
  },
  order_info: {
    marginLeft: '15px',
  },
});

const parseDate = (date) => {
  return format(new Date(date), 'HH:mm');
};

export const Header = ({
  appointmentData,
  onVisibilityChange,
  editFormVisibleChange,
  commandButtonComponent,
  commandButtonIds,
  onHide,
  ...restProps
}) => {
  const editOrderVisibilityHandler = () => {
    onVisibilityChange();
    editFormVisibleChange(true);
  };

  return (
    <AppointmentTooltip.Header
      {...restProps}
      showOpenButton={false}
      showCloseButton={false}
      showDeleteButton={false}
      commandButtonComponent={commandButtonComponent}
      commandButtonIds={commandButtonIds}
    >
      <Box
        display='flex'
        justifyContent='flex-end'
        alignItems='center'
        margin='10px'
      >
        <Edit
          color='action'
          className={classes().order_actions}
          onClick={editOrderVisibilityHandler}
        />
        <Delete color='action' className={classes().order_actions} />
        <Close
          color='action'
          className={classes().order_actions}
          onClick={onHide}
        />
      </Box>
    </AppointmentTooltip.Header>
  );
};

export const Content = ({ appointmentData }) => (
  <Box display='flex' flexDirection='column' padding='0 25px 25px 25px'>
    <Box display='flex' alignItems='center' margin='10px'>
      <Person color='action' />
      <span className={classes().order_info}>
        {appointmentData.clientFirstName}
      </span>
    </Box>
    <Box display='flex' alignItems='center' margin='10px'>
      <Schedule color='action' />
      <span className={classes().order_info}>
        {parseDate(
          convertUTCDateToLocalDate(new Date(appointmentData.startAt))
        )}{' '}
        -{' '}
        {parseDate(convertUTCDateToLocalDate(new Date(appointmentData.endAt)))}
      </span>
    </Box>
    <Box display='flex' alignItems='center' margin='10px'>
      <Comment color='action' />
      <span className={classes().order_info}>
        {appointmentData.clientCommentary}
      </span>
    </Box>
  </Box>
);
