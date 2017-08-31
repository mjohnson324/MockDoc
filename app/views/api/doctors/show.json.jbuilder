json.partial! "api/doctors/doctor", doctor: @doctor

json.extract! @doctor, :education, :professional_statement

json.appointments @doctor.appointments.where("start_time > ?", DateTime.now)

# json.reviews @doctor.reviews.pluck(:id)
