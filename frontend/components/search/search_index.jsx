import React from 'react';
import { getDayRange } from '../../util/appointment_util';
import { sortAppointmentsByDoctor } from '../../reducers/selectors';
import SearchIndexItem from './search_index_item';
import DoctorsMap from '../map/doctors_map';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    const days = getDayRange();
    this.state = {
      today: days[0],
      tomorrow: days[1],
      dayAfter: days[2],
    };
  }

  componentDidMount() {
    const queryString = "?".concat(window.location.href.split('?')[1]);
    const searchParams = new URLSearchParams(queryString);

    const filters = {
      specialty: searchParams.get('specialty'),
      address: searchParams.get('address'),
    };

    this.props.getDoctors(filters);
  }

  render() {
    const { doctors, appointments } = this.props;
    const docSortedAppointments = sortAppointmentsByDoctor(
      doctors, appointments
    );
    const { today, tomorrow, dayAfter }  = this.state;
    return(
      <div className="search-master">
        <section className="search-results">
          <div className="appointment-scroll">
            <button>{'\u{1f844}'}</button>
            <div>{`${today}`.slice(0, 10)}</div>
            <div>{`${tomorrow}`.slice(0, 10)}</div>
            <div>{`${dayAfter}`.slice(0, 10)}</div>
            <button className="right-button">{'\u{1f846}'}</button>
          </div>

          <ul>
            {doctors.map(doctor => (
              <SearchIndexItem
                key={doctor.id}
                doc={doctor}
                apps={docSortedAppointments[doctor.id]}
                dates={[today, tomorrow, dayAfter]} />))}
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
