@doctors.each do |doctor|
  json.set! doctor.id do
    json.partial! "api/doctors/doctor", doctor: doctor
  end
end
