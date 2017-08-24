import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentRoute: "/"
    };
  }

  componentWillReceiveProps(newProps) {
    const oldRoute = this.state.currentRoute;
    const newRoute = newProps.location.pathname;
    if (oldRoute !== newRoute) {
      this.setState({ currentRoute: newRoute });
    }
  }

  navLink() {
    if (this.props.currentUser) {
      return <button onClick={this.props.logOut}>Sign Out</button>;
    } else {
      return <Link to="/signin">Sign In</Link>;
    }
  }

  isHomePage() {
    if (this.state.currentRoute === "/") {
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
