import React from 'react';
import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import {
  Edit,
  Delete,
  Close,
  Comment,
  Person,
  Schedule,
} from '@material-ui/icons';
import { format, toDate } from 'date-fns';

const style = ({ palette }) => ({
  icon: {
    color: palette.action.active,
  },
  textCenter: {
    textAlign: 'center',
  },
});

const classes = makeStyles({
  order_actions: {
    margin: '0 10px',
    cursor: 'pointer',
    '&:hover': {
      color: '#8282ff',
    },
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

export const Content = withStyles(style, { name: 'Content' })(
  ({ appointmentData }) => (
    <Box display='flex' flexDirection='column' padding='0 25px 25px 25px'>
      {console.log('data', new Date(appointmentData.startAt).getDay())}
      <Box display='flex' alignItems='center'>
        <Person color='action' />
        <span>{appointmentData.clientFirstName}</span>
      </Box>
      <Box display='flex' alignItems='center'>
        <Schedule color='action' />
        <span>
          {parseDate(appointmentData.startAt)} -
          {parseDate(appointmentData.endAt)}
        </span>
      </Box>
      <Box display='flex' alignItems='center'>
        <Comment color='action' />
        <span>{appointmentData.clientCommentary}</span>
      </Box>
    </Box>
  )
);
