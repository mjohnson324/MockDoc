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
    const { today, tomorrow, dayAfter, dayFour } = this.state;
    const displayedApps = sortAppointmentsByDay(apps,
                [today, tomorrow, dayAfter, dayFour]);

    return(
      <section className="doc-appointments">
        <h3>Book an Appointment</h3>

        <div>{`${this.props.address}`}</div>

        <div>
          <button>L</button>
          <div>{`${today}`.slice(0, 10)}</div>
          <div>{`${tomorrow}`.slice(0, 10)}</div>
          <div>{`${dayAfter}`.slice(0, 10)}</div>
          <div>{`${dayFour}`.slice(0,10)}</div>
          <button>R</button>
        </div>

        <AppointmentsTable appsByDays={displayedApps}/>
      </section>
    );
  }
}

export default DoctorAppointments;
