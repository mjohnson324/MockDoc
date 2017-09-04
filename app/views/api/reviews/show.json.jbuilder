json.partial! "api/reviews/review", review: @review

json.extract! @review, :overall_rating, :bedside_manner, :wait_time, :body

rev_doc = @review.doctor

json.doctor_name "Dr. #{rev_doc.first_name} #{rev_doc.last_name}"
