json.extract! doctor, :id, :first_name, :last_name, :degree, :gender, :lat, :lng

json.address Geocoder.address(doctor.to_coordinates)

json.specialties doctor.specialties.pluck(:name)

json.certifications doctor.certifications.pluck(:name)

json.appointments doctor.appointments.pluck(:id)
