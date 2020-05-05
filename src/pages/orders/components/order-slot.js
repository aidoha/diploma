import React from 'react';
import { Appointments } from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const styles = {
  toolbarRoot: {
    position: 'relative',
  },
  progress: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
  },
};

const OrderSlotBase = ({
  children,
  style,
  data,
  onClick,
  classes,
  toggleVisibility,
  onAppointmentMetaChange,
  ...restProps
}) => {
  return (
    <Appointments.Appointment
      {...restProps}
      style={{
        ...style,
        backgroundColor: '#8282ff',
        borderRadius: '8px',
        color: 'white',
        padding: '5px',
      }}
    >
      <React.Fragment>
        <IconButton
          style={{ color: 'white' }}
          onClick={({ target }) => {
            toggleVisibility();
            onAppointmentMetaChange({
              target: target.parentElement.parentElement,
              data,
            });
          }}
        >
          <InfoIcon fontSize='small' />
        </IconButton>
        {children}
        {data.price}
      </React.Fragment>
    </Appointments.Appointment>
  );
};

const OrderSlot = withStyles(styles, { name: 'Appointment' })(OrderSlotBase);

export default OrderSlot;
