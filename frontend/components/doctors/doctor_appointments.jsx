import React from 'react';
import AppointmentsTable from '../appointments/appointments_table';
import { sortAppointmentsByDay,
         getDayRange } from '../appointments/appointment_helpers';

class DoctorAppointments extends React.Component {
  constructor(props) {
    super(props);

    const days = getDayRange();

    this.state = {
      today: days[0],
      tomorrow: days[1],
      dayAfter: days[2],
      dayFour: days[3],
    };
  }

  render() {
    const { apps } = this.props;
    const displayedApps = sortAppointmentsByDay(apps, this.state);
    const { today, tomorrow, dayAfter, dayFour } = this.state;

    return(
      <section className="doc-appointments">

      </section>
    );
  }
}

export default DoctorAppointments;
