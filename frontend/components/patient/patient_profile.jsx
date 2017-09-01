import React from 'react';
import PatientAppointment from './appointment_index_item';

class PatientProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const apps = this.props.user.appointments;

    return(
      <section className="patient-appointments">
        <h1>Welcome, {this.props.user.first_name}!</h1>

        <h2>Your Appointments:</h2>
        <ol>
          {apps.map((app, idx) => (
            <PatientAppointment
              key={idx}
              appointment={app} />))}
        </ol>
      </section>
    );
  }
}

export default PatientProfile;
