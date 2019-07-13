import React from 'react';
import Errors from '../../Errors/components/errors';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
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
    this.props.logIn({user})
      .then(() => this.props.history.push('/patient'));
  }

  handleDemo(e) {
    e.preventDefault();
    const user = { email: "homer@gmail.com", password: "password" };
    this.props.logIn({user})
      .then(() => this.props.history.push('/patient'));
  }

  render() {
    return(
      <form className ="session" onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>
        <label htmlFor="email">email:</label>
        <input id="email"
          type="text"
          value={this.state.email}
          onChange={this.update('email')}
        />
        <label htmlFor="password">Password:</label>
        <input id="password"
          type="password"
          value={this.state.password}
          onChange={this.update('password')}
        />
        <Errors errors={this.props.errors} />
        <input id="password" type="submit" value="Sign in" />
        <button id="demo" onClick={this.handleDemo} to="/signup">Demo Login</button>
      </form>
    );
  }
}

export default SessionForm;
