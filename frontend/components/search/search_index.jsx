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

  componentDidMount() {
    this.props.getDoctors(this.props.filter);
  }

  render() {
    const { doctors } = this.props;

    return(
      <div className="search-master">
        <SearchContainer />

        <section className="search-results">
          <div className="appointment-scroll">
            <button>L</button>
            <div>Day 1</div>
            <div>Day 2</div>
            <div>Day 3</div>
            <button>R</button>
          </div>

          <ul>
            {doctors.map(doctor => <SearchIndexItem key={doctor.id} doc={doctor} />)}
          </ul>
        </section>

        <DoctorsMap
          doctors={doctors}
          address={this.props.filter.address}
        />
      </div>
    );
  }
}

export default SearchIndex;
