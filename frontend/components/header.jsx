import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);

    this.handleRoute = this.handleRoute.bind(this);
  }

  componentWillMount() {

  }

  navLink() {
    if (this.props.currentUser) {
      return <button >Sign Out</button>;
    } else {
      return <Link to="/login">Sign In</Link>;
    }
  }

  handleRoute(e) {

  }

  render() {
    debugger
    return(
      <header>
        <Link to="/"><h1>MockDoc</h1></Link>

        <span onClick={this.handleRoute}>
          {this.navLink()}
        </span>
      </header>
    );
  }
}

export default Header;
