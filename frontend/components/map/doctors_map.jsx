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

    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick);
    this.MarkerManager.updateMarkers(this.props.doctors);
    // this.registerListeners();
  }

  componentDidUpdate () {
    this.markerManager.updateMarkers(this.props.doctors);
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
    this.props.history.push(`doctors/${doctor.id}`);
  }

 //  registerListeners() {
 //   google.maps.event.addListener(this.map, 'idle', () => {
 //     const { north, south, east, west } = this.map.getBounds().toJSON();
 //     const bounds = {
 //       northEast: { lat:north, lng: east }, // calculate using map center
 //       southWest: { lat: south, lng: west } }; // calculate using map center
 //     this.props.updateFilter('bounds', bounds);
 //   });
 // }

  render () {
    return(
      <div id="map-canvas" ref="map"></div>
    );
  }
}

export default withRouter(DoctorsMap);
