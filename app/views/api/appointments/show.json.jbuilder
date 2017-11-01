json.appointment do
  json.partial! "api/appointments/appointment", appointment: @appointment
  json.extract! @appointment, :reason, :patient_id
  app_doc = @appointment.doctor
  json.doctor_name "#{app_doc.first_name} #{app_doc.last_name}"
end

review = Review.where(appointment_id: @appointment.id)[0]
unless review.nil?
  json.review do
    json.partial! "api/doctors/doctor", review: @review
  end
end
