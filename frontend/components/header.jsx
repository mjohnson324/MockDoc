import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  navLink() {
    if (this.props.currentUser) {
      return <Link to="/logout">Sign Out</Link>;
    } else {
      return <Link to="/login">Sign In</Link>;
    }
  }

  render() {
    return(
      <header>
        <Link to="/"><h1>MockDoc</h1></Link>

        {this.navLink()}
      </header>
    );
  }
}

export default Header;
