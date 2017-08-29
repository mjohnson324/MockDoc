import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const AppointmentsTable = ({ app }) => {

  return(
    <section className="doc-schedule">
      <div>
        <li>
          {`${moment(app.start_time).format("h:mm a")}`}
        </li>
      </div>

      <div>

      </div>
      
      <div>

      </div>
    </section>
  );
};

export default AppointmentsTable;
