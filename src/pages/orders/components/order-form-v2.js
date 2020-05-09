import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import InputMask from 'react-input-mask';
import { formatISO } from 'date-fns';
import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import {
  KeyboardDatePicker,
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
import {
  handleClientName,
  handleClientPhone,
  handleClientComment,
  handleOrderDate,
} from '../../../redux/order/action';
import { CREATE_BUSINESS_SERVICE_ORDER } from '../queries';
import { parsePhone } from '../../../utils';
import { CssTextField } from '../../../globalStyle';
import { containerStyles } from '../style';

const OrderFormContainerBasic = (props) => {
  const {
    classes,
    visible,
    visibleChange,
    target,
    onHide,
    serviceID: businessServiceID,
  } = props;
  const orderState = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const [createBusinessServiceOrder, { loading }] = useMutation(
    CREATE_BUSINESS_SERVICE_ORDER
  );

  const onSubmit = () => {
    const obj = {
      businessServiceID,
      startAt: formatISO(orderState.date),
      clientFirstName: orderState.client.name,
      clientPhoneNumber: parsePhone(orderState.client.phone),
      clientPhoneNumberPrefix: '+7',
      clientCommentary: orderState.client.comment,
    };

    console.log('obj =>', obj);

    // createBusinessServiceOrder({ variables: obj })
    //   .then((res) => console.log('res', res))
    //   .catch((err) => console.log('err', err));
  };

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
      case 'order-date':
        dispatch(handleOrderDate(formatISO(value)));
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
  };

  console.log('order', orderState);

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
            <InputMask
              mask='+7 999 999 99 99'
              value={orderState.client.phone}
              onChange={(e) =>
                onChangeTextField('client-phone', e.target.value)
              }
              disabled={false}
              maskChar=' '
            >
              {() => (
                <CssTextField
                  className={classes.textField}
                  variant='outlined'
                  placeholder='Номер клиента'
                />
              )}
            </InputMask>
          </div>
          <div className={classes.wrapper}>
            <CalendarToday className={classes.icon} color='action' />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className={classes.textField}
                disableToolbar
                variant='dialog'
                inputVariant='outlined'
                label='Дата заказа'
                format='dd.MM.yyyy'
                margin='normal'
                value={orderState.date}
                onChange={(value) => onChangeTextField('order-date', value)}
              />
            </MuiPickersUtilsProvider>
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
        </div>
        <div className={classes.buttonGroup}>
          <Button
            variant='outlined'
            color='primary'
            className={classes.button}
            onClick={onSubmit}
            disabled={
              !orderState.client.name ||
              !orderState.client.phone ||
              !orderState.client.comment
            }
          >
            Добавить заказ
          </Button>
        </div>
      </div>
    </AppointmentForm.Overlay>
  );
};

export const OrderFormContainer = withStyles(containerStyles, {
  name: 'OrderFormContainer',
})(OrderFormContainerBasic);
