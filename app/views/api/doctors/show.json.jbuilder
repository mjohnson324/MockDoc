json.doctor do
  json.partial! "api/doctors/doctor", doctor: @doctor
  json.extract! @doctor, :education, :professional_statement
end

one_week = day_range(6)

json.appointments do
  doc_apps = @doctor.appointments.where(start_time: one_week, patient_id: nil)

  doc_apps.each do |appointment|
    json.set! appointment.id do
      json.partial! "api/appointments/appointment", appointment: appointment
    end
  end
end



# json.reviews @doctor.reviews.pluck(:id)
