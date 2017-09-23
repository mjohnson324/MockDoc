json.extract! doctor, :id, :first_name, :last_name, :degree, :gender, :lat, :lng

json.address doctor.get_address
json.specialties doctor.specialties.pluck(:name)
json.certifications doctor.certifications.pluck(:name)
# json.average_rating doctor.average_rating

json.appointment_ids doctor.appointments.pluck(:id)
# json.review_ids doctor.reviews.pluck(:id)
