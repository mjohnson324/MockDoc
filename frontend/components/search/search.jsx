import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      specialty: '',
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
    this.props.updateFilter(filter);
  }

  render () {
    return(
      <form onChange="handleSubmit">
        <input type="text"
          placeholder="Specialty"
          value={this.state.specialty}
          onChange={this.update('specialty')} />

        <input type="submit" value="Search"/>
      </form>
    );
  }
}

export default Search;
