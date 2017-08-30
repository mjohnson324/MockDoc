import React from 'react';
import { Link } from 'react-router-dom';
import AppointmentsTable from '../appointments/appointments_table';
import { filter } from 'lodash';
import moment from 'moment';

const SearchIndexItem = (docInfo) => {
    const doc = docInfo.doc;
    const apps = docInfo.apps;
    const dates = docInfo.dates;
    const daySortedApps = sortByDay(apps, dates);

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
        <AppointmentsTable apps={daySortedApps} />
      </div>
    </li>
  );
};

const sortByDay = (apps, dates) => {
  const appsByDays = [];
  dates.forEach(day => {
    appsByDays.push(filter(apps, (app) => { return(
      moment(app.start_time).format("D") === day.getDate().toString()); }
    ));
  });
  return appsByDays;
};



export default SearchIndexItem;
