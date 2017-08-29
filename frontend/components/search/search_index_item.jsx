import React from 'react';
import { Link } from 'react-router-dom';
import AppointmentsTable from '../appointments/appointments_table';

const SearchIndexItem = (docInfo) => {
    const doc = docInfo.doc;
    const apps = docInfo.apps;
    return (
    <li className="index-item">
      <div className="doc-pic">Profile photo (coming soon)</div>

      <div className="doc-info">
        <Link to={`/doctor/${doc.id}`}>
          {`${doc.first_name} ${doc.last_name}, ${doc.degree}`}
        </Link>
        <div>
          {`${doc.specialties[0]}`}
        </div>
        <section>
          <div>{`${doc.address}`}</div>
          <div>(Distance from location)</div>
        </section>
      </div>
      
      <div>
        <AppointmentsTable apps={apps} />
      </div>
    </li>
  );
};


export default SearchIndexItem;
