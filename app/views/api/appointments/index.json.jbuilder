@appointments.each do |appointment|
  json.set! appointment.id do
    json.partial! "api/appointments/appointment", appointment: appointment
  end
end
