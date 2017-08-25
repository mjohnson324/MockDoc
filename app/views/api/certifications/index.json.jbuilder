@certifications.each do |certification|
  json.set! certification.id do
    json.extract! certification, :name
  end
end
