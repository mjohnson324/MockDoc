json.appointment do
  json.extract! @appointment, :id,
                              :doctor_id,
                              :start_time,
                              :address,
                              :reason,
                              :patient_id
  app_doc = @appointment.doctor
  json.doctor_name "#{app_doc.first_name} #{app_doc.last_name}"
end

review = Review.where(appointment_id: @appointment.id)[0]
unless review.nil?
  json.review do
    json.extract! review, :id,
                          :appointment_id,
                          :overall_rating,
                          :bedside_manner,
                          :wait_time,
                          :body,
                          :updated_at
  end
end
