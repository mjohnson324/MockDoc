desc "Add new doctor to database"

task :new_doctor, [:first_name, :last_name, :school, :degree, :specialty] => :environment do |t, args|
    # address
    last_address = Doctor.last.address.split(" ")
    current_number = last_address[0] + " " + last_address[1]
    transitions = { "51 W" => "51 E", "51 E" => "300 W", "300 W" => "300 E", "300 E" => "51 W" }
    street_number = last_address[2].to_i
    next_number = transitions[current_number]
    if next_number == "51 W"
        street_number += (street_number % 10).zero? ? 4 : 1
    end
    new_address = "#{next_number} #{street_number}th St, New York, NY"

    # doctor
    new_doctor = Doctor.create!(first_name: args[:first_name], last_name: args[:last_name], education: args[:school], degree: args[:degree], address: new_address, location: new_address)
    new_doctor = Doctor.last
    # specialty
    specialty = Specialty.where(name: args[:specialty])[0]
    if specialty.nil?
        specialty = Specialty.create!(name: args[:specialty])
    end
    DoctorSpecialty.create!(specialty_id: specialty.id, doctor_id: new_doctor.id)

    # appointments
    current_time = Time.now
    c_yr = current_time.year
    c_m = current_time.month
    c_d = current_time.day
    start_day = Time.new(c_yr, c_m, c_d, 10) - 7.day
    140.times do |_|
        app = Appointment.create!(doctor_id: new_doctor.id, start_time: start_day.to_datetime, address: new_doctor.address, first_name: new_doctor.first_name, last_name: new_doctor.last_name)
        if new_doctor.reviews.count < 5
            Review.create!(overall_rating: rand(1..5), bedside_manner: rand(1..5), wait_time: rand(1..5), appointment_id: app.id)
        end
        start_day += 2.hour
        start_day += 16.hour if start_day.hour > 16
    end
end
