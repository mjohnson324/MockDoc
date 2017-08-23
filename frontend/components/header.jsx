import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);

  }

  render() {
    return(
      <header>
        <Link to="/">
          <h1>MockDoc</h1>
        </Link>

        <Link to="/signin">
          Sign In
        </Link>
      </header>
    );
  }
}

export default Header;
