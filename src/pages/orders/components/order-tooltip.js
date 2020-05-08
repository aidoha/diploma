import React from 'react';
import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const style = ({ palette }) => ({
  icon: {
    color: palette.action.active,
  },
  textCenter: {
    textAlign: 'center',
  },
});

const Content = withStyles(style, { name: 'Content' })(
  ({ children, appointmentData, classes, ...restProps }) => (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <Grid container alignItems='center'>
        <Grid item xs={10}>
          <span>{appointmentData.clientCommentary}</span>
        </Grid>
      </Grid>
    </AppointmentTooltip.Content>
  )
);

export default Content;
