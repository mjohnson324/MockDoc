user_apps = @user.appointments.includes(:review, :doctor)
user_revs = []

json.session do
  json.partial! "api/users/user", user: @user
  json.appointment_ids user_apps.map(&:id)
  json.review_ids @user.reviews.pluck(:id)
end

json.appointments do
  user_apps.each do |app|
    user_revs << app.review
    json.set! app.id do
      json.partial! "api/appointments/appointment", appointment: app
      json.reason app.reason
      json.doctor_name "#{app.doctor.first_name} #{app.doctor.last_name}"
    end
  end
end

json.reviews do
  user_revs.each do |review|
    if review
      json.set! review.id do
        json.partial! "api/reviews/review", review: review
      end
    end
  end
end
