# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

User.destroy_all
Appointment.destroy_all
Doctor.destroy_all
Certification.destroy_all
Specialty.destroy_all
DoctorSpecialty.destroy_all
DoctorCertification.destroy_all


first_names = ["Homer", "Marge", "Ned", "Clancy", "Waylon"]
last_names = ["Simpson", "Simpson", "Flanders", "Wiggum", "Smithers"]
emails = ["homer@gmail.com", "marge@yahoo.com", "ned@biblethumpers.com",
          "clancy@springfield.gov", "smithers@nuclear.io"]
passwords = ["long_password", "bouvier12345", "hi_diddly_ho",
             "passpasspass", "monty_burns_is_great"]

users = []

5.times do |i|
  users << User.create!(first_name: first_names[i],
                        last_name: last_names[i],
                        email: emails[i],
                        password: passwords[i])
end


doc_first_names = ["Julius", "Nick", "Jane", "Carl", "Donna",
                   "Matt", "Edith", "Eric", "Michelle", "Joe"]
doc_last_names = ["Hibbert", "Riviera", "Doe", "Johnson", "Edwards",
                  "Miller", "Spencer", "Baez", "Rodriguez", "Schmoe"]
education = ["Johns Hopkins University School of Medicine",
             "Hollywood Upstairs Medical College",
             "Harvard Medical School",
             "Harvard Medical School",
             "Duke School of Medicine",
             "Washington University School of Medicine",
             "Mayo Medical School",
             "Vanderbilt School of Medicine",
             "Yale University School of Medicine",
             "Johns Hopkins University School of Medicine"]
degrees = ["MD", "DO", "MD", "DMD", "MD",
           "MD", "DMD", "MD", "DPM", "MD"]
genders = ["male", "male", "female", "male", "female",
           "male", "female", "male", "female", "male"]
addresses = ["51 W 51st St, New York, NY", "51 W 42nd St, New York, NY",
             "51 W 37th St, New York, NY", "51 W 32nd St, New York, NY",
             "51 W 27th St, New York, NY", "51 W 47th St, New York, NY",
             "51 W 56th St, New York, NY", "51 W 61st St, New York, NY",
             "51 W 63st St, New York, NY", "51 W 22nd St, New York, NY"]
doctors = []

random_first_name = ["Sharie", "Eric", "Leonardo", "Katina", "German",
                     "Narcisa", "Lorilee", "Phylicia", "Michael", "Derek",
                     "Edward", "Erick", "James", "Stephen", "Jeffrey",
                     "Jose", "Orlando", "Joseph", "Lyndsey", "Raisa",
                     "Althea", "Melony", "Ezequiel", "Keren", "Lizeth",
                     "Lacey", "Vivienne", "Jeniffer", "Misti", "Darnell",
                     "Lise", "Tyler", "Matthew", "Thomas", "Brendan",
                     "David", "Victor", "Candice", "Enriqueta", "Celine",
                     "Taunya", "Crystal", "Travis", "Dean", "Leilani",
                     "Cammie", "Thi", "Sylvia", "Lindsay", "Heide",
                     "Alan", "Lucas", "Pedro", "Danyelle", "Jennette",
                     "Dave", "Chastity", "Tameika", "Mindy", "Tesha",
                     "Codi", "Kaye", "Ping", "Alexa", "Jewell"]
random_last_name = ["Smith", "Jones", "Taylor", "Williams", "Brown",
                    "Davies", "Evans", "Wilson", "Thomas", "Roberts",
                    "Johnson", "Lewis", "Walker", "Robinson", "Wood",
                    "Thompson", "White", "Watson", "Jackson", "Wright",
                    "Green", "Harris", "Cooper", "King", "Lee",
                    "Martin", "Clarke", "James", "Morgan", "Hughes",
                    "Edwards", "Hill", "Moore", "Clark", "Harrison",
                    "Scott", "Young", "Morris", "Hall", "Ward",
                    "Turner", "Carter", "Phillips", "Mitchell", "Patel",
                    "Adams", "Campbell", "Anderson"]
random_gender = ["male", "female"]
random_school = ["Johns Hopkins University School of Medicine",
                 "Stanford School of Medicine",
                 "Yale School of Medicine",
                 "Washington University School of Medicine",
                 "Universit of Pennsylvania Perelman School of Medicine",
                 "UC San Diego School of Medicine",
                 "Vanderbilt School of Medicine",
                 "Duke School of Medicine",
                 "Michigan Medican School",
                 "Weill Cornell Medical College"]
random_dental_school = ["Columbia University College of Dental Medicine",
                        "University of Pennsylvania School of Dental Medicine",
                        "Harvard University School of Dental Medicine",
                        "University of Michigan School of Dentistry"]
random_address = ["462 1st Avenue, New York, NY",
                  "51 W 51st St, New York, NY",
                  "53 W 23rd St, New York, NY",
                  "5 Pennsylvania Plaza, New York, NY",
                  "210 E 64th St, New York, NY"]

random_dental_address = ["49 W 23rd St, 12th Floor, New York, NY",
                         "220 W 26th St, New York, NY",
                         "241 W 30th St, New York, NY",
                         "29 W 19th St, New York, NY"]

10.times do |i|
  doctors << Doctor.create!(first_name: doc_first_names[i],
                            last_name: doc_last_names[i],
                            education: education[i],
                            degree: degrees[i],
                            gender: genders[i],
                            address: addresses[i])
end

90.times do |i|
  doctors << Doctor.create!(first_name: random_first_name.shuffle[0],
                            last_name: random_last_name.shuffle[0],
                            education: random_school.shuffle[0],
                            degree: "MD",
                            gender: random_gender.shuffle[0],
                            address: random_address.shuffle[0])
end

10.times do |i|
  doctors << Doctor.create!(first_name: random_first_name.shuffle[0],
                            last_name: random_last_name.shuffle[0],
                            education: random_dental_school.shuffle[0],
                            degree: ["DMD", "DDS"].shuffle[0],
                            gender: random_gender.shuffle[0],
                            address: random_dental_address.shuffle[0])
end


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


DoctorCertification.create!(certification_id: certifications[5].id, doctor_id: doctors[0].id)
DoctorCertification.create!(certification_id: certifications[15].id, doctor_id: doctors[0].id)

DoctorCertification.create!(certification_id: certifications[21].id, doctor_id: doctors[2].id)

DoctorCertification.create!(certification_id: certifications[5].id, doctor_id: doctors[4].id)

DoctorCertification.create!(certification_id: certifications[5].id, doctor_id: doctors[5].id)

DoctorCertification.create!(certification_id: certifications[19].id, doctor_id: doctors[7].id)
DoctorCertification.create!(certification_id: certifications[24].id, doctor_id: doctors[8].id)
DoctorCertification.create!(certification_id: certifications[9].id, doctor_id: doctors[9].id)


# generalist, then specialist, then surgery/emergency care, then mental health,
# then oral care
specialty_names = ["primary care physician", "family physician",
                   "internist", "pediatrician",
                   "naturopathic doctor", "chiropractor", # 6

                   "obstetrician/gynecologist", "oncologist",
                   "cardiologist", "allergist",
                   "dermatologist", "endocrinologist",
                   "gastroenterologist", "hematologist",
                   "nephrologist", "neurologist",
                   "podiatrist", "pulmonologist", # 18
                   "radiologist", "rheumatologist",
                   "sleep medicine specialist", "urologist",
                   "opthalmologist/optometrist", "audiologist",
                   "dietitian", "sports medicine specialist", # 26

                   "orthopedic surgeon", "surgeon",
                   "emergency medicine physician", "urgent care specialist",
                   "neurosurgeon", "plastic surgeon", # 32

                   "psychiatrist", "psychologist", # 34

                   "dentist", "oral surgeon",
                   "orthodontist", "periodontist",
                   "prosthodontist"]

specialties = []

specialty_names.each do |name|
  specialties << Specialty.create!(name: name)
end


DoctorSpecialty.create!(specialty_id: specialties[1].id, doctor_id: doctors[0].id) # family
DoctorSpecialty.create!(specialty_id: specialties[0].id, doctor_id: doctors[0].id) # primary

DoctorSpecialty.create!(specialty_id: specialties[8].id, doctor_id: doctors[1].id) # Cardio
DoctorSpecialty.create!(specialty_id: specialties[31].id, doctor_id: doctors[1].id) # Plastic
DoctorSpecialty.create!(specialty_id: specialties[30].id, doctor_id: doctors[1].id) # Neuro

DoctorSpecialty.create!(specialty_id: specialties[27].id, doctor_id: doctors[2].id) # Surgeon

DoctorSpecialty.create!(specialty_id: specialties[34].id, doctor_id: doctors[3].id) # Dentist

DoctorSpecialty.create!(specialty_id: specialties[1].id, doctor_id: doctors[4].id) # Family
DoctorSpecialty.create!(specialty_id: specialties[0].id, doctor_id: doctors[4].id) # Family

DoctorSpecialty.create!(specialty_id: specialties[3].id, doctor_id: doctors[5].id) # Pediatric

DoctorSpecialty.create!(specialty_id: specialties[34].id, doctor_id: doctors[6].id) # Dentist

DoctorSpecialty.create!(specialty_id: specialties[33].id, doctor_id: doctors[7].id) # Psych

DoctorSpecialty.create!(specialty_id: specialties[16].id, doctor_id: doctors[8].id) # Podiatry

DoctorSpecialty.create!(specialty_id: specialties[7].id, doctor_id: doctors[9].id) # Cancer

doctors[10..49].each do |doctor|
  DoctorSpecialty.create!(specialty_id: specialties[0..3].shuffle[0].id,
                          doctor_id: doctor.id)
end

doctors[50..99].each do |doctor|
  DoctorSpecialty.create!(specialty_id: specialties[5..33].shuffle[0].id,
                          doctor_id: doctor.id)
end

doctors[100..109].each do |doctor|
  DoctorSpecialty.create!(specialty_id: specialties[34..38].shuffle[0].id,
                          doctor_id: doctor.id)
end


doctors.each do |doctor|
  start_day = Time.new(2017, 8, 29, 8)

  50.times do
    Appointment.create!(doctor_id: doctor.id,
                        start_time: start_day.to_datetime)

    start_day += 30 * 60
    start_day += 14 * 60 * 60 if start_day.hour == 18
  end
end
