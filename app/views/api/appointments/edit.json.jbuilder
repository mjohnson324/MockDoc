json.partial! "api/appointments/appointment", appointment: @ppointment

json.extract! @appointment, :reason, :patient_id

json.doctor @appointment.doctor.pluck(:name, :address)
