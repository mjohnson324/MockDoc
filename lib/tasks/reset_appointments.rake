desc "Keep Appointments Up to Date to control database size"

task :reset_appointments => :environment do
    puts("Removing old appointments")
    Appointment.destroy_all
    Review.destroy_all
    doctors = Doctor.all
    num_doctors = doctors.length

    puts("Old appointments gone.")
    current_time = Time.now
    c_yr = current_time.year
    c_m = current_time.month
    c_d = current_time.day
    puts('Adding appointments')
    doctors.each_with_index do |doctor, j|
        start_day = Time.new(c_yr, c_m, c_d, 10) - 7.day
        140.times do |_|
            app = Appointment.create!(doctor_id: doctor.id, start_time: start_day.to_datetime, address: doctor.address, first_name: doctor.first_name, last_name: doctor.last_name)
            if doctor.reviews.count < 5
            Review.create!(overall_rating: rand(1..5), bedside_manner: rand(1..5), wait_time: rand(1..5), appointment_id: app.id)
            end
            start_day += 2.hour
            start_day += 16.hour if start_day.hour > 16
        end
        puts("#{num_doctors - j} doctors remaining")
    end

    puts("Updating Homer")
    doc_hibbert = Doctor.where(last_name: "Hibbert")[0]
    doc_nick = Doctor.where(first_name: "Nick")[0]
    test_user = User.where(first_name: "Homer")[0]
    hibbert_review_one = doc_hibbert.reviews.first
    hibbert_app_one = hibbert_review_one.appointment
    nick_review_one = doc_nick.reviews.first
    nick_app_one = nick_review_one.appointment
    nick_review_two = doc_nick.reviews.second
    nick_app_two = nick_review_two.appointment
    hibbert_app_one.update(patient_id: test_user.id, reason: 'Help')
    nick_app_one.update(patient_id: test_user.id, reason: 'Need heart surgery')
    nick_app_two.update(patient_id: test_user.id, reason: 'Help')
    Review.update(hibbert_review_one.id, overall_rating: 2, bedside_manner: 2, wait_time: 2)
    Review.update(nick_review_one.id, overall_rating: 5, bedside_manner: 5, wait_time: 5, body: 'He is great')
    Review.delete(nick_review_two.id)
    puts("Done.")
end