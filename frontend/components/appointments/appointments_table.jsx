import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentsTable = ({ app }) => {

  return(
    <li>
      {`${app.start_time}`}
    </li>
  );
};

export default AppointmentsTable;
