import React from 'react';
import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';
import { Edit, Delete, Close } from '@material-ui/icons';

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
  ({ appointmentData, ...restProps }) => (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <Grid container alignItems='center'>
        <Grid item lg={8} md={8} xs={10}>
          <span>{appointmentData.clientCommentary}</span>
        </Grid>
      </Grid>
    </AppointmentTooltip.Content>
  )
);
