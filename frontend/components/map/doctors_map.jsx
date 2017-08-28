import React from 'react';

class DoctorsMap extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return(
      <div id="map-canvas"></div>
    );
  }
}


// Goals: doctors have a lat and lng
// This can be translated to an address with reverse geocoding.
// I want to specify and address that's translated into a geocode.
// Then I want to specify a search radius around this geocode.
// All doctors in radius will be retrieved.
// Then their coordinates will be translated to readable addresses for viewing.
// On the map I will place markers corresponding to their coordinates.
// NY: lat: 40.712784 lng: -74.005941
