json.partial! "api/reviews/review", review: @review

rev_doc = @review.doctor
rev_app = @review.appointment

json.doctor_name "Dr. #{rev_doc.first_name} #{rev_doc.last_name}"
json.date rev_app.start_time
