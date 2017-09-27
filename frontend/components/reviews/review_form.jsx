import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super (props);

    this.state = {
      overall_rating: 0,
      wait_time: 0,
      bedside_manner: 0,
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = this.state;
    this.props.createReview({review})
      .then(() => this.props.history.push('/patient'));
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
    return(
      <form>
        <h3>Leave a Review</h3>
        <input></input>
        <br/>
        <input></input>
        <br/>
        <input></input>
        <br/>
        <input onSubmit={this.handleSubmit}/>
      </form>
    );
  }
}

export default ReviewForm;
