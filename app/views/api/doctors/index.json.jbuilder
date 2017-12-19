json.doctors do
  @doctors.each do |doctor|
    json.set! doctor.id do
      json.extract! doctor, :id,
                            :first_name,
                            :last_name,
                            :degree,
                            :gender,
                            :lat,
                            :lng
      json.address doctor.get_address
      json.average_rating @average_ratings[doctor.id]
      json.specialties doctor.specialties.to_a.map(&:name)
      json.certifications doctor.certifications.to_a.map(&:name)
      json.appointment_ids @doctor_appointments[doctor.id].to_a.map(&:id)
    end
  end
end

json.appointments do
  @doctors.each do |doctor|
    @doctor_appointments[doctor.id].each do |appointment|
      json.set! appointment.id do
        json.extract! appointment, :id, :doctor_id, :start_time, :address
      end
    end
  end
end
