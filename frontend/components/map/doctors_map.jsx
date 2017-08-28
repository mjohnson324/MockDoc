import React from 'react';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

class DoctorsMap extends React.Component {
  constructor(props) {
    super(props);
    this.geocoder = new google.maps.Geocoder();

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.setTheCenter = this.setTheCenter.bind(this);
  }

  componentDidMount () {
    const map = this.refs.map;
    this.map = new google.maps.Map(map);
    this.setTheCenter();

    this.markerManager = new MarkerManager(this.map, this.handleMarkerClick);
    this.markerManager.updateMarkers(this.props.doctors);

  }

  componentDidUpdate () {
    return this.markerManager.updateMarkers(this.props.doctors);
  }

  setTheCenter() {
    this.geocoder.geocode({address: `${this.props.address}`}, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const coordinates = results[0].geometry.location;
        this.map.setCenter(coordinates);
        this.map.setZoom(11);
      } else {
        alert("Geocode failed: " + status);
      }
    });
  }

  handleMarkerClick(doctor) {
    return this.props.history.push(`doctor/${doctor.id}`);
  }



  render () {
    return(
      <div id="map-container">
        <div id="map-canvas" ref="map"></div>
      </div>
    );
  }
}

export default withRouter(DoctorsMap);
