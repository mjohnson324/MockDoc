import React from 'react';
import { Link } from 'react-router-dom';

import SearchIndexItem from './search_index_item';
import SearchContainer from './search_container';

class SearchIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount () {

  }

  render() {
    const { doctors } = this.props;

    return(
      <div>
        <SearchContainer />

        <section className="search-results">
          <div>

          </div>

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
      </div>
    );
  }
}

export default SearchIndex;
