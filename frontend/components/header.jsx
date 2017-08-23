import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);

    this.handleRoute = this.handleRoute.bind(this);
  }

  navLink() {
    if (this.props.currentUser) {
      return <button >Sign Out</button>;
    } else {
      return <Link to="/login">Sign In</Link>;
    }
  }

  render() {
    return(
      <header>
        <Link to="/"><h1>MockDoc</h1></Link>

        <span>
          {this.navLink()}
        </span>
      </header>
    );
  }
}

export default Header;
