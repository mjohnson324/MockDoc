json.doctor do
  json.partial! "api/doctors/doctor", doctor: @doctor
  json.extract! @doctor, :education, :professional_statement
end

json.appointments do
  doc_apps = @doctor.appointments

  doc_apps.each do |appointment|
    json.set! appointment.id do
      json.partial! "api/appointments/appointment", appointment: appointment
    end
  end
end

# json.reviews do
#   doc_revs = @doctor.reviews
#
#   doc_revs.each do |review|
#     json.set! review.id do
#       json.partial! "api/reviews/review", review: review
#     end
#   end
# end
