json.extract! user, :id, :email, :first_name, :last_name

user_apps = user.appointments

json.appointments do
  json.array! user_apps do |app|
    json.id app.id
    json.reason app.reason
    json.start_time app.start_time

    app_doc = app.doctor

    json.address app_doc.get_address
    json.doctor_name "#{app_doc.first_name} #{app_doc.last_name}"
  end
end
