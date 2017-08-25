@doctors.each do |doctor|
  json.set! doctor.id do
    json.extract!
  end
end
