import React from 'react';
import { Link } from 'react-router-dom';
import AppointmentsTable from '../../Appointments/components/appointments_table';
import { sortAppointmentsByDay } from '../../Appointments/appointment_selectors';
import { renderStars, degreeCheck } from '../../Doctors/doctor_selectors'

const SearchIndexItem = (docInfo) => {
    const { doc, apps, dates } = docInfo;
    const daySortedApps = sortAppointmentsByDay(apps, dates);
    return (
    <li className="index-item">
      <div className="doc-pic"></div>
      <div className="doc-info">
        <Link to={`/doctor/${doc.id}`}>
          {`${doc.first_name} ${doc.last_name}, ${degreeCheck(doc.degree)}`}
        </Link>
        <div>
          {`${doc.specialties[0]}`}
        </div>
        <div className="stars">
          {renderStars(doc.average_rating)}
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
