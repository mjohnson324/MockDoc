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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.logIn({user});
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
        <h3>"Sign in or create an account"</h3>

        <form onSubmit={this.handleSubmit}>
          <h4>"Sign in to your MockDoc account"</h4>

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

          <input type="submit" value="Sign in" />
        </form>

        <Link to="/signup">Create an account</Link>
      </div>
    );
  }
}

export default SessionForm;
