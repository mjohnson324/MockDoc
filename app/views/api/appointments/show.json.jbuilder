json.partial! "api/appointments/appointment", appointment: @appointment

json.extract! @appointment, :reason, :patient_id

app_doc = @appointment.doctor

json.address app_doc.get_address

json.doctor_name "#{app_doc.first_name} #{app_doc.last_name}"
