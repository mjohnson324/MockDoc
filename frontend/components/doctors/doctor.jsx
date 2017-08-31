import React from 'react';
import DoctorsMap from '../map/doctors_map';

import { sortAppointmentsByDoctor } from '../appointments/appointment_helpers';
import DoctorAppointments from './doctor_appointments';

class Doctor extends React.Component {
  constructor(props) {
    super(props);

    this.certList = this.certList.bind(this);
    this.specList = this.specList.bind(this);
  }

  componentWillMount () {
    const doctor = this.props.match.params.id;
    this.props.getADoctor(doctor);
    this.props.
  }

  certList(certifications) {
    return certifications.map((certification, idx) => {
      return(<li key={idx}>{`${certification}`}</li>);
    });
  }

  specList(specialties) {
    return specialties.map((specialty, idx) => {
      return(<li key={idx}>{`${specialty}`}</li>);
    });
  }

  render () {
    const apps = this.props.appointments;
    const docId = this.props.match.params.id;
    const doctor = this.props.doctors[docId];
    const docApps = sortAppointmentsByDoctor([doctor], apps);
    if (doctor) {
      return(
        <section>
          <div className="docTitle">
            <h1>
              {`Dr. ${doctor.first_name} ${doctor.last_name}, ${doctor.degree}`}
            </h1>
            <div>{`${doctor.specialties[0]}`}</div>
          </div>

          <div className="docMap">
            <DoctorsMap
              doctors={[doctor]}
              address={doctor.address}
            />
          </div>

          <section className="docProfile">
            <h2>Qualifications and Experience</h2>
            <div>
              <ol>
                <label>Education:</label>
                <ul>{`${doctor.education}`}</ul>
              </ol>
              <ol>
                <label>Board Certifications:</label>
                <ul>{this.certList(doctor.certifications)}</ul>
              </ol>
              <ol>
                <label>Specialties:</label>
                <ul>{this.specList(doctor.specialties)}</ul>
              </ol>
              <ol>
                <label>Address:</label>
                <ul><li>{`${doctor.address}`}</li></ul>
              </ol>
            </div>
            <p>
            </p>
          </section>

          <DoctorAppointments
            apps={docApps[doctor.id]}
            address={`${doctor.address}`} />
        </section>
      );
    } else {
        return <section/>;
    }
  }
}

export default Doctor;
