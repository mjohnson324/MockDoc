import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export const AppointmentsDayDisplay = ({ day }) => {
  return(
    <ul>
      {day.map(app => (
        <li key={app.id}>
          <Link to={`/booking/${app.id}`}>
            {`${moment(app.start_time).format("h:mm a")}`}
          </Link>
        </li>))}
    </ul>
  );
};
