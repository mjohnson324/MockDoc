import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);

    this.returnHome = this.returnHome.bind(this);
  }

  returnHome(e) {
    e.preventDefault();
    this.props.logOut()
      .then(currentUser => this.props.history.push('/'));
  }

  navLink() {
    if (this.props.currentUser) {
      return <button onClick={this.returnHome}>Sign Out</button>;
    } else {
      return <Link to="/signin">Sign In</Link>;
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
