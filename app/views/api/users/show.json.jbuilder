user_apps = @user.appointments.includes(:doctor,
                                        :review,
                                        doctor: [:specialties,
                                                 :certifications,
                                                 :appointments,
                                                 :reviews]).limit(10)
user_revs = []
user_docs = []

json.session do
  json.partial! "api/users/user", user: @user
  json.appointment_ids user_apps.map(&:id)
  json.review_ids @user.reviews.pluck(:id)
end

json.appointments do
  user_apps.each do |app|
    user_revs << app.review
    user_docs << app.doctor
    json.set! app.id do
      json.partial! "api/appointments/appointment", appointment: app
      json.reason app.reason
    end
  end
end

json.reviews do
  user_revs.each do |review|
    json.set! review.id do
      json.partial! "api/reviews/review", review: review
    end
  end
end

json.doctors do
  user_docs.each do |doctor|
    json.set! doctor.id do
      json.partial! "api/doctors/doctor", doctor: doctor
    end
  end
end
