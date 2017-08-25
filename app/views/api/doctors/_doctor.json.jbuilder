json.extract! doctor, :first_name, :last_name, :degree, :gender, :lat, :lng

json.certification do
  json.array! doctor.certifications, :id
end

json.specialties do
  json.array! doctor.specialties, :id
end

json.appointments do
  json.array! doctor.appointments, :id
end
