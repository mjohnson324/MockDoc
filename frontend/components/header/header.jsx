import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  navLinks() {
    const { currentUser, location, logOut } = this.props;
    if (currentUser !== null) { 
      return(
        <React.Fragment>
          {this.isNotProfile(location.pathname)}
          <button onClick={logOut}>Sign Out</button>
        </React.Fragment>
      );
    } else {
      return( 
        <React.Fragment>
          <Link to="/signin">Sign In</Link>
          <Link to="/createuser">Sign Up</Link>
        </React.Fragment>
      );
    }
  }

  isNotProfile(path) {
    if (path !== '/patient') {
      return <Link className="header-profile" to="/patient">Profile</Link>;
    }
  }

  isHomePage() {
    if (this.props.location.pathname === "/") {
      return <img id="logo" alt="logo" />;
    } else {
      return <Link className="no-extra-blue" to="/"><h1>MockDoc</h1></Link>;
    }
  }

  render() {
    return(
      <header className="head-home">
        {this.isHomePage()}
        <nav>{this.navLinks()}</nav>
      </header>
    );
  }
}

export default Header;
