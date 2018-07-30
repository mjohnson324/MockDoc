import React from 'react';
import PatientIndexItem from './patient_index_item';

class PatientProfile extends React.Component {
  constructor(props) {
    super(props);
    const { appointments, reviews } = this.props;
    this.state = {
      appointments,
      reviews,
    };
    this.cancelAppointment = this.cancelAppointment.bind(this);
  }

  componentDidMount() {
    const { user } = this.props;
    this.props.getUser(user.id);
  }

  // componentWillReceiveProps(nextProps) {
  //   const { appointments, reviews } = nextProps;
  //   this.setState({ appointments, reviews, });
  // }

  cancelAppointment(e, appointment) {
    e.preventDefault();
    const data = {
      reason: null,
      patient_id: null,
      id: appointment.id,
    };
    this.props.updateAppointment(data);
  }

  deleteReview(e, review) {
    e.preventDefault();
    this.props.deleteReview(review.id);
  }

  render() {
    const { appointments, reviews } = this.state;
    return(
      <section className="patient-appointments">
        <h1>Welcome, {this.props.user.first_name}!</h1>

        <h2>Your Appointments:</h2>
        <ul>
          {appointments.map((app, idx) => {
            return(<PatientIndexItem
              key={idx}
              appointment={app}
              cancel={(e) => this.cancelAppointment(e, app)}
              review={reviews[app.id]}
              removeReview={(e) => this.deleteReview(e, reviews[app.id])} />);
          })}
        </ul>
      </section>
    );
  }
}

export default PatientProfile;
