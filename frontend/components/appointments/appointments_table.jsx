import React from 'react';
import { Link } from 'react-router-dom';

const AppointmentsTable = ({ app }) => {
  return(
    <li>
      {`${app}`}
    </li>
  );
};

export default AppointmentsTable;
