/* global google */
class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(doctors){
    const doctorsObj = {};
    doctors.forEach(doctor => { doctorsObj[doctor.id] = doctor;} );
    doctors
      .filter(doctor => !this.markers[doctor.id])
      .forEach(newDoc => this.createMarkerFromDoctor(newDoc, this.handleClick));
    Object.keys(this.markers)
      .filter(doctorId => !doctorsObj[doctorId])
      .forEach((doctorId) => this.removeMarker(this.markers[doctorId]));
  }

  createMarkerFromDoctor(doctor) {
    const position = new google.maps.LatLng(doctor.lat, doctor.lng);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      doctorId: doctor.id
    });
    marker.addListener('click', () => this.handleClick(doctor));
    this.markers[marker.doctorId] = marker;
  }
  
  removeMarker(marker) {
    this.markers[marker.doctorId].setMap(null);
    delete this.markers[marker.doctorId];
  }
}

export default MarkerManager;
