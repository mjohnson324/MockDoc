json.appointment do
  json.extract! @appointment, :id,
                              :doctor_id,
                              :start_time,
                              :address,
                              :reason,
                              :patient_id,
                              :first_name,
                              :last_name
end