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
import { Fab, Paper, Grid } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import OrderSlot from './order-slot';
import {
  Content as ContentToolTip,
  Header as HeaderToolTip,
} from './order-tooltip';
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

  headerTooltip = connectProps(HeaderToolTip, () => {
    const { form } = this.state;
    return {
      onVisibilityChange: this.toggleVisibility,
      visible: form.visible,
      editFormVisibleChange: this.toggleFormVisibility,
    };
  });

  render() {
    const { currentDate, orderMeta, tooltipVisibility, form } = this.state;
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
            <WeekView startDayHour={6} endDayHour={23} />
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
            color='secondary'
            className={classes.addButton}
            onClick={() => {
              this.setState({ form: { visible: true } });
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
