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
      return this.checkSignIn(location.pathname);
    }
  }
  
  isNotProfile(path) {
    if (path !== "/patient") {
      return <Link className="header-profile" to="/patient">Profile</Link>;
    }
  }
  
  checkSignIn(path) {
    if (path === "/signin") {
      return <Link to="/signup">Sign Up</Link>;
    } else if (path === "/signup") {
      return <Link to="/signin">Sign In</Link>;
    } else {
      return(
        <React.Fragment>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </React.Fragment>
      );
    }
  }

  isHomePage() {
    if (this.props.location.pathname === "/") {
    return(
      <React.Fragment>
        <div className="landing-logo">
          <div id="logo" />
          <h1>MockDoc</h1>
        </div>
      </React.Fragment>
    );
    } else {
      return <Link className="no-extra-blue" to="/"><h1>MockDoc</h1></Link>;
    }
  }

  render() {
    return(
      <header className="head-home">
        <div className="home-display">
          {this.isHomePage()}
          <nav>{this.navLinks()}</nav>
        </div>
      </header>
    );
  }
}

export default Header;
