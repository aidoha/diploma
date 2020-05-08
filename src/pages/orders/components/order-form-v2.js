import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import {
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Button, IconButton } from '@material-ui/core';
import {
  Close,
  CalendarToday,
  Create,
  PhoneIphone,
  Comment,
} from '@material-ui/icons';
import { CssTextField } from '../../../globalStyle';
import {
  handleClientName,
  handleClientPhone,
  handleClientComment,
} from '../../../redux/order/action';
import { containerStyles } from '../style';

const OrderFormContainerBasic = (props) => {
  const orderState = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const {
    classes,
    visible,
    visibleChange,
    // orderData,
    // cancelOrder,
    target,
    onHide,
  } = props;

  const onChangeTextField = (name, value) => {
    switch (name) {
      case 'client-name':
        dispatch(handleClientName(value));
        break;
      case 'client-phone':
        dispatch(handleClientPhone(value));
        break;
      case 'client-comment':
        dispatch(handleClientComment(value));
        break;
      default:
        return null;
    }
  };

  const cancelChanges = () => {
    dispatch(handleClientName(''));
    dispatch(handleClientPhone(''));
    dispatch(handleClientComment(''));

    visibleChange();
    // cancelOrder();
  };

  console.log('orderState ===>', orderState);

  return (
    <AppointmentForm.Overlay
      visible={visible}
      target={target}
      fullSize
      onHide={onHide}
    >
      <div>
        <div className={classes.header}>
          <IconButton className={classes.closeButton} onClick={cancelChanges}>
            <Close color='action' />
          </IconButton>
        </div>
        <div className={classes.content}>
          <div className={classes.wrapper}>
            <Create className={classes.icon} color='action' />
            <CssTextField
              className={classes.textField}
              variant='outlined'
              name='client-name'
              placeholder='Имя клиента'
              value={orderState.client.name}
              onChange={(e) => onChangeTextField(e.target.name, e.target.value)}
            />
          </div>
          <div className={classes.wrapper}>
            <PhoneIphone className={classes.icon} color='action' />
            <CssTextField
              className={classes.textField}
              variant='outlined'
              name='client-phone'
              placeholder='Номер клиента'
              value={orderState.client.phone}
              onChange={(e) => onChangeTextField(e.target.name, e.target.value)}
            />
          </div>
          <div className={classes.wrapper}>
            <Comment className={classes.icon} color='action' />
            <CssTextField
              className={classes.textField}
              variant='outlined'
              name='client-comment'
              multiline
              rows={3}
              placeholder='Мой коментарий к заказу'
              value={orderState.client.comment}
              onChange={(e) => onChangeTextField(e.target.name, e.target.value)}
            />
          </div>
          {/* <div className={classes.wrapper}>
            <CalendarToday className={classes.icon} color='action' />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDateTimePicker label='Start Date' />
            </MuiPickersUtilsProvider>
          </div> */}
        </div>
        <div className={classes.buttonGroup}>
          {/* {!isNewAppointment && (
              <Button
                variant='outlined'
                color='secondary'
                className={classes.button}
                onClick={() => {
                  visibleChange();
                  this.commitAppointment('deleted');
                }}
              >
                Delete
              </Button>
            )} */}
          <Button
            variant='outlined'
            color='primary'
            className={classes.button}
            // onClick={() => {
            //   visibleChange();
            //   applyChanges();
            // }}
          >
            Create
            {/* {isNewAppointment ? 'Create' : 'Save'} */}
          </Button>
        </div>
      </div>
    </AppointmentForm.Overlay>
  );
};

export const OrderFormContainer = withStyles(containerStyles, {
  name: 'OrderFormContainer',
})(OrderFormContainerBasic);
