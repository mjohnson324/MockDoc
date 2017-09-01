import React from 'react';
import moment from 'moment';
import { filter } from 'lodash';
import { Link } from 'react-router-dom';

export const getDayRange = () => {
  const cY = moment().get('year');
  const cM = moment().get('month');
  const cD = moment().get('date');
  const cH = moment().get('hour');
  const today = moment().year(cY).month(cM).date(cD).hour(cH);
  const tomorrow = moment().year(cY).month(cM).date(cD + 1).hour(23);
  const dayAfter = moment().year(cY).month(cM).date(cD + 2).hour(23);
  const dayFour = moment().year(cY).month(cM).date(cD + 3).hour(23);

  return [today._d, tomorrow._d, dayAfter._d, dayFour._d];
};

export const DisplayDayAppointments = ({ day }) => {
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
