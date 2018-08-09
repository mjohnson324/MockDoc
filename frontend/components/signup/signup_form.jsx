import React from 'react';
import { Errors } from '../header/shared_components';

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
      <div className="sign-up">
        <h3>Create an Account</h3>
        <form onSubmit={this.handleSubmit}>
          <br/>
          <h4>Email:</h4>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
          />
          <br/>
          <h4>Password:</h4>
          <input type="password"
            placeholder="At least 8 characters long"
            value={this.state.password}
            onChange={this.update('password')}
          />
          <br/>
          <h4>Name:</h4>
          <span>
            <input type="text"
              placeholder="First"
              value={this.state.first_name}
              onChange={this.update('first_name')}
              />
            <input type="text"
              placeholder="Last"
              value={this.state.last_name}
              onChange={this.update('last_name')}
              />
          </span>
          <br/>
          <Errors errors={this.props.errors} />
          <input type="submit" value="Sign Up" />
        </form>
      </div>
    );
  }
}

export default SignupForm;
