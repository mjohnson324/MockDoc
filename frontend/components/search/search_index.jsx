import React from 'react';
import { Link } from 'react-router-dom';
import { filter } from 'lodash';
import moment from 'moment';

import SearchIndexItem from './search_index_item';
import SearchContainer from './search_container';
import DoctorsMap from '../map/doctors_map';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);

    const days = this.getThreeDayRange();

    this.state = {
      today: days[0],
      tomorrow: days[1],
      dayAfter: days[2],
    };
  }

  getThreeDayRange() {
    const cY = moment().get('year');
    const cM = moment().get('month');
    const cD = moment().get('date');
    const cH = moment().get('hour');
    const today = moment().year(cY).month(cM).date(cD).hour(cH);
    const tomorrow = moment().year(cY).month(cM).date(cD + 1).hour(23);
    const dayAfter = moment().year(cY).month(cM).date(cD + 2).hour(23);

    return [today._d, tomorrow._d, dayAfter._d];
  }

  componentDidMount() {
    const queryString = "?".concat(window.location.href.split('?')[1]);
    const searchParams = new URLSearchParams(queryString);
    // this.state.today.toString().split(" G")[0]

    const filters = {
      specialty: searchParams.get('specialty'),
      address: searchParams.get('address'),
      startTime: this.state.today,
      endTime: this.state.dayAfter
    };

    this.props.getDoctors(filters);
    this.props.getAppointments(filters);
  }

  sortAppointmentsByDoctor (doctors) {
    const appointments = this.props.appointments;
    const sortedAppointments = {};
    doctors.forEach(doctor => {
      sortedAppointments[doctor.id] = filter(appointments, ['doctor_id', doctor.id]);
    });

    return sortedAppointments;
  }

  render() {
    const { doctors } = this.props;
    const appointments = this.sortAppointmentsByDoctor(doctors);
    const today = this.state.today;
    const tomorrow = this.state.tomorrow;
    const dayAfter = this.state.dayAfter;

    return(
      <div className="search-master">
        <SearchContainer />

        <section className="search-results">
          <div className="appointment-scroll">
            <button>L</button>
            <div>{`${today}`.slice(0, 10)}</div>

            <div>{`${tomorrow}`.slice(0, 10)}</div>

            <div>{`${dayAfter}`.slice(0, 10)}</div>
            <button className="right-button">R</button>
          </div>

          <ul>
            {doctors.map(doctor => (
              <SearchIndexItem
                key={doctor.id}
                doc={doctor}
                apps={appointments[doctor.id]}
                dates = {[today, tomorrow, dayAfter]} />))}
          </ul>
        </section>

        <DoctorsMap
          doctors={doctors}
          address={this.props.filters.address}
        />
      </div>
    );
  }
}

export default SearchIndex;
