import React from 'react';
import PatientAppointment from './appointment_index_item';

class PatientProfile extends React.Component {
  constructor(props) {
    super(props);

    this.cancelAppointment = this.cancelAppointment.bind(this);
  }

  componentWillMount() {

  }

  cancelAppointment(e, id) {
    e.preventDefault();
    const data = {
      reason: null,
      patient_id: null,
      id,
    };

    this.props.updateAppointment(data);
  }

  render() {
    const apps = this.props.user.appointments;

    return(
      <section className="patient-appointments">
        <h1>Welcome, {this.props.user.first_name}!</h1>

        <h2>Your Appointments:</h2>
        <ol>
          {apps.map((app, idx) => {
            return(<PatientAppointment
              key={idx}
              appointment={app}
              callback={(e) => this.cancelAppointment(e, app.id)} />);
          })}
        </ol>
      </section>
    );
  }
}

export default PatientProfile;
