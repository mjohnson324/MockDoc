User.destroy_all
Appointment.destroy_all
Review.destroy_all
Doctor.destroy_all
Certification.destroy_all
Specialty.destroy_all
DoctorSpecialty.destroy_all
DoctorCertification.destroy_all

test_user = User.create!(first_name: "Homer",
                         last_name: "Simpson",
                         email: "homer@gmail.com",
                         password: "password")

# Doctors
test_doctor_1 = Doctor.create!(first_name: "Julius",
                               last_name: "Hibbert",
                               education: "Johns Hopkins University School of Medicine",
                               degree: "MD",
                               gender: "male",
                               address: "51 W 51st St, New York, NY")
test_doctor_2 = Doctor.create!(first_name: "Nick",
                               last_name: "Riviera",
                               education: "Hollywood Upstairs Medical College",
                               degree: "DO",
                               gender: "male",
                               address: "51 W 42nd St, New York, NY")
random_first_name = ["Sharie", "Eric", "Leonardo", "Katina", "German",
                     "Narcisa", "Lorilee", "Phylicia", "Michael", "Derek",
                     "Edward", "Erick", "James", "Stephen", "Jeffrey",
                     "Jose", "Orlando", "Joseph", "Lyndsey", "Raisa",
                     "Althea", "Melony", "Ezequiel", "Keren", "Lizeth",
                     "Lacey", "Vivienne", "Jeniffer", "Misti", "Darnell",
                     "Lise", "Tyler", "Matthew", "Thomas", "Brendan", "David",
                     "Victor", "Candice", "Enriqueta", "Celine", "Taunya",
                     "Crystal", "Travis", "Dean", "Leilani", "Cammie",
                     "Thi", "Sylvia", "Lindsay", "Heide", "Alan", "Lucas",
                     "Pedro", "Danyelle", "Jennette", "Dave", "Chastity",
                     "Tameika", "Mindy", "Tesha", "Codi", "Kaye", "Ping",
                     "Alexa", "Jewell"]
random_last_name = ["Smith", "Jones", "Taylor", "Williams", "Brown", "Davies",
                    "Evans", "Wilson", "Thomas", "Roberts", "Johnson",
                    "Lewis", "Walker", "Robinson", "Wood", "Thompson",
                    "White", "Watson", "Jackson", "Wright", "Green", "Harris",
                    "Cooper", "King", "Lee", "Martin", "Clarke", "James",
                    "Morgan", "Hughes", "Edwards", "Hill", "Moore", "Clark",
                    "Harrison", "Scott", "Young", "Morris", "Hall", "Ward",
                    "Turner", "Carter", "Phillips", "Mitchell", "Patel",
                    "Adams", "Campbell", "Anderson"]
random_gender = ["male", "female"]
random_school = ["Johns Hopkins University School of Medicine",
                 "Stanford University School of Medicine",
                 "Yale School of Medicine",
                 "Washington State University Medical School",
                 "UC San Diego School of Medicine",
                 "Vanderbilt University School of Medicine",
                 "Duke University School of Medicine",
                 "Michigan Medican School",
                 "Weill Cornell Medical College"]
random_dental_school = ["Columbia University College of Dental Medicine",
                        "University of Pennsylvania School of Dental Medicine",
                        "Harvard University School of Dental Medicine",
                        "University of Michigan School of Dentistry"]
addresses = []
street_number = 4
until addresses.length >= 110
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
doctors = [test_doctor_1, test_doctor_2]
98.times do |i|
  doctors << Doctor.create!(first_name: random_first_name.shuffle[0],
                            last_name: random_last_name.shuffle[0],
                            education: random_school.shuffle[0],
                            degree: "MD",
                            gender: random_gender.shuffle[0],
                            address: addresses[i])
end
10.times do |i|
  doctors << Doctor.create!(first_name: random_first_name.shuffle[0],
                            last_name: random_last_name.shuffle[0],
                            education: random_dental_school.shuffle[0],
                            degree: ["DMD", "DDS"].shuffle[0],
                            gender: random_gender.shuffle[0],
                            address: addresses[i + 100])
end

# Specialties
specialty_names = ["primary care physician",
                   "pediatrician",
                   "chiropractor",
                   "gynecologist",
                   "oncologist",
                   "cardiologist",
                   "allergist",
                   "dermatologist",
                   "endocrinologist",
                   "gastroenterologist",
                   "neurologist",
                   "podiatrist",
                   "pulmonologist",
                   "radiologist",
                   "urologist",
                   "opthalmologist",
                   "audiologist",
                   "orthopedic surgeon",
                   "surgeon",
                   "neurosurgeon",
                   "plastic surgeon",
                   "psychiatrist",
                   "psychologist",
                   "dentist",
                   "orthodontist"]
specialties = []
specialty_names.each do |name|
  specialties << Specialty.create!(name: name)
end

# Join Specialties
DoctorSpecialty.create!(specialty_id: specialties[0].id,
                        doctor_id: doctors[0].id)
DoctorSpecialty.create!(specialty_id: specialties[1].id,
                        doctor_id: doctors[0].id)
DoctorSpecialty.create!(specialty_id: specialties[5].id,
                        doctor_id: doctors[1].id)
DoctorSpecialty.create!(specialty_id: specialties[4].id,
                        doctor_id: doctors[1].id)
DoctorSpecialty.create!(specialty_id: specialties[20].id,
                        doctor_id: doctors[1].id)
doctors[2..99].each do |doctor|
    specialty_one = specialties[0..22].shuffle[0]
    specialty_two = specialties[0..22].shuffle[0]
    while specialty_two == specialty_one
      specialty_two = specialties[0..22].shuffle[0]
    end
    DoctorSpecialty.create!(specialty_id: specialty_one.id,
                            doctor_id: doctor.id)
    DoctorSpecialty.create!(specialty_id: specialty_two.id,
                            doctor_id: doctor.id)
end
doctors[100..109].each do |doctor|
  DoctorSpecialty.create!(specialty_id: specialties[23..24].shuffle[0].id,
                          doctor_id: doctor.id)
end

# Certications
certification_names = ["American Board of Allergy and Immunology",
                       "American Board of Anesthesiology",
                       "American Board of Colon and Rectal Surgery",
                       "American Board of Dermatology",
                       "American Board of Emergency Medicine",
                       "American Board of Family Medicine",
                       "American Board of Internal Medicine",
                       "American Board of Medical Genetics and Genomics",
                       "American Board of Neurological Surgery",
                       "American Board of Nuclear Medicine",
                       "American Board of Obstetrics and Gynecology",
                       "American Board of Opthalmology",
                       "American Board of Orthopaedic Surgery",
                       "American Board of Otolaryngology",
                       "American Board of Pathology",
                       "American Board of Pediatrics",
                       "American Board of Physical Medicine and Rehabilitation",
                       "American Board of Plastic Surgery",
                       "American Board of Preventive Medicine",
                       "American Board of Psychiatry and Neurology",
                       "American Board of Radiology",
                       "American Board of Surgery",
                       "American Board of Thoracic Surgery",
                       "American Board of Urology",
                       "American Board of Podiatric Medicine"]
certifications = []
certification_names.each do |name|
  certifications << Certification.create!(name: name)
end

# Certification Joins
DoctorCertification.create!(certification_id: certifications[5].id,
                            doctor_id: doctors[0].id)
DoctorCertification.create!(certification_id: certifications[15].id,
                            doctor_id: doctors[0].id)
doctors[2..99].each do |doctor|
  DoctorCertification.create!(certification_id: certifications.shuffle[0].id,
                              doctor_id: doctor.id)
end

# Reviews and Appointments
rating_range = (1..5).to_a
current_time = Time.now
c_yr = current_time.year
c_m = current_time.month
c_d = current_time.day

doctors.each_with_index do |doctor, j|
  start_day = Time.new(c_yr, c_m, c_d, 8) - 60.day
  if start_day.saturday?
    start_day += 2.day
  elsif start_day.sunday?
    start_day += 1.day
  end

  1680.times do |i|
    app = Appointment.create!(doctor_id: doctor.id,
                              start_time: start_day.to_datetime,
                              address: addresses[j])
    if i % 7 == 0 && Time.now > start_day
      Review.create!(overall_rating: rating_range.shuffle[0],
                     bedside_manner: rating_range.shuffle[0],
                     wait_time: rating_range.shuffle[0],
                     appointment_id: app.id)
    end
    start_day += 90.minute
    start_day += 14.hour if start_day.hour > 18
    start_day += 2.day if start_day.saturday?
  end
end
