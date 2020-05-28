import React from 'react';
import { formatISO } from 'date-fns';
import { ViewState } from '@devexpress/dx-react-scheduler';
import { connectProps } from '@devexpress/dx-react-core';
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentForm,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import {
  Fab,
  Paper,
  Dialog,
  DialogActions,
  Button,
  DialogTitle,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import OrderSlot from './order-slot';
import {
  Content as ContentToolTip,
  Header as HeaderToolTip,
} from './order-tooltip';
import { OrderFormContainer } from './order-form';
import ToolbarWithLoading from './toolbar-loading';
import { convertUTCDateToLocalDate } from '../../../utils';
import {
  handleSuccessStatus,
  handleErrorStatus,
} from '../../../redux/statuses/actions';
import { handleDeleteOrder } from '../../../redux/order/actions';
import { succeses, errors } from '../../../constants/statuses';

const mapOrderData = (order) => {
  return {
    ...order,
    startDate: formatISO(convertUTCDateToLocalDate(new Date(order.startAt))),
    endDate: formatISO(convertUTCDateToLocalDate(new Date(order.endAt))),
    title: order.clientFirstName,
  };
};

const styles = (theme) => ({
  addButton: {
    position: 'absolute',
    bottom: theme.spacing(1) * 3,
    right: theme.spacing(1) * 4,
    backgroundColor: '#8282ff',
    color: 'white',
    '&:hover': {
      backgroundColor: '#7654ff',
    },
  },
});

class OrderCalendar extends React.PureComponent {
  state = {
    loading: false,
    currentDate: new Date(),
    tooltipVisibility: false,
    orderMeta: {
      target: null,
      data: {},
    },
    confirmationVisible: false,
    form: {
      visible: false,
      edited: false,
    },
    confirmModal: false,
  };

  handleConfirmModal = () => {
    this.setState({ confirmModal: !this.state.confirmModal });
  };

  currentDateChange = (currentDate) => {
    this.setState({ currentDate, loading: true });
  };

  toggleVisibility = () => {
    const { tooltipVisibility } = this.state;
    this.setState({ tooltipVisibility: !tooltipVisibility });
  };

  onOrderMetaChange = ({ data, target }) => {
    this.setState({ orderMeta: { data, target } });
  };

  toggleFormVisibility = (edited) => {
    const { form } = this.state;
    this.setState({
      form: { edited, visible: !form.visible },
    });
  };

  componentDidUpdate() {
    this.myOrderForm.update();
  }

  myOrderSlot = (props) => {
    return (
      <OrderSlot
        {...props}
        toggleVisibility={this.toggleVisibility}
        onOrderMetaChange={this.onOrderMetaChange}
      />
    );
  };

  myOrderForm = connectProps(OrderFormContainer, () => {
    const { form, orderMeta } = this.state;
    return {
      visible: form.visible,
      edited: form.edited,
      serviceID: this.props.serviceID,
      orderMeta,
      visibleChange: this.toggleFormVisibility,
    };
  });

  deleteOrder = async (orderID) => {
    const { deleteBusinessOrder, dispatch } = this.props;
    try {
      const res = await deleteBusinessOrder({ variables: { orderID } });

      if (res.data) {
        dispatch(
          handleSuccessStatus({
            value: true,
            message: succeses.order.delete,
          })
        );
        dispatch(
          handleDeleteOrder(
            res.data?.DeleteBusinessServiceOrder?.businessServiceOrder
          )
        );
        this.handleConfirmModal();
        this.toggleVisibility();
      }
    } catch (err) {
      dispatch(handleErrorStatus({ value: true, message: errors.general }));
    }
  };

  headerTooltip = connectProps(HeaderToolTip, () => {
    const { form } = this.state;
    return {
      onVisibilityChange: this.toggleVisibility,
      visible: form.visible,
      editFormVisibleChange: this.toggleFormVisibility,
      deleteModalVisibleChange: this.handleConfirmModal,
      deleteOrder: this.deleteOrder,
    };
  });

  render() {
    const {
      currentDate,
      orderMeta,
      tooltipVisibility,
      form,
      confirmModal,
    } = this.state;
    const { classes, ordersData, ordersLoading } = this.props;
    const formattedData = ordersData ? ordersData.map(mapOrderData) : [];

    return (
      <>
        <Paper>
          <Scheduler data={formattedData} locale='ru-RU' height={660}>
            <ViewState
              currentDate={currentDate}
              currentViewName='Week'
              onCurrentDateChange={this.currentDateChange}
            />
            <WeekView startDayHour={8} endDayHour={23} />
            <Appointments appointmentComponent={this.myOrderSlot} />
            <Toolbar
              {...(ordersLoading
                ? { rootComponent: ToolbarWithLoading }
                : null)}
            />
            <DateNavigator />
            <AppointmentTooltip
              headerComponent={this.headerTooltip}
              contentComponent={ContentToolTip}
              visible={tooltipVisibility}
              onVisibilityChange={this.toggleVisibility}
              appointmentMeta={orderMeta}
              onAppointmentMetaChange={this.onOrderMetaChange}
            />
            <AppointmentForm
              overlayComponent={this.myOrderForm}
              visible={form.visible}
              edited={form.edited}
              appointmentMeta={orderMeta}
              onVisibilityChange={this.toggleFormVisibility}
            />
          </Scheduler>
          <Fab
            className={classes.addButton}
            onClick={() => this.setState({ form: { visible: true } })}
          >
            <AddIcon />
          </Fab>
          <Dialog open={confirmModal} onClose={this.handleConfirmModal}>
            <DialogTitle>
              Вы действительно хотите удалить запись{' '}
              {orderMeta.data.clientFirstName}?
            </DialogTitle>
            <DialogActions>
              <Button color='default' onClick={this.handleConfirmModal}>
                Отменить
              </Button>
              <Button
                color='primary'
                onClick={() =>
                  this.deleteOrder(orderMeta.data.businessServiceOrderID)
                }
              >
                Удалить
              </Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </>
    );
  }
}

export default withStyles(styles, { name: 'OrderCalendar' })(OrderCalendar);
