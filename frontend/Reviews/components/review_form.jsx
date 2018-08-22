/* eslint prefer-object-spread: "off" */
import React from 'react';
import Errors from '../../Errors/components/errors';

class ReviewForm extends React.Component {
  constructor(props) {
    super (props);
    const { review } = this.props;
    this.state = {
      overall_rating: review.overall_rating,
      wait_time: review.wait_time,
      bedside_manner: review.bedside_manner,
      body: review.body === null ? '' : review.body,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  componentDidMount() {
    const appointmentId = window.location.href.split('-')[1];
    this.props.getAppointment(appointmentId);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = this.state;
    const id = this.props.review.id;
    review["appointment_id"] = this.props.appointment.id;
    if (id !== undefined) {
      review["id"] = id;
      this.props.changeReview(review)
        .then(() => this.props.history.push('/patient'));
    } else {
      this.props.createReview(review)
        .then(() => this.props.history.push('/patient'));
    }
  }

  generateFields(field) {
    return(
      <div className="radio-display">
        {[1, 2, 3, 4, 5].map((num, idx) => {
          return(
            <div key={idx}>
              <input type="radio" 
                id={`${field}-${num}`} 
                value={num} 
                onChange={this.update(field)}
                checked={this.isCurrentValue(field, num)} />
              <label className="radio-label" htmlFor={`${field}-${num}`}>{`${num}`}</label>
            </div>
          );
        })}
      </div>
    );
  }

  isCurrentValue(field, num) {
    return `${this.state[field]}` === `${num}`;
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className="review-form">
        <h3>Leave a Review</h3>
        <label>Overall Rating:</label>
        {this.generateFields("overall_rating")}
        <label>Bedside Manner:</label>
        {this.generateFields("bedside_manner")}
        <label>Wait Time:</label>
        {this.generateFields("wait_time")}
        <label>Leave a Detailed Review Here (optional):</label>
        <textarea
          onChange={this.update('body')}
          value={this.state.body}
          ></textarea>
        <Errors errors={this.props.errors} />
        <input type="submit" value="Submit Review"/>
      </form>
    );
  }
}

export default ReviewForm;
