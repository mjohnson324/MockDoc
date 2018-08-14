import React from 'react';
import { getDayRange } from '../../util/appointment_util';
import SearchIndexItem from './search_index_item';
import DoctorsMapWrapper from '../map/doctors_map';
import { Loading, NoResultsFound } from '../header/shared_components';

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
    const filter = {
      specialty: searchParams.get('specialty'),
      address: searchParams.get('address'),
      status: this.props.filter.status,
    };
    this.props.changeFilter(filter);
    this.props.getDoctors(filter);
  }
  
  render() {   
    const { status, address, googleLoaded } = this.props.filter;
    if (status === "loading") {
      return <Loading />;
    } else if (status === "failure"){
        return <NoResultsFound />;
    } else {
      const { appointments, doctors } = this.props;
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
                  apps={appointments[doctor.id]}
                  dates={[today, tomorrow, dayAfter]} />))}
            </ul>
          </section>
          <DoctorsMapWrapper
            doctors={doctors}
            address={address}
            googleLoaded={googleLoaded}
          />
        </div>
      );
    }
  }
}

export default SearchIndex;
