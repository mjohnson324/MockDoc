import React from 'react';
import { sortAppointmentsByDay } from '../../Appointments/appointment_selectors';
import { renderStars, degreeCheck } from '../doctor_selectors';
import { getDayRange, getDay } from '../doctor_utils';
import DoctorsMapWrapper from './doctors_map';
import DoctorAppointments from './doctor_appointments';
import DoctorReviews from './doctor_reviews';

class Doctor extends React.Component {
  constructor(props) {
    super(props);
    const days = getDayRange(0);
    this.state = {
      baseOffset: 0,
      currentOffset: 0,
      today: days[0],
      tomorrow: days[1],
      dayAfter: days[2],
      dayFour: days[3]
    };
    this.specList = this.specList.bind(this);
    this.checkDate = this.checkDate.bind(this);

    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
  }

  componentDidMount() {
    this.props.getADoctor(this.props.match.params.id);
  }

  specList(specialties) {
    return specialties.join(', ');
  }

  checkDate() {
    return getDay(0).toString().slice(0, 15) === this.state.today.toString().slice(0, 15);
  }

  moveLeft() {
    const newOffset = this.state.currentOffset - 4;
    let baseOffset = this.state.baseOffset;
    const days = getDayRange(newOffset);
    if (newOffset <= this.state.currentOffset - 12) {
      baseOffset -= 12;
    }
    this.setState({
      baseOffset: baseOffset,
      currentOffset: newOffset,
      today: days[0],
      tomorrow: days[1],
      dayAfter: days[2],
      dayFour: days[3]
    });
  }

  moveRight() {
    const newOffset = this.state.currentOffset + 4;
    let baseOffset = this.state.baseOffset;
    const days = getDayRange(newOffset);
    if (newOffset >= this.state.originalOffset + 12) {
      baseOffset += 12;
    }
    this.setState({
      currentOffset: newOffset,
      baseOffset: baseOffset,
      today: days[0],
      tomorrow: days[1],
      dayAfter: days[2],
      dayFour: days[3]
    });
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
              daysToRender={this.state}
              moveRight={this.moveRight}
              moveLeft={this.moveLeft}
              clickable={this.checkDate()} />
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
