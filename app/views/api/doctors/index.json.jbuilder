json.doctors do
  @doctors.each do |doctor|
    json.set! doctor.id do
      json.partial! "api/doctors/doctor", doctor: doctor
    end
  end
end

json.appointments do
  @doctors.each do |doctor|
    doctor.appointments.each do |appointment|
      json.set! appointment.id do
        json.extract! appointment, :id,
                                   :doctor_id,
                                   :start_time,
                                   :address
      end
    end
  end
end
