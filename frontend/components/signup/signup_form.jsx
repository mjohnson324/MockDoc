import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signUp({user});
  }

  renderErrors() {
    return(
      <ul>
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
      <div>
        <h3>"Create an account"</h3>
        <Link to="/signin">Already have one? Sign in.</Link>

        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <br/>

          <input type="text"
            placeholder="Email address"
            value={this.state.email}
            onChange={this.update('email')}
          />
          <br/>

          <input type="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.update('password')}
          />
          <br/>

          <input type="text"
            placeholder="First"
            value={this.state.password}
            onChange={this.update('password')}
          />
          <br/>

          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

export default SessionForm;
