import React from 'react';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const appId = this.props.match.params.id;
    this.props.getAppointment(appId);
  }

  render() {
    return(
      <form>
        <h3>Review and Book</h3>
        <label>Name:</label>
        <label>Time:</label>
        <label>Address:</label>
        <label>Doctor:</label>
        <label>Reason for visit:</label>
      </form>
    );
  }
}

export default BookingForm;
