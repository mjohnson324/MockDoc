import React from 'react';
import AppointmentsTable from '../appointments/appointments_table';

class DoctorAppointments extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { apps, address } = this.props;
    const { today, tomorrow, dayAfter, dayFour } = this.props.daysToRender;

    return(
      <section className="doc-appointments">
        <h3>Book an Appointment</h3>

        <p>Address: {`${address}`}</p>

        <section className="doc-scroll-bar">
          <button>L</button>
          <div>{`${today}`.slice(0, 10)}</div>
          <div>{`${tomorrow}`.slice(0, 10)}</div>
          <div>{`${dayAfter}`.slice(0, 10)}</div>
          <div>{`${dayFour}`.slice(0,10)}</div>
          <button>R</button>
        </section>

        <div>
          <AppointmentsTable appsByDays={apps}/>
        </div>
      </section>
    );
  }
}

export default DoctorAppointments;
