import React from 'react';
import moment from 'moment';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const appId = this.props.match.params.id;
    this.props.getAppointment(appId);
  }

  render() {
    const { appointment, patient } = this.props;

    if (appointment) {
      return(
        <form className="booking-form">
          <h3>Review and Book</h3>

          <label>Name:
            <div>{`${patient.first_name} ${patient.last_name}`}</div>
          </label>
          <br/>

          <label>Time:
            <div>
              {`${moment(appointment.start_time)
                .format("dddd, MMMM Do YYYY, h:mm a")}`}
              </div>
          </label>
          <br/>

          <label>Address:
            <div>{`${appointment.address}`}</div>
          </label>
          <br/>

          <label>Doctor:
            <div>`${appointment.doctor_name}`</div>
          </label>
          <br/>

          <label>Reason for visit:
            <textarea onChange={this.update('body')}></textarea>
          </label>


          <input type="submit"></input>
        </form>
      );
    } else {
      return <section/>;
    }
  }
}

export default BookingForm;
