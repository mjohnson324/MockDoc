puts("Seeding started")
User.destroy_all
puts("Destroying appointments...")
Appointment.destroy_all
puts("Destroyed.")
sleep(1)
puts("Destroying reviews...")
Review.destroy_all
puts("Destroyed")
sleep(1)
Doctor.destroy_all
Specialty.destroy_all
DoctorSpecialty.destroy_all

test_user = User.create!(first_name: "Homer", last_name: "Simpson", email: "homer@gmail.com", password: "password")
puts("User added")

doc_hibbert_simpsons = Doctor.create!(first_name: "Julius", last_name: "Hibbert", education: "Johns Hopkins University School of Medicine", degree: "MD", address: "51 W 51st St, New York, NY", location: "51 W 51st St, New York, NY", quote: "Probably the only qualified doctor on this site")
doc_nick_simpsons = Doctor.create!(first_name: "Nick", last_name: "Riviera", education: "Hollywood Upstairs Medical College", address: "51 W 42nd St, New York, NY", location: "51 W 42nd St, New York, NY", quote: "Hello Everybody!")
# doc_munroe_simpsons = Doctor.create!(first_name: "Nick", last_name: "Riviera", education: "Hollywood Upstairs Medical College", address: "51 W 42nd St, New York, NY", location: "51 W 42nd St, New York, NY", quote: "Hello Everybody!")
# doc_who = Doctor.create!(first_name: "Nick", last_name: "Riviera", education: "Hollywood Upstairs Medical College", address: "51 W 42nd St, New York, NY", location: "51 W 42nd St, New York, NY", quote: "Hello Everybody!")
# doc_frankenstein = Doctor.create!(first_name: "Nick", last_name: "Riviera", education: "Hollywood Upstairs Medical College", address: "51 W 42nd St, New York, NY", location: "51 W 42nd St, New York, NY", quote: "Hello Everybody!")
# doc_jekyll = Doctor.create!(first_name: "Nick", last_name: "Riviera", education: "Hollywood Upstairs Medical College", address: "51 W 42nd St, New York, NY", location: "51 W 42nd St, New York, NY", quote: "Hello Everybody!")
# doc_house_house = Doctor.create!(first_name: "Nick", last_name: "Riviera", education: "Hollywood Upstairs Medical College", address: "51 W 42nd St, New York, NY", location: "51 W 42nd St, New York, NY", quote: "Hello Everybody!")
# doc_strange_marvel = Doctor.create!(first_name: "Nick", last_name: "Riviera", education: "Hollywood Upstairs Medical College", address: "51 W 42nd St, New York, NY", location: "51 W 42nd St, New York, NY", quote: "Hello Everybody!")
# doc_farnsworth_futurama = Doctor.create!(first_name: "Nick", last_name: "Riviera", education: "Hollywood Upstairs Medical College", address: "51 W 42nd St, New York, NY", location: "51 W 42nd St, New York, NY", quote: "Hello Everybody!")
# doc_zoidberg_futurama = Doctor.create!(first_name: "Nick", last_name: "Riviera", education: "Hollywood Upstairs Medical College", address: "51 W 42nd St, New York, NY", location: "51 W 42nd St, New York, NY", quote: "Hello Everybody!")

# 40 first names, 40 last names, 9 schools + 1 dentistry
random_first_name = ["Sharie", "Eric", "Leonardo", "Katina", "German", "Narcisa", "Lorilee", "Phylicia", "Michael", "Derek", "Edward", "Erick", "James", "Stephen", "Jeffrey", "Jose", "Orlando", "Joseph", "Lyndsey", "Raisa", "Althea", "Melony", "Ezequiel", "Keren", "Lizeth", "Lacey", "Vivienne", "Jeniffer", "Misti", "Darnell", "Lise", "Tyler", "Matthew", "Thomas", "Brendan", "David", "Victor", "Candice", "Enriqueta", "Lucas"]
random_last_name = ["Smith", "Jones", "Taylor", "Williams", "Brown", "Davies", "Evans", "Wilson", "Thomas", "Roberts", "Johnson", "Lewis", "Walker", "Robinson", "Wood", "Thompson", "White", "Watson", "Jackson", "Wright", "Green", "Harris", "Cooper", "King", "Lee", "Martin", "Clarke", "James", "Morgan", "Hughes", "Edwards", "Hill", "Moore", "Clark", "Hall", "Ward", "Turner", "Carter", "Phillips", "Mitchell"]
random_school = ["Johns Hopkins University School of Medicine", "Stanford University School of Medicine", "Yale School of Medicine", "Washington State University Medical School", "UC San Diego School of Medicine", "Vanderbilt University School of Medicine", "Duke University School of Medicine", "Michigan Medican School", "Weill Cornell Medical College"]
dental_school = "Harvard University School of Dental Medicine"

# Make addresses
addresses = []
street_number = 4
until addresses.length >= 60
  addresses << "51 W #{street_number}th St, New York, NY"
  addresses << "51 E #{street_number}th St, New York, NY"
  addresses << "300 W #{street_number}th St, New York, NY"
  addresses << "300 E #{street_number}th St, New York, NY"
  if street_number % 10 == 0
    street_number += 4
  else
    street_number += 1
  end
end
puts("Addresses added")
# Fill up database with random doctors
doctors = [doc_hibbert_simpsons, doc_nick_simpsons]
50.times do |i|
  rand_name = rand(39)
  rand_school = rand(8)
  doctors << Doctor.create!(first_name: random_first_name[rand_name], last_name: random_last_name[rand_name], education: random_school[rand_school], degree: "MD", address: addresses[i], location: addresses[i])
end
5.times do |i|
  rand_name = rand(39)
  doctors << Doctor.create!(first_name: random_first_name[rand_name], last_name: random_last_name[rand_name], education: dental_school, degree: "DMD", address: addresses[i + 50], location: addresses[i + 50])
end
puts("Doctors done")
num_doctors = doctors.length

# 15 Specialties (last one is dentistry)
specialty_names = ["primary care", "pediatrics", "chiropractor", "gynecology", "oncology", "cardiology", "dermatology", "gastroenterology", "neurology", "radiology", "opthalmology", "surgery", "plastic surgery", "psychiatry", "dentist"]
specialties = []
specialty_names.each do |name|
  specialties << Specialty.create!(name: name)
end
puts("Specialties Done")
# Join Specialties

# Hibbert: primary care, pediatrics
DoctorSpecialty.create!(specialty_id: specialties[0].id, doctor_id: doc_hibbert_simpsons.id)
DoctorSpecialty.create!(specialty_id: specialties[1].id, doctor_id: doc_hibbert_simpsons.id)
# Nick: cardiology, plastic surgery
DoctorSpecialty.create!(specialty_id: specialties[5].id, doctor_id: doc_nick_simpsons.id)
DoctorSpecialty.create!(specialty_id: specialties[12].id, doctor_id: doc_nick_simpsons.id)

doctors[2...(num_doctors - 5)].each do |doctor|
  rand_specialty = rand(13)
  specialty = specialties[rand_specialty]
  DoctorSpecialty.create!(specialty_id: specialty.id, doctor_id: doctor.id)
end

doctors[(num_doctors - 5)...num_doctors].each do |doctor|
  specialty = specialties[14]
  DoctorSpecialty.create!(specialty_id: specialty.id, doctor_id: doctor.id)
end
puts("Specialties assigned")
# Reviews and Appointments
current_time = Time.now
c_yr = current_time.year
c_m = current_time.month
c_d = current_time.day
sleep(1)
puts("Adding appointments")
doctors.each_with_index do |doctor, j|
  start_day = Time.new(c_yr, c_m, c_d, 10) - 30.day
  800.times do |i|
    app = Appointment.create!(doctor_id: doctor.id, start_time: start_day.to_datetime, address: doctor.address, first_name: doctor.first_name, last_name: doctor.last_name)
    if i % 5 == 0 && Time.now > start_day
      Review.create!(overall_rating: rand(4) + 1, bedside_manner: rand(4) + 1, wait_time: rand(4) + 1, appointment_id: app.id)
      # Makes 19 reviews per doctor
    end
    puts(8 - (i / 100)) if i % 100 == 0
    start_day += 2.hour
    start_day += 14.hour if start_day.hour > 18
  end
  puts("#{num_doctors - j} doctors remaining")
end
puts("Setting up Homer:")
# Demo profile data
hibbert_review_one = doc_hibbert_simpsons.reviews.first
hibbert_app_one = hibbert_review_one.appointment
nick_review_one = doc_nick_simpsons.reviews.first
nick_app_one = nick_review_one.appointment
nick_review_two = doc_nick_simpsons.reviews.second
nick_app_two = nick_review_two.appointment
hibbert_app_one.update(patient_id: test_user.id, reason: "Help")
nick_app_one.update(patient_id: test_user.id, reason: "Need heart surgery")
nick_app_two.update(patient_id: test_user.id, reason: "Help")
Review.update(hibbert_review_one.id, overall_rating: 2, bedside_manner: 2, wait_time: 2)
Review.update(nick_review_one.id, overall_rating: 5, bedside_manner: 5, wait_time: 5,  body: "He's great")
Review.delete(nick_review_two.id)
puts("Done")