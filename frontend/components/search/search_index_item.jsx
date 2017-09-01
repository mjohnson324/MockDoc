import React from 'react';
import { Link } from 'react-router-dom';
import AppointmentsTable from '../appointments/appointments_table';
import { sortAppointmentsByDay } from '../../reducers/selectors';

const SearchIndexItem = (docInfo) => {
    const { doc, apps, dates } = docInfo;
    const daySortedApps = sortAppointmentsByDay(apps, dates);

    return (
    <li className="index-item">
      <div className="doc-pic"></div>

      <div className="doc-info">
        <Link to={`/doctor/${doc.id}`}>
          {`${doc.first_name} ${doc.last_name}, ${doc.degree}`}
        </Link>
        <div>
          {`${doc.specialties[0]}`}
        </div>
        <section>
          <div>{`${doc.address}`}</div>
        </section>
      </div>

      <div className="doc-search-schedule">
        <AppointmentsTable appsByDays={daySortedApps} />
      </div>
    </li>
  );
};

export default SearchIndexItem;
