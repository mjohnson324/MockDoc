import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super (props);
      this.state = {
        overall_rating: '',
        wait_time: '',
        bedside_manner: '',
        body: '',
      };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
    const appointmentId = window.location.href.split('-')[1];
    this.props.getAppointment(appointmentId);
  }

  componentWillReceiveProps(nextProps) {
    const review = nextProps.review;
    if (review !== undefined) {
      this.setState({
        overall_rating: review.overall_rating,
        wait_time: review.wait_time,
        bedside_manner: review.bedside_manner,
        body: (review.body === null ? '' : review.body),
      });
    }
  }

  componentWillUnmount () {
    this.props.clearState();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = this.state;
    review["appointment_id"] = this.props.appointment.id;
    review["doctor_id"] = this.props.appointment.doctor_id;
    if (this.props.review !== undefined) {
      review["id"] = this.props.review.id;
      this.props.changeReview(review)
      .then(() => this.props.history.push('/patient'));
    } else {
      this.props.createReview(review)
      .then(() => this.props.history.push('/patient'));
    }
  }

  renderErrors() {
    return(
      <ul className="error">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { appointment, review } = this.props;
    // review.overall_rating, review.bedside_manner, review.wait_time,
    // (review.body === null ? '' : review.body)
    if (appointment) {
      return(
        <form onSubmit={this.handleSubmit} className="review-form">
          <h3>Leave a Review</h3>
          <label>Overall Rating:</label>
          <input type="text"
            placeholder="type an integer, 1 to 5"
            value={this.state.overall_rating}
            onChange={this.update('overall_rating')}
            />
          <br/>
          <label>Bedside Manner:</label>
          <input type="text"
            placeholder="type an integer, 1 to 5"
            value={this.state.bedside_manner}
            onChange={this.update('bedside_manner')}
            />
          <br/>
          <label>Wait Time:</label>
          <input type="text"
            placeholder="type an integer, 1 to 5"
            value={this.state.wait_time}
            onChange={this.update('wait_time')}
          />
          <br/>
          <label>Leave a Detailed Review Here (optional):</label>
          <textarea
            onChange={this.update('body')}
            value={this.state.body}
            ></textarea>
          <br/>
          {this.renderErrors()}
          <input type="submit" value="Submit Review"/>
        </form>
      );
    } else {
      return <section />;
    }
  }
}

export default ReviewForm;
