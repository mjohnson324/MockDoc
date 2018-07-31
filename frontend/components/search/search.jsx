/* global google */
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specialty: 'none',
      address: '',
    };
    this.location = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.initAutocomplete = this.initAutocomplete;
    this.loadGoogleMapsAPI("https://maps.googleapis.com/maps/api/js?key=AIzaSyAlQpAcsp-Hrf3d9oABqzInGNs7n82pXvA&libraries=places&callback=initAutocomplete");
  }

  loadGoogleMapsAPI(url) {
    const ref = window.document.getElementsByTagName("script")[0];
    const script = window.document.createElement("script");
    script.src = url;
    script.charset = "utf-8";
    script.async = true;
    script.defer = true;
    ref.parentNode.insertBefore(script, ref);
  }

  initAutocomplete() {
    return new google.maps.places.Autocomplete(
      (document.getElementById('address')),
      {types: ['geocode']}
    );
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
    if (filter.specialty === 'none') {
      filter.specialty = "primary care";
    }
    filter.address = this.location.current.value;
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
        <label htmlFor="specialty-select">Specialty:</label>
        <select id="specialty-select" 
        onChange={this.update('specialty')}
        value={this.state.specialty}>
          <option value="none" disabled>Please Choose</option>
          <option value="primary care">Primary Care</option>
          <option value="pediatrics">Pediatrics</option>
          <option value="chiropractor">Chiropractor</option>
          <option value="gynecology">Gynecology</option>
          <option value="oncology">Oncology</option>
          <option value="cardiology">Cardiology</option>
          <option value="dermatology">Dermatology</option>
          <option value="gastroenterology">Digestion</option>
          <option value="neurology">Neurology</option>
          <option value="radiology">Radiology</option>
          <option value="opthalmology">Eye Doctor</option>
          <option value="surgery">Surgery</option>
          <option value="plastic surgery">Plastic Surgery</option>
          <option value="psychiatry">Mental Health</option>
          <option value="dentist">Dentist</option>
        </select>
        <label htmlFor="address">Address:</label>
        <input id="address"
          defaultValue={this.state.address} 
          type="text"
          ref={this.location} />

        <input type="submit" value="&#x1F50D;"/>
      </form>
    );
  }
}

export default Search;
