import React from 'react';
import PatientIndexItem from './patient_index_item';

class PatientProfile extends React.Component {
  constructor(props) {
    super(props);

    this.cancelAppointment = this.cancelAppointment.bind(this);
  }

  componentWillMount() {
    const { user } = this.props;
    this.props.getUser(user.id);
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

  deleteReview(e, review) {
    e.preventDefault();
    this.props.deleteReview(review.id);
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
              cancel={(e) => this.cancelAppointment(e, app.id)}
              review={reviews[app.id]}
              removeReview={(e) => this.deleteReview(e, reviews[app.id])} />);
          })}
        </ol>
      </section>
    );
  }
}

export default PatientProfile;
