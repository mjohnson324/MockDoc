import React from 'react';

class Doctor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const doctor = this.props.match.params.id;
    this.props.getADoctor(doctor);
  }

  render () {
    const docId = this.props.match.params.id;
    const doctor = this.props.doctors[docId];
    return(
      <div>
        <span>
          {doctor}
        </span>
      </div>
    );
  }
}

export default Doctor;
