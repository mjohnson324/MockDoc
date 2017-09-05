json.partial! "api/users/user", user: @user

json.appointment_ids @user.appointments.pluck(:id)
json.review_ids @user.reviews.pluck(:id)

json.appointments do
  user_apps = @user.appointments.includes(:doctor)

  user_apps.each do |app|
    json.set! app.id do
      json.partial! "api/appointments/appointment", appointment: app
    end
    app_doc = app.doctor

    json.address app_doc.get_address
    json.doctor_name "#{app_doc.first_name} #{app_doc.last_name}"
  end
end

json.reviews do
  user_reviews = @user.reviews.includes(:doctor, :appointment)

  user_reviews.each do |review|
    json.set! review.id do
      json.partial! "api/reviews/review", review: review
    end
  end
end
