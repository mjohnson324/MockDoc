import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  navLink() {
    if (this.props.currentUser) {
      return <button onClick={this.props.logOut}>Sign Out</button>;
    } else {
      return <Link to="/signin">Sign In</Link>;
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
            <Link to="/"><h2>MockDoc</h2></Link>

            <nav>{this.navLink()}</nav>
          </header>

          <h1 className="home">Need a doctor? You're in the right place! </h1>
        </div>
      );
    } else {
      return(
        <header className="head">
          <Link to="/"><h1>MockDoc</h1></Link>

          <nav>
            {this.navLink()}
          </nav>
        </header>
      );
    }
  }
}

export default Header;
