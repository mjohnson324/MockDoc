import React from 'react';
import moment from 'moment';
import Errors from '../../Errors/components/errors';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reason: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const appId = this.props.match.params.id;
    this.props.getAppointment(appId);
  }
  
  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      reason: this.state.reason,
      patient_id: this.props.patient.id,
      id: this.props.appointment.id,
    };

    this.props.updateAppointment(data)
      .then(() => this.props.history.push('/patient'));
  }

  render() {
    const { appointment, patient } = this.props;
    return(
      <form onSubmit={this.handleSubmit} className="booking-form">
        <h3>Review and Book</h3>
        <p><b>Name:</b> {`${patient.first_name} ${patient.last_name}`}</p>
        <p><b>Time:</b> {`${moment(appointment.start_time).format("dddd, MMMM Do YYYY, h:mm a")}`}</p>
        <p><b>Address:</b> {`${appointment.address}`}</p>
        <p><b>Doctor:</b> {`${appointment.first_name} ${appointment.last_name}`}</p>
        <label>Reason for visit:</label>
        <textarea
          onChange={this.update('reason')}
          value={this.state.reason}
          ></textarea>
        <br/>
        <Errors errors={this.props.errors} />
        <input type="submit" value="Book Appointment" />
      </form>
    );
  }
}

export default BookingForm;
