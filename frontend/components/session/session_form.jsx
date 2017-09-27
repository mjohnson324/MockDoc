import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
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
    const user = this.state;
    this.props.logIn({user})
      .then(() => this.props.history.push('/patient'));
  }

  handleDemo(e) {
    e.preventDefault();
    const user = { email: "homer@gmail.com", password: "long_password" };
    this.props.logIn({user})
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
      <div className="session">
        <h3>Sign In</h3>
        <br/>

        <form onSubmit={this.handleSubmit}>

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

          {this.renderErrors()}

          <input type="submit" value="Sign in" />
          <h4>New to MockDoc?</h4>
        </form>
        <Link to="/createuser">Create an account</Link>
        <button onClick={this.handleDemo} to="/createuser">Demo Login</button>
      </div>
    );
  }
}

export default SessionForm;
