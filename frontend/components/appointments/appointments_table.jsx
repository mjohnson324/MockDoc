import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const AppointmentsTable = ({ apps }) => {

  return(
    <section className="doc-schedule">
      <ul>
        {apps[0].map(app => (
        <li key={app.id}>
          {`${moment(app.start_time).format("h:mm a")}`}
        </li>))}
      </ul>

      <ul>
        {apps[1].map(app => (
        <li key={app.id}>
          {`${moment(app.start_time).format("h:mm a")}`}
        </li>))}
      </ul>

      <ul>
        {apps[2].map(app => (
        <li key={app.id}>
          {`${moment(app.start_time).format("h:mm a")}`}
        </li>))}
      </ul>
    </section>
  );
};

export default AppointmentsTable;
