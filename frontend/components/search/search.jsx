import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      specialty: '',
      address: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const filter = this.state;
    this.props.updateFilter(filter)
      .then(() => this.props.history.push('/search'));
  }

  isHomePage() {
    if (this.props.location.pathname === "/") {
      return "search-home";
    } else {
      return "search-bar";
    }
  }

  render () {
    const searchClass = this.isHomePage();

    return(
      <form className={searchClass} onSubmit={this.handleSubmit}>
        <input type="text"
          placeholder="Specialty"
          value={this.state.specialty}
          onChange={this.update('specialty')} />

        <input type="text"
          placeholder="Adress"
          value={this.state.address}
          onChange={this.update('address')} />

        <input type="submit" value="Search"/>
      </form>
    );
  }
}

export default Search;
