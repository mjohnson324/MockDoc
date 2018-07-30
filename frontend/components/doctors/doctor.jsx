import React from 'react';
import DoctorsMap from '../map/doctors_map';
import DoctorAppointments from './doctor_appointments';
import { getDayRange } from '../../util/appointment_util';
import { sortAppointmentsByDay, renderStars } from '../../reducers/selectors';
import { DoctorReviews } from './doctor_reviews';

class Doctor extends React.Component {
  constructor(props) {
    super(props);

    const days = getDayRange();

    this.state = {
      today: days[0],
      tomorrow: days[1],
      dayAfter: days[2],
      dayFour: days[3],
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
    const { doctor, appointments } = this.props;
    const { today, tomorrow, dayAfter, dayFour } = this.state;

    if (doctor) {
      if (doctor.education) {
        const daySortedApps = sortAppointmentsByDay(
          appointments, [today, tomorrow, dayAfter, dayFour]
        );
        return(
          <section>
            <div className="docTitle">
              <h1>
                {`Dr. ${doctor.first_name} ${doctor.last_name}, ${doctor.degree}`}
              </h1>
              <div>{`${doctor.specialties[0]}`}</div>
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
              <section className="docProfile">
                <h2>Qualifications and Experience</h2>
                <div>
                  <ol>
                    <label>Education:</label>
                    <ul>{`${doctor.education}`}</ul>
                  </ol>
                  <ol>
                    <label>Specialties:</label>
                    <ul>{this.specList(doctor.specialties)}</ul>
                  </ol>
                  <ol>
                    <label>Address:</label>
                    <ul><li>{`${doctor.address}`}</li></ul>
                  </ol>
                </div>
                <p>
                </p>
              </section>
              <DoctorAppointments
                apps={daySortedApps}
                address={`${doctor.address}`}
                daysToRender={this.state} />
              <DoctorReviews reviews={ this.props.reviews }/>
            </div>

          </section>
        );
      } else {
        return <section/>;
      }
    } else {
      return <section/>;
    }
  }
}

export default Doctor;
