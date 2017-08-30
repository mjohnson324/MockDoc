import React from 'react';
import { Link } from 'react-router-dom';
import { filter } from 'lodash';

import SearchIndexItem from './search_index_item';
import SearchContainer from './search_container';
import DoctorsMap from '../map/doctors_map';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);

    const today = new Date();

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);

    this.state = {
      today: today,
      tomorrow: tomorrow,
      dayAfter: dayAfter,
    };
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
            <button>R</button>
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