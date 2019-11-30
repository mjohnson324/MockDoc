import React from 'react';
import DoctorsMapWrapper from '../../Doctors/components/doctors_map';
import { getDayRange, getDay } from '../../Doctors/doctor_utils';
import { Loading, NoResultsFound } from './loading_status';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
    const days = getDayRange(0);
    this.state = {
      baseOffset: 0,
      currentOffset: 0,
      firstDay: days[0],
      secondDay: days[1],
      thirdDay: days[2],
    };

    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.checkDate = this.checkDate.bind(this);
    this.getFilter = this.getFilter.bind(this);
  }

  componentDidMount() {
    const filter = this.getFilter();
    this.props.changeFilter(filter);
    this.props.getDoctors(filter);
  }

  getFilter(offset = 0) {
    const queryString = "?".concat(window.location.href.split('?')[1]);
    const searchParams = new URLSearchParams(queryString);
    return({
      specialty: searchParams.get('specialty'),
      address: searchParams.get('address'),
      status: this.props.filter.status,
      day: getDay(offset),
    });
  }

  moveLeft() {
    const newOffset = this.state.currentOffset - 3;
    let baseOffset = this.state.baseOffset;
    const days = getDayRange(newOffset);
    if (newOffset < this.state.currentOffset) {
      baseOffset -= 12;
      const filter = this.getFilter(-12);
      this.props.changeFilter(filter);
      this.props.getDoctors(filter);
    }
    this.setState({
      baseOffset: baseOffset,
      currentOffset: newOffset,
      firstDay: days[0],
      secondDay: days[1],
      thirdDay: days[2],
    });
  }

  moveRight() {
    const newOffset = this.state.currentOffset + 3;
    let baseOffset = this.state.baseOffset;
    const days = getDayRange(newOffset);
    if (newOffset >= this.state.originalOffset + 12) {
      baseOffset += 12;
      const filter = this.getFilter(12);
      this.props.changeFilter(filter);
      this.props.getDoctors(filter);
    }
    this.setState({
      currentOffset: newOffset,
      baseOffset: baseOffset,
      firstDay: days[0],
      secondDay: days[1],
      thirdDay: days[2],
    });
  }

  // disables checking earlier days if the earliest day on display is today
  checkDate() {
    return getDay(0).toString().slice(0, 15) === this.state.firstDay.toString().slice(0, 15);
  }

  render() {
    const { status, address, googleLoaded } = this.props.filter;
    if (status === "loading") {
      return <Loading />;
    } else if (status === "failure"){
        return <NoResultsFound />;
    } else {
      const { appointments, doctors } = this.props;
      const { firstDay, secondDay, thirdDay }  = this.state;
      return(
        <div className="search-master">
          <section className="search-results">
            <div className="appointment-scroll">
              <button disabled={this.checkDate()} onClick={this.moveLeft}>&#8592;</button>
              <div>{`${firstDay}`.slice(0, 10)}</div>
              <div>{`${secondDay}`.slice(0, 10)}</div>
              <div>{`${thirdDay}`.slice(0, 10)}</div>
              <button onClick={this.moveRight}>&#8594;</button>
            </div>
            <ul>
              {doctors.map(doctor => (
                <SearchIndexItem
                  key={doctor.id}
                  doc={doctor}
                  apps={appointments[doctor.id]}
                  dates={[firstDay, secondDay, thirdDay]} />))}
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
