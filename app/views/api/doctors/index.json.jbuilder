json.doctors do
  @doctors.each do |doctor|
    json.set! doctor.id do
      json.partial! "api/doctors/doctor", doctor: doctor
    end
  end
end

one_week = day_range(6)

json.appointments do
  @doctors.each do |doctor|
    doc_apps = doctor.appointments.where(patient_id: nil, start_time: one_week)

    doc_apps.each do |appointment|
      json.set! appointment.id do
        json.partial! "api/appointments/appointment", appointment: appointment
      end
    end
    
  end
end
