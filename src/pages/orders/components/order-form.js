import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation, useQuery } from '@apollo/react-hooks';
import InputMask from 'react-input-mask';
import { formatISO, format } from 'date-fns';
import { AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Button, IconButton, Box } from '@material-ui/core';
import {
  Close,
  CalendarToday,
  Create,
  PhoneIphone,
  Comment,
} from '@material-ui/icons';
import AvailableHour from './available-hour';
import {
  handleClientName,
  handleClientPhone,
  handleClientComment,
  handleOrderDate,
  handleCreateOrder,
  handleUpdateOrder,
} from '../../../redux/order/actions';
import {
  handleSuccessStatus,
  handleErrorStatus,
} from '../../../redux/statuses/actions';
import { succeses, errors } from '../../../constants/statuses';
import {
  CREATE_BUSINESS_SERVICE_ORDER,
  UPDATE_BUSINESS_SERVICE_ORDER,
  GET_ORDER_AVAILABLE_HOURS,
} from '../queries';
import { parsePhone } from '../../../utils';
import { CssTextField } from '../../../globalStyle';
import { containerStyles, Spinner } from '../style';

const OrderFormContainerBasic = (props) => {
  const {
    classes,
    visible,
    edited,
    visibleChange,
    target,
    onHide,
    serviceID: businessServiceID,
    orderMeta,
  } = props;
  const [dateChanged, setDateChanged] = useState(false);
  const [availableHour, setAvailableHour] = useState({
    clicked: null,
    hourValue: null,
  });
  const orderState = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const { data: availableHours } = useQuery(GET_ORDER_AVAILABLE_HOURS, {
    variables: {
      businessServiceID: parseInt(businessServiceID, 10),
      date: format(new Date(orderState.date), 'yyyy-MM-dd'),
    },
    skip: !dateChanged,
  });
  const [createBusinessServiceOrder, { loading: createLoading }] = useMutation(
    CREATE_BUSINESS_SERVICE_ORDER
  );
  const [updateBusinessServiceOrder, { loading: updateLoading }] = useMutation(
    UPDATE_BUSINESS_SERVICE_ORDER
  );

  const saveOrder = async (type, obj) => {
    try {
      const res =
        type === 'create'
          ? await createBusinessServiceOrder({ variables: obj })
          : await updateBusinessServiceOrder({ variables: obj });
      if (res.data) {
        dispatch(
          handleSuccessStatus({
            value: true,
            message:
              type === 'create' ? succeses.order.add : succeses.order.edit,
          })
        );

        if (type === 'create') {
          dispatch(
            handleCreateOrder(
              res.data?.createBusinessServiceOrder?.businessServiceOrder
            )
          );
        } else if (type === 'update') {
          setTimeout(() => window.location.reload(), 1000);
          // dispatch(
          //   handleUpdateOrder(
          //     res.data?.UpdateBusinessServiceOrder?.businessServiceOrder
          //   )
          // );
        }
      }
    } catch (err) {
      dispatch(handleErrorStatus({ value: true, message: errors.general }));
    }
  };

  const onSubmit = async () => {
    const obj = {
      businessServiceID: parseInt(businessServiceID, 10),
      startAt: availableHour.hourValue,
      clientFirstName: orderState.client.name,
      clientPhoneNumber: parsePhone(orderState.client.phone),
      clientPhoneNumberPrefix: '+7',
      clientCommentary: orderState.client.comment,
    };

    if (!edited) {
      saveOrder('create', obj);
    } else {
      obj.orderID = orderMeta.data.businessServiceOrderID;
      saveOrder('update', obj);
    }
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
        setDateChanged(true);
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

  useEffect(() => {
    if (edited) {
      dispatch(handleClientName(orderMeta.data.clientFirstName));
      dispatch(handleClientPhone('+7' + orderMeta.data.clientPhoneNumber));
      dispatch(handleClientComment(orderMeta.data.clientCommentary));
      dispatch(handleOrderDate(new Date(orderMeta.data.startAt)));
    }
  }, [orderMeta, edited, dispatch]);

  const newAvailableHours =
    availableHours?.getCompanyAvailableHoursByDate?.availableHour;

  const selectAvailableHour = (hour) => {
    setAvailableHour({
      clicked: hour,
      hourValue: new Date(hour).toISOString(),
    });
  };

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
          <Box display='flex' alignItems='center' justifyContent='center'>
            {newAvailableHours &&
              newAvailableHours.map((item) => (
                <AvailableHour
                  key={item}
                  item={item}
                  selectAvailableHour={selectAvailableHour}
                  availableHour={availableHour}
                />
              ))}
          </Box>
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
              !orderState.client.comment ||
              !availableHour.hourValue
            }
            endIcon={
              (createLoading || updateLoading) && (
                <Spinner width='20px' height='20px' />
              )
            }
          >
            {edited ? 'Сохранить изменения' : 'Добавить заказ'}
          </Button>
        </div>
      </div>
    </AppointmentForm.Overlay>
  );
};

export const OrderFormContainer = withStyles(containerStyles, {
  name: 'OrderFormContainer',
})(OrderFormContainerBasic);
