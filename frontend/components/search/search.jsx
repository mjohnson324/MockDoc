import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    const today = new Date();

    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);

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
    const filter = this.checkParams(this.state);
    const queryURL = this.toQueryString(filter);
    this.props.changeFilter(filter);

    if (this.props.match.path !== "/") {
      this.props.getDoctors(filter)
        .then(() => this.props.history.push(`/search/?${queryURL}`));
    } else {
      this.props.history.push(`/search/?${queryURL}`);
    }
  }

  checkParams(filter) {
    if (filter.specialty === '') {
      filter.specialty = "primary care physician";
    }

    if (filter.address === '') {
      filter.address = 'New York';
    }

    return filter;
  }

  toQueryString(filter) {
    let parts = [];
    for (let param in filter) {
      if (filter.hasOwnProperty(param)) {
          parts.push(
            `${encodeURIComponent(param)}=${encodeURIComponent(filter[param])}`
          );
      }
    }
    return parts.join('&');
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
          placeholder="Address"
          value={this.state.address}
          onChange={this.update('address')} />

        <input type="submit" value="Search"/>
      </form>
    );
  }
}

export default Search;
