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
          <h2>Search for doctors, book appointments, get free healthcare. Simple.</h2>
          <h3>Healthcare isn't cheap, yet medical errors are among</h3>
          <h3>the <b>top 10</b> causes of death in the United States.</h3>
          <p>We at Mockdoc believe patients should get their money's worth.</p>
          <p>To that end we set a up a site where patients can search for free care from doctors.</p>
          <p>That's right, we offer <b>FREE</b> healthcare.</p>
          <p>We can't promise the service is any good (or that it's provided by real doctors),</p>
          <p>but we guarantee you won't owe us or the physician a dime.</p>
          <p>After all, if the service is lousy why pay for it?</p>
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
