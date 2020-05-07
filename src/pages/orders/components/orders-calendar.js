import React from 'react';
import moment from 'moment';
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
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import OrderSlot from './order-slot';
import { OrderFormContainer } from './order-form';
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

const styles = (theme) => ({
  addButton: {
    position: 'absolute',
    bottom: theme.spacing(1) * 3,
    right: theme.spacing(1) * 4,
  },
});

class OrderCalendar extends React.PureComponent {
  state = {
    loading: true,
    currentDate: '2017-05-23',
    visible: false,
    appointmentMeta: {
      target: null,
      data: {},
    },
    confirmationVisible: false,
    editingFormVisible: false,
    deletedAppointmentId: undefined,
    editingAppointment: undefined,
    previousAppointment: undefined,
    addedAppointment: {},
    isNewAppointment: false,
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

  onEditingAppointmentChange = (editingAppointment) => {
    this.setState({ editingAppointment });
  };

  onAddedAppointmentChange = (addedAppointment) => {
    this.setState({ addedAppointment });
    const { editingAppointment } = this.state;
    if (editingAppointment !== undefined) {
      this.setState({
        previousAppointment: editingAppointment,
      });
    }
    this.setState({ editingAppointment: undefined, isNewAppointment: true });
  };

  setDeletedAppointmentId = (id) => {
    this.setState({ deletedAppointmentId: id });
  };

  toggleEditingFormVisibility = () => {
    const { editingFormVisible } = this.state;
    this.setState({
      editingFormVisible: !editingFormVisible,
    });
  };

  toggleConfirmationVisible = () => {
    const { confirmationVisible } = this.state;
    this.setState({ confirmationVisible: !confirmationVisible });
  };

  commitChanges = ({ added, changed, deleted }) => {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId =
          data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        );
      }
      if (deleted !== undefined) {
        this.setDeletedAppointmentId(deleted);
        this.toggleConfirmationVisible();
      }
      return { data, addedAppointment: {} };
    });
  };

  commitDeletedAppointment = () => {
    this.setState((state) => {
      const { data, deletedAppointmentId } = state;
      const nextData = data.filter(
        (appointment) => appointment.id !== deletedAppointmentId
      );

      return { data: nextData, deletedAppointmentId: null };
    });
    this.toggleConfirmationVisible();
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
    this.myAppointmentForm.update();
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

  myAppointmentForm = connectProps(OrderFormContainer, () => {
    const {
      editingFormVisible,
      editingAppointment,
      data,
      addedAppointment,
      isNewAppointment,
      previousAppointment,
    } = this.state;

    const currentAppointment =
      (data &&
        data.filter(
          (appointment) =>
            editingAppointment && appointment.id === editingAppointment.id
        )[0]) ||
      addedAppointment;
    const cancelAppointment = () => {
      if (isNewAppointment) {
        this.setState({
          editingAppointment: previousAppointment,
          isNewAppointment: false,
        });
      }
    };

    return {
      visible: editingFormVisible,
      appointmentData: currentAppointment,
      commitChanges: this.commitChanges,
      visibleChange: this.toggleEditingFormVisibility,
      onEditingAppointmentChange: this.onEditingAppointmentChange,
      cancelAppointment,
    };
  });

  render() {
    const {
      data,
      loading,
      currentDate,
      appointmentMeta,
      visible,
      editingFormVisible,
    } = this.state;
    const { classes } = this.props;
    const formattedData = data ? data.map(mapAppointmentData) : [];

    return (
      <Paper>
        <Scheduler data={formattedData} locale='ru-RU' height={660}>
          <ViewState
            currentDate={currentDate}
            currentViewName='Week'
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
          <AppointmentForm
            overlayComponent={this.myAppointmentForm}
            visible={editingFormVisible}
            onVisibilityChange={this.toggleEditingFormVisibility}
          />
        </Scheduler>
        <Fab
          color='secondary'
          className={classes.addButton}
          onClick={() => {
            this.setState({ editingFormVisible: true });
            this.onEditingAppointmentChange(undefined);
            this.onAddedAppointmentChange({
              startDate: new Date(currentDate).setHours(6),
              endDate: new Date(currentDate).setHours(23 + 1),
            });
          }}
        >
          <AddIcon />
        </Fab>
      </Paper>
    );
  }
}

export default withStyles(styles, { name: 'EditingDemo' })(OrderCalendar);
