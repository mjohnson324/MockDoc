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
      return "head-home";
    } else {
      return "head";
    }
  }

  render() {
    return(
      <header className={this.isHomePage()}>
        <Link to="/"><h1>MockDoc</h1></Link>

        <span>
          {this.navLink()}
        </span>
      </header>
    );
  }
}

export default Header;
