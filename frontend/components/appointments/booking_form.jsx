import React from 'react';
import moment from 'moment';
import { Errors } from '../header/shared_components';

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
        <label>Name:</label>
        <div>{`${patient.first_name} ${patient.last_name}`}</div>
        <br/>
        <label>Time:</label>
        <div>
          {`${moment(appointment.start_time)
            .format("dddd, MMMM Do YYYY, h:mm a")}`}
        </div>
        <br/>
        <label>Address:</label>
        <div>{`${appointment.address}`}</div>
        <br/>
        <label>Doctor:</label>
        <div>{`${appointment.first_name} ${appointment.last_name}`}</div>
        <br/>
        <label>Reason for visit:</label>
        <br/>
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
