import React from 'react';

class PatientProfile extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <h1 className="profile-welcome">Welcome, {this.props.user.first_name}!</h1>
    );
  }
}

export default PatientProfile;
