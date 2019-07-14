/* eslint guard-for-in: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import PatientIndexItem from './patient_index_item';

class PatientProfile extends React.Component {
  constructor(props) {
    super(props);
    this.cancelAppointment = this.cancelAppointment.bind(this);
  }

  componentDidMount() {
    const { user } = this.props;
    this.props.getUser(user.id);
  }

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

  listDoctors(appointments) {
    let doctors = {};
    let links = []
    appointments.forEach(appointment => {
      doctors[appointment.doctor_id] = `Dr. ${appointment.first_name} ${appointment.last_name}`
    });
    for (let doctorId in doctors) {
      links.push({ id: doctorId, name: doctors[doctorId] })
    }
    return(
      <span className="doctor-links">
        {links.map((link, idx) => {
          return(
            <Link key={idx} to={`/doctor/${link.id}`} >
              {link.name}
            </Link>
          );
        })}
      </span>
    );
  }

  render() {
    const { user, reviews, appointments } = this.props;
    return(
      <section className="patient-appointments">
        <h2>Welcome, {user.first_name}!</h2>
        <h3>Your Doctors:</h3>
          {this.listDoctors(appointments)}
        <h3>Your Appointments:</h3>
        <ul className="appointments-list">
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
