import React from 'react';
import Paper from '@material-ui/core/Paper';
import moment from 'moment';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentForm,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import OrderSlot from './order-slot';
import ToolbarWithLoading from './toolbar-loading';

const URL = 'https://js.devexpress.com/Demos/Mvc/api/SchedulerData/Get';

const makeQueryString = (currentDate) => {
  const format = 'YYYY-MM-DDTHH:mm:ss';
  const start = moment(currentDate).startOf('Week'.toLowerCase());
  const end = start.clone().endOf('Week'.toLowerCase());
  return encodeURI(
    `${URL}?filter=[["EndDate", ">", "${start.format(
      format
    )}"],["StartDate", "<", "${end.format(format)}"]]`
  );
};

const mapAppointmentData = (appointment) => ({
  ...appointment,
  startDate: appointment.StartDate,
  endDate: appointment.EndDate,
  title: appointment.Text,
  price: 4000,
});

export default class OrderCalendar extends React.PureComponent {
  state = {
    loading: true,
    currentDate: '2017-05-23',
    visible: false,
    appointmentMeta: {
      target: null,
      data: {},
    },
  };

  currentDateChange = (currentDate) => {
    this.setState({ currentDate, loading: true });
  };

  toggleVisibility = () => {
    const { visible: tooltipVisibility } = this.state;
    this.setState({ visible: !tooltipVisibility });
  };

  onAppointmentMetaChange = ({ data, target }) => {
    this.setState({ appointmentMeta: { data, target } });
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData = () => {
    const { currentDate } = this.state;
    const queryString = makeQueryString(currentDate);
    if (queryString === this.lastQuery) {
      this.setState({ loading: false });
      return;
    }
    fetch(queryString)
      .then((response) => response.json())
      .then(({ data }) => {
        setTimeout(() => {
          this.setState({
            data,
            loading: false,
          });
        }, 600);
      })
      .catch(() => this.setState({ loading: false }));
    this.lastQuery = queryString;
  };

  myAppointment = (props) => {
    return (
      <OrderSlot
        {...props}
        toggleVisibility={this.toggleVisibility}
        onAppointmentMetaChange={this.onAppointmentMetaChange}
      />
    );
  };

  render() {
    const { data, loading, currentDate, appointmentMeta, visible } = this.state;

    const formattedData = data ? data.map(mapAppointmentData) : [];

    return (
      <Paper>
        <Scheduler data={formattedData} height={660}>
          <ViewState
            currentDate={currentDate}
            currentViewName={'Week'}
            onCurrentDateChange={this.currentDateChange}
          />
          <WeekView startDayHour={6} endDayHour={23} />
          <Appointments appointmentComponent={this.myAppointment} />
          <Toolbar
            {...(loading ? { rootComponent: ToolbarWithLoading } : null)}
          />
          <DateNavigator />
          <AppointmentTooltip
            showCloseButton
            visible={visible}
            onVisibilityChange={this.toggleVisibility}
            appointmentMeta={appointmentMeta}
            onAppointmentMetaChange={this.onAppointmentMetaChange}
          />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    );
  }
}
