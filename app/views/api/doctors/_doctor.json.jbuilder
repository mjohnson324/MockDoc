json.extract! doctor, :id, :first_name, :last_name, :degree, :gender, :lat, :lng

doctor_reviews = doctor.reviews

json.address doctor.get_address
json.specialties doctor.specialties.pluck(:name)
json.certifications doctor.certifications.pluck(:name)

json.appointment_ids doctor.appointments.pluck(:id)
json.review_ids doctor_reviews.pluck(:id)

all_review_ratings = doctor_reviews.pluck(:overall_rating)
json.average_rating all_review_ratings.reduce(:+) /
                    all_review_ratings.length.to_f
