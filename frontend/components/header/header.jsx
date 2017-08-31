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
        <div>
          <header className="head-home">
            <h2>MockDoc</h2>

            <nav>{this.navLink()}</nav>
          </header>

          <h1 className="home">
            Need a doctor? Start your search here!
          </h1>

        </div>
      );
    } else {
      return(
        <header className="head">
          <Link className="no-extra-blue" to="/"><h1>MockDoc: Home</h1></Link>

          <nav>
            {this.navLink()}
          </nav>
        </header>
      );
    }
  }
}

export default Header;
