/* global google */
import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class DoctorsMap extends React.Component {
  constructor(props) {
    super(props);
    this.geocoder = new google.maps.Geocoder();
    this.mapRef = React.createRef();
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.setTheCenter = this.setTheCenter.bind(this);
  }

  componentDidMount () {
    this.map = new google.maps.Map(this.mapRef.current);
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
        this.map.setZoom(12);
      } else {
        alert("Geocode failed: " + status);
      }
    });
  }
  
  handleMarkerClick(doctor) {
    return this.props.history.push(`/doctor/${doctor.id}`);
  }
  
  docSearchToggle() {
    if (this.props.location.pathname.includes("/doctor/")) {
      return ["map-doc-canvas", "map-doc-container"];
    } else {
      return ["map-search-canvas", "map-search-container"];
    }
  }
  
  render () {
    return(
      <div id={this.docSearchToggle()[1]}>
        <div id={this.docSearchToggle()[0]} ref={this.mapRef}></div>
      </div>
    );
  }
}

export default withRouter(DoctorsMap);
