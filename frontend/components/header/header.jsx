import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  navLink() {
    if (this.props.currentUser) {
      if (this.props.location.pathname === '/patient') {
        return(
          <nav>
            <button onClick={this.props.logOut}>Sign Out</button>
          </nav>
        );
      } else {
        return(
          <nav>
            <Link className="header-profile" to="/patient">Profile</Link>
            <button onClick={this.props.logOut}>Sign Out</button>
          </nav>
        );
      }
    } else {
      if (this.props.location.pathname === '/signin' ||
          this.props.location.pathname === '/createuser') {
            return <div></div>;
          } else {
            return <Link to="/signin">Sign In</Link>;
          }
    }
  }

  isHomePage() {
    if (this.props.location.pathname === "/") {
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (this.isHomePage()) {
      return(
        <div className="home">
          <header className="head-home">
            <h1>MockDoc: You get what you pay for</h1>
            <nav>{this.navLink()}</nav>
          </header>
          <h2>Search for doctors, book appointments, get free healthcare. Simple.*</h2>
          <p>*This app is for demo purposes only. Any and all doctors listed are purely fictional.</p>
        </div>
      );
    } else {
      return(
        <header className="head">
          <Link className="no-extra-blue" to="/"><h1>MockDoc</h1></Link>
          <nav>
            {this.navLink()}
          </nav>
        </header>
      );
    }
  }
}

export default Header;
