import React from 'react';
import PatientIndexItem from './patient_index_item';

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

  createReview(e, id) {
    e.preventDefault();
  }

  render() {
    const { doctors, appointments, reviews, user } = this.props;
    return(
      <section className="patient-appointments">
        <h1>Welcome, {user.first_name}!</h1>

        <h2>Your Appointments:</h2>
        <ol>
          {appointments.map((app, idx) => {
            return(<PatientIndexItem
              key={idx}
              appointment={app}
              doctor={doctors[app.doctor_id]}
              review={reviews[app.id]}
              cancel={(e) => this.cancelAppointment(e, app.id)} />);
          })}
        </ol>
      </section>
    );
  }
}

export default PatientProfile;
