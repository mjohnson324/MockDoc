json.extract! user, :id, :email, :first_name, :last_name

json.appointments user.appointments, :id, :doctor_id, :reason, :start_time
