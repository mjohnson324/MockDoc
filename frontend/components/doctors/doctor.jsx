import React from 'react';

class Doctor extends React.Component {
  constructor(props) {
    super(props);

    this.certList = this.certList.bind(this);
    this.specList = this.specList.bind(this);
  }

  componentWillMount () {
    const doctor = this.props.match.params.id;
    this.props.getADoctor(doctor);
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
    const docId = this.props.match.params.id;
    const doctor = this.props.doctors[docId];
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
            <label>GPS Coordinates (map coming soon!): </label>
            {`${doctor.lat}, ${doctor.lng}`}
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
            </div>
            <p>
            </p>
          </section>
        </section>
      );
    } else {
        return <section/>;
    }
  }
}

export default Doctor;
