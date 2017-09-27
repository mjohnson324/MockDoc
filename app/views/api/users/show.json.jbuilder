
json.session do
  json.partial! "api/users/user", user: @user
  json.appointment_ids @user.appointments.pluck(:id)
  json.review_ids @user.reviews.pluck(:id)
end

user_apps = @user.appointments.includes(:doctor, :review)

json.appointments do
  user_apps.each do |app|
    json.set! app.id do
      json.partial! "api/appointments/appointment", appointment: app
    end
  end
end

json.reviews do
  @user.reviews.each do |review|
    json.set! review.id do
      json.partial! "api/reviews/review", review: review
    end
  end
end

json.doctors do
  @user.doctors.each do |doctor|
    json.set! doctor.id do
      json.partial! "api/doctors/doctor", doctor: doctor
    end
  end
end
