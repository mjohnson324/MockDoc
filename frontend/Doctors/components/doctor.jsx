import React from 'react';
import { sortAppointmentsByDay } from '../../Appointments/appointment_selectors';
import { renderStars, degreeCheck } from '../doctor_selectors';
import { getDayRange } from '../doctor_utils';
import DoctorsMapWrapper from './doctors_map';
import DoctorAppointments from './doctor_appointments';
import DoctorReviews from './doctor_reviews';

class Doctor extends React.Component {
  constructor(props) {
    super(props);
    const days = getDayRange(0);
    this.state = {
      today: days[0],
      tomorrow: days[1],
      dayAfter: days[2],
      dayFour: days[3]
    };
    this.specList = this.specList.bind(this);
  }

  componentDidMount() {
    this.props.getADoctor(this.props.match.params.id);
  }

  specList(specialties) {
    return specialties.join(', ');
  }

  render() {
    const { doctor, reviews, appointments, googleLoaded } = this.props;
    const { today, tomorrow, dayAfter, dayFour } = this.state;
    const daySortedApps = sortAppointmentsByDay(
      appointments, [today, tomorrow, dayAfter, dayFour]
    );
    return(
      <section>
        <div className="docTitle">
          <h2>
            {`Dr. ${doctor.first_name} ${doctor.last_name}, ${degreeCheck(doctor.degree)}`}
          </h2>
          <h3>
            Overall Rating: <span className="stars">{renderStars(doctor.average_rating)}</span>
          </h3>
        </div>
        <div className="docMap">
          <DoctorsMapWrapper
            doctors={[doctor]}
            address={doctor.address}
            googleLoaded={googleLoaded}
          />
        </div>
        <div>
          <div className="doc-flex">
            <DoctorAppointments
              apps={daySortedApps}
              address={`${doctor.address}`}
              daysToRender={this.state} />
            <div className="docProfile">
              <h3>Qualifications and Expertise</h3>
              <label>Education:</label>
              <div>{`${doctor.education}`}</div>
              <label>Specialties:</label>
              <div>{this.specList(doctor.specialties)}</div>
              <label>Address:</label>
              <div>{`${doctor.address}`}</div>
            </div>
          </div>
          <h3 className="review-title">Reviews:</h3>
          <DoctorReviews reviews={reviews} />
        </div>
      </section>
    );
  }
}

export default Doctor;
