import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty, sortBy } from 'lodash';

import SearchIndexItem from './search_index_item';
import SearchContainer from './search_container';
import DoctorsMap from '../map/doctors_map';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, NextState) {
    debugger
  }
  
  render() {
    const { doctors } = this.props;

    if (isEmpty(doctors)) {
      return(
        <div>
          <SearchContainer />
          <h1>Sorry, no matches found.</h1>
        </div>
      );
    } else {
      return(
        <div>
          <SearchContainer />

          <section className="search-results">
            <div className="appointment-scroll">
              <button>left-arrow</button>
              <div>Day 1</div>
              <div>Day 2</div>
              <div>Day 3</div>
              <button>right-arrow</button>
            </div>

            <ul>
              {doctors.map(doctor => <SearchIndexItem key={doctor.id} doc={doctor} />)}
            </ul>
          </section>

          <DoctorsMap
            doctors={this.props.doctors}
            address={this.props.address}
          />
        </div>
      );
    }
  }
}

export default SearchIndex;
