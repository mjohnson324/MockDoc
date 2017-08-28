import React from 'react';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: { // NY default; inherit from search filter results
    lat: 40.712784,
    lng: -74.005941
  },
  zoom: 13
};

class DoctorsMap extends React.Component {
  componentDidMount () {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    this.MarkerManager.updateMarkers(this.props.doctors);
    // this.registerListeners();
  }

  componentDidUpdate () {
    this.markerManager.updateMarkers(this.props.doctors);
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
