user_apps = @user.appointments.includes(:review, :doctor)
user_revs = []

json.session do
  json.extract! @user, :id, :email, :first_name, :last_name
  json.appointment_ids user_apps.map(&:id)
  json.review_ids @user.reviews.pluck(:id)
end

json.appointments do
  user_apps.each do |appointment|
    user_revs << appointment.review
    json.set! appointment.id do
      json.extract! appointment, :id,
                                 :doctor_id,
                                 :start_time,
                                 :address,
                                 :reason,
                                 :patient_id
      json.doctor_name "#{appointment.doctor.first_name} #{appointment.doctor.last_name}"
    end
  end
end

json.reviews do
  user_revs.each do |review|
    if review
      json.set! review.id do
        json.extract! review, :id,
                              :appointment_id,
                              :overall_rating,
                              :bedside_manner,
                              :wait_time,
                              :body,
                              :updated_at
      end
    end
  end
end
