json.partial! "api/appointments/appointment", appointment: @appointment

json.doctor @appointment.doctor.pluck(:name, :address)
