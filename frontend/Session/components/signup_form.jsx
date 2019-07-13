import React from 'react';
import Errors from '../../Errors/components/errors';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      first_name: '',
      last_name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
    const user = this.state;
    this.props.signUp(user).then(() => this.props.history.push('/patient'));
  }

  render() {
    return(
      <form className ="session" onSubmit={this.handleSubmit}>
        <h3>Create an Account</h3>
        <label htmlfor="email">Email:</label>
        <input id="email"
          type="text"
          value={this.state.email}
          onChange={this.update('email')}
        />
        <label htmlfor="password">Password:</label>
        <input id="password"
          type="password"
          value={this.state.password}
          onChange={this.update('password')}
        />
        <label htmlfor="first-name">First Name:</label>
        <input id="first-name"
          type="text"
          value={this.state.first_name}
          onChange={this.update('first_name')}
          />
        <label htmlfor="last-name">Last Name:</label>
        <input id="last-name"
          type="text"
          value={this.state.last_name}
          onChange={this.update('last_name')}
          />
        <Errors errors={this.props.errors} />
        <input type="submit" value="Sign Up" />
      </form>
    );
  }
}

export default SignupForm;
