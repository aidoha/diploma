import React from 'react';
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
import { Fab, Paper } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import OrderSlot from './order-slot';
import OrderToolTip from './order-tooltip';
import { OrderFormContainer } from './order-form-v2';
import ToolbarWithLoading from './toolbar-loading';

const mapOrderData = (order) => {
  return {
    ...order,
    startDate: order.startAt,
    endDate: order.endAt,
    title: order.clientFirstName,
  };
};

const styles = (theme) => ({
  addButton: {
    position: 'absolute',
    bottom: theme.spacing(1) * 3,
    right: theme.spacing(1) * 4,
  },
});

class OrderCalendar extends React.PureComponent {
  state = {
    loading: false,
    currentDate: new Date(),
    visible: false,
    orderMeta: {
      target: null,
      data: {},
    },
    confirmationVisible: false,
    editingFormVisible: false,
    deletedOrderd: undefined,
    editingOrder: undefined,
    previousOrder: undefined,
    addedOrder: {},
    isNewOrder: false,
  };

  currentDateChange = (currentDate) => {
    this.setState({ currentDate, loading: true });
  };

  toggleVisibility = () => {
    const { visible: tooltipVisibility } = this.state;
    this.setState({ visible: !tooltipVisibility });
  };

  onOrderMetaChange = ({ data, target }) => {
    this.setState({ orderMeta: { data, target } });
  };

  // onEditingAppointmentChange = (editingAppointment) => {
  //   this.setState({ editingAppointment });
  // };

  // onAddedAppointmentChange = (addedAppointment) => {
  //   this.setState({ addedAppointment });
  //   const { editingAppointment } = this.state;
  //   if (editingAppointment !== undefined) {
  //     this.setState({
  //       previousAppointment: editingAppointment,
  //     });
  //   }
  //   this.setState({ editingAppointment: undefined, isNewAppointment: true });
  // };

  // setDeletedAppointmentId = (id) => {
  //   this.setState({ deletedAppointmentId: id });
  // };

  toggleEditingFormVisibility = () => {
    const { editingFormVisible } = this.state;
    this.setState({
      editingFormVisible: !editingFormVisible,
    });
  };

  // toggleConfirmationVisible = () => {
  //   const { confirmationVisible } = this.state;
  //   this.setState({ confirmationVisible: !confirmationVisible });
  // };

  // commitChanges = ({ added, changed, deleted }) => {
  //   this.setState((state) => {
  //     let { data } = state;
  //     if (added) {
  //       const startingAddedId =
  //         data.length > 0 ? data[data.length - 1].id + 1 : 0;
  //       data = [...data, { id: startingAddedId, ...added }];
  //     }
  //     if (changed) {
  //       data = data.map((appointment) =>
  //         changed[appointment.id]
  //           ? { ...appointment, ...changed[appointment.id] }
  //           : appointment
  //       );
  //     }
  //     if (deleted !== undefined) {
  //       this.setDeletedAppointmentId(deleted);
  //       this.toggleConfirmationVisible();
  //     }
  //     return { data, addedAppointment: {} };
  //   });
  // };

  // commitDeletedAppointment = () => {
  //   this.setState((state) => {
  //     const { data, deletedAppointmentId } = state;
  //     const nextData = data.filter(
  //       (appointment) => appointment.id !== deletedAppointmentId
  //     );

  //     return { data: nextData, deletedAppointmentId: null };
  //   });
  //   this.toggleConfirmationVisible();
  // };

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
    const {
      editingFormVisible,
      editingOrder,
      addedOrder,
      isNewOrder,
      previousOrder,
    } = this.state;
    const { ordersData } = this.props;

    // const currentOrder =
    //   (ordersData &&
    //     ordersData.filter(
    //       (order) =>
    //         editingOrder &&
    //         order.businessServiceOrderID === editingOrder.businessServiceOrderID
    //     )[0]) ||
    //   addedOrder;

    // const cancelOrder = () => {
    //   if (isNewOrder) {
    //     this.setState({
    //       editingOrder: previousOrder,
    //       isNewOrder: false,
    //     });
    //   }
    // };

    return {
      visible: editingFormVisible,
      serviceID: this.props.serviceID,
      // orderData: currentOrder,
      // commitChanges: this.commitChanges,
      visibleChange: this.toggleEditingFormVisibility,
      // onEditingAppointmentChange: this.onEditingAppointmentChange,
      // cancelOrder,
    };
  });

  render() {
    const { currentDate, orderMeta, visible, editingFormVisible } = this.state;
    const { classes, ordersData, ordersLoading } = this.props;
    const formattedData = ordersData ? ordersData.map(mapOrderData) : [];
    // console.log('appointmentMeta', appointmentMeta);
    return (
      <>
        <Paper>
          <Scheduler data={formattedData} locale='ru-RU' height={660}>
            <ViewState
              currentDate={currentDate}
              currentViewName='Week'
              onCurrentDateChange={this.currentDateChange}
            />
            <WeekView startDayHour={6} endDayHour={23} />
            <Appointments appointmentComponent={this.myOrderSlot} />
            <Toolbar
              {...(ordersLoading
                ? { rootComponent: ToolbarWithLoading }
                : null)}
            />
            <DateNavigator />
            <AppointmentTooltip
              showCloseButton
              showOpenButton
              showDeleteButton
              contentComponent={OrderToolTip}
              visible={visible}
              onVisibilityChange={this.toggleVisibility}
              appointmentMeta={orderMeta}
              onAppointmentMetaChange={this.onOrderMetaChange}
            />
            <AppointmentForm
              overlayComponent={this.myOrderForm}
              visible={editingFormVisible}
              onVisibilityChange={this.toggleEditingFormVisibility}
            />
          </Scheduler>
          <Fab
            color='secondary'
            className={classes.addButton}
            onClick={() => {
              this.setState({ editingFormVisible: true });
              // this.onEditingAppointmentChange(undefined);
              // this.onAddedAppointmentChange({
              //   startDate: new Date(currentDate),
              //   endDate: new Date(currentDate),
              // });
            }}
          >
            <AddIcon />
          </Fab>
        </Paper>
      </>
    );
  }
}

export default withStyles(styles, { name: 'OrderCalendar' })(OrderCalendar);
