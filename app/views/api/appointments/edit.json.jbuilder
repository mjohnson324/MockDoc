json.partial! "api/appointments/appointment", appointment: @ppointment

json.extract! @appointment, :reason, :patient_id
