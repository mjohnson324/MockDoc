import React from 'react';
import DoctorsMap from '../map/doctors_map';
import DoctorAppointments from './doctor_appointments';
import { getDayRange } from '../../util/appointment_util';
import { sortAppointmentsByDay, 
         renderStars } from '../../reducers/selectors';
import DoctorReviews from './doctor_reviews';

class Doctor extends React.Component {
  constructor(props) {
    super(props);
    const days = getDayRange();
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
    return specialties.map((specialty, idx) => {
      return(<li key={idx}>{`${specialty}`}</li>);
    });
  }

  render () {
    const { doctor, reviews, appointments } = this.props;
    const { today, tomorrow, dayAfter, dayFour } = this.state;
    const daySortedApps = sortAppointmentsByDay(
      appointments, [today, tomorrow, dayAfter, dayFour]
    );
    return(
      <section>
        <div className="docTitle">
          <h1>
            {`Dr. ${doctor.first_name} ${doctor.last_name}, ${doctor.degree}`}
          </h1>
          <div className="stars">
            {renderStars(doctor.average_rating)}
          </div>
        </div>
        <div className="docMap">
          <DoctorsMap
            doctors={[doctor]}
            address={doctor.address}
            />
        </div>
        <div className="doc-inline">
          <div className="docProfile">
            <h2>Qualifications and Expertise</h2>
            <div>
              <div>
                <label>Education:</label>
                <div>{`${doctor.education}`}</div>
              </div>
              <div>
                <label>Specialties:</label>
                <ul>
                  {this.specList(doctor.specialties)}
                </ul>
              </div>
              <div>
                <label>Address:</label>
                <ul><li>{`${doctor.address}`}</li></ul>
              </div>
            </div>
          </div>
          <DoctorAppointments
            apps={daySortedApps}
            address={`${doctor.address}`}
            daysToRender={this.state} />
          <DoctorReviews reviews={reviews} />
        </div>
      </section>
    );
  }
}

export default Doctor;
