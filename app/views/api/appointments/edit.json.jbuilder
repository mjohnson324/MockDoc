json.extract! @appointment, :id,
                            :doctor_id,
                            :start_time,
                            :address,
                            :reason,
                            :patient_id

app_doc = @appointment.doctor
json.doctor_name "#{app_doc.first_name} #{app_doc.last_name}"
