import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink() {
    if (this.props.formType === 'logIn') {
      return <Link to="/signup">Create an account</Link>;
    } else {
      return <Link to="/login">Sign in</Link>;
    }
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
    const submitText = this.props.formType === 'logIn' ?
      "Sign in" : "Create Account";
    return(
      <div>
        "Sign in or create an account"
        <form onSubmit={this.handleSubmit}>
          "Sign in to your MockDoc account"
          {this.renderErrors()}
          <br/>
          <input type="text"
            placeholder="email"
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

          <input type="submit" value={`${submitText}`} />
        </form>
      </div>
    );
  }
}

export default SessionForm;
