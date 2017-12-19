json.doctors do
  @doctors.each do |doctor|
    json.set! doctor.id do
      doctor_reviews = doctor.reviews
      all_review_ratings = doctor_reviews.to_a.map(&:overall_rating)
      if doctor_reviews.empty?
        average_rating = "Not rated"
      else
        average_rating = all_review_ratings.reduce(:+) / all_review_ratings.length.to_f
      end
      json.extract! doctor, :id,
                            :first_name,
                            :last_name,
                            :degree,
                            :gender,
                            :lat,
                            :lng
      json.address doctor.get_address
      json.average_rating average_rating
      json.specialties doctor.specialties.to_a.map(&:name)
      json.certifications doctor.certifications.to_a.map(&:name)
      json.appointment_ids doctor.appointments.to_a.map(&:id)
      json.review_ids doctor_reviews.to_a.map(&:id)

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
