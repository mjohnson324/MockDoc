@specialties.each do |specialty|
  json.set! specialty.id do
    json.extract! specialty, :name
  end
end
