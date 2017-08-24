# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
u1 = User.create(first_name: "Homer", last_name: "Simpson", email: "homer@gmail.com", password: "long_password")
u2 = User.create(first_name: "Marge", last_name: "Simpson", email: "marge@yahoo.com", password: "bouvier12345")
u3 = User.create(first_name: "Ned", last_name: "Flanders", email: "ned@biblethumpers.com", password: "hi_diddly_ho")
u4 = User.create(first_name: "Clancy", last_name: "Wiggum", email: "clancy@police.gov", password: "passpasspass")
u5 = User.create(first_name: "Waylon", last_name: "Smithers", email: "smithers@nuclear.io", password: "monty_burns_is_great")

Doctor.destroy_all
doc1 = Doctor.create(first_name: "Julius", last_name: "Hibbert", gender: "male",
              education: "Johns Hopkins University School of Medicine",
              lat: -40, lng: -40, degree: "MD")
doc2 = Doctor.create(first_name: "Nick", last_name: "Riviera", gender: "male",
              education: "Hollywood Upstairs Medical College",
              lat: -35, lng: -35, degree: "DO")
doc3 = Doctor.create(first_name: "Jane", last_name: "Doe", gender: "female",
              education: "Harvard Medical School",
              lat: -30, lng: -30, degree: "MD")
doc4 = Doctor.create(first_name: "Carl", last_name: "Johnson", gender: "male",
              education: "Harvard Medical School",
              lat: -25, lng: -25, degree: "DMD")
doc5 = Doctor.create(first_name: "Donna", last_name: "Edwards", gender: "female",
              education: "Duke University School of Medicine",
              lat: -20, lng: -20, degree: "MD")
doc6 = Doctor.create(first_name: "Matt", last_name: "Miller", gender: "male",
              education: "Washington University School of Medicine",
              lat: -15, lng: -15, degree: "MD")
doc7 = Doctor.create(first_name: "Edith", last_name: "Spencer", gender: "female",
              education: "Mayo Medical School",
              lat: -10, lng: -10, degree: "DMD")
doc8 = Doctor.create(first_name: "Eric", last_name: "Baez", gender: "male",
              education: "Vanderbilt University School of Medicine",
              lat: -5, lng: -5, degree: "MD")
doc9 = Doctor.create(first_name: "Michelle", last_name: "Rodriguez", gender: "female",
              education: "Yale University School of Medicine",
              lat: 0, lng: 0, degree: "DPM")
doc10 = Doctor.create(first_name: "Joe", last_name: "Schmoe", gender: "male",
              education: "Johns Hopkins University School of Medicine",
              lat: -40, lng: -40, degree: "MD")


Certification.destroy_all
cert1 = Certification.create(name: "American Board of Allergy and Immunology")
cert2 = Certification.create(name: "American Board of Anesthesiology")
cert3 = Certification.create(name: "American Board of Colon and Rectal Surgery")
cert4 = Certification.create(name: "American Board of Dermatology")
cert5 = Certification.create(name: "American Board of Emergency Medicine")
cert6 = Certification.create(name: "American Board of Family Medicine")
cert7 = Certification.create(name: "American Board of Internal Medicine")
cert8 = Certification.create(name: "American Board of Medical Genetics and Genomics")
cert9 = Certification.create(name: "American Board of Neurological Surgery")
cert10 = Certification.create(name: "American Board of Nuclear Medicine")
cert11 = Certification.create(name: "American Board of Obstetrics and Gynecology")
cert12 = Certification.create(name: "American Board of Opthalmology")
cert13 = Certification.create(name: "American Board of Orthopaedic Surgery")
cert14 = Certification.create(name: "American Board of Otolaryngology")
cert15 = Certification.create(name: "American Board of Pathology")
cert16 = Certification.create(name: "American Board of Pediatrics")
cert17 = Certification.create(name: "American Board of Physical Medicine and Rehabilitation")
cert18 = Certification.create(name: "American Board of Plastic Surgery")
cert19 = Certification.create(name: "American Board of Preventive Medicine")
cert20 = Certification.create(name: "American Board of Psychiatry and Neurology")
cert21 = Certification.create(name: "American Board of Radiology")
cert22 = Certification.create(name: "American Board of Surgery")
cert23 = Certification.create(name: "American Board of Thoracic Surgery")
cert24 = Certification.create(name: "American Board of Urology")
cert25 = Certification.create(name: "American Board of Podiatric Medicine")

Specialty.destroy_all
spec1 = Specialty.create(name: "Allergist")
spec2 = Specialty.create(name: "Audiologist")
spec3 = Specialty.create(name: "Cardiologist")
spec4 = Specialty.create(name: "Chiropractor")
spec5 = Specialty.create(name: "Dentist")
spec6 = Specialty.create(name: "Dermatologist")
spec7 = Specialty.create(name: "Dietitian")
spec8 = Specialty.create(name: "Emergency Medicine Physician")
spec9 = Specialty.create(name: "Endocrinologist")
spec10 = Specialty.create(name: "Opthalmologist")
spec11 = Specialty.create(name: "Family Physician")
spec12 = Specialty.create(name: "Gastroenterologist")
spec13 = Specialty.create(name: "Hematologist")
spec14 = Specialty.create(name: "Internist")
spec15 = Specialty.create(name: "Naturopathic Doctor")
spec16 = Specialty.create(name: "Nephrologist")
spec17 = Specialty.create(name: "Neurologist")
spec18 = Specialty.create(name: "Neurosurgeon")
spec19 = Specialty.create(name: "Obstetrist-Gynecologist")
spec20 = Specialty.create(name: "Oncologist")
spec21 = Specialty.create(name: "Ophthalmologist")
spec22 = Specialty.create(name: "Optometrist")
spec23 = Specialty.create(name: "Oral Surgeon")
spec24 = Specialty.create(name: "Orthodontist")
spec25 = Specialty.create(name: "Orthopedic Surgeon")
spec26 = Specialty.create(name: "Pediatrician")
spec27 = Specialty.create(name: "Periodontist")
spec28 = Specialty.create(name: "Plastic Surgeon")
spec29 = Specialty.create(name: "Podiatrist")
spec30 = Specialty.create(name: "Prosthodontist")
spec31 = Specialty.create(name: "Psychiatrist")
spec32 = Specialty.create(name: "Psychologist")
spec33 = Specialty.create(name: "Pulmonologist")
spec34 = Specialty.create(name: "Radiologist")
spec35 = Specialty.create(name: "Rheumatologist")
spec36 = Specialty.create(name: "Sleep Medicine Specialist")
spec37 = Specialty.create(name: "Sports Medicine Specialist")
spec38 = Specialty.create(name: "Surgeon")
spec39 = Specialty.create(name: "Urgent Care Specialist")
spec40 = Specialty.create(name: "Urologist")

DoctorSpecialty.destroy_all
DoctorSpecialty.create(specialty_id: spec31.id, doctor_id: doc8.id) # Psych
DoctorSpecialty.create(specialty_id: spec20.id, doctor_id: doc10.id) # Cancer
DoctorSpecialty.create(specialty_id: spec28.id, doctor_id: doc2.id) # Plastic
DoctorSpecialty.create(specialty_id: spec18.id, doctor_id: doc2.id) # Neuro
DoctorSpecialty.create(specialty_id: spec3.id, doctor_id: doc2.id) # Cardio

DoctorSpecialty.create(specialty_id: spec11.id, doctor_id: doc1.id)
DoctorSpecialty.create(specialty_id: spec11.id, doctor_id: doc5.id) # Family
DoctorSpecialty.create(specialty_id: spec11.id, doctor_id: doc6.id)
DoctorSpecialty.create(specialty_id: spec38.id, doctor_id: doc3.id) # Surgeon
DoctorSpecialty.create(specialty_id: spec5.id, doctor_id: doc4.id) # Dentist

DoctorSpecialty.create(specialty_id: spec5.id, doctor_id: doc7.id) # Dentist
DoctorSpecialty.create(specialty_id: spec29.id, doctor_id: doc9.id) # Podiatry

DoctorCertification.destroy_all
DoctorCertification.create(certification_id: cert6.id, doctor_id: doc1.id)
DoctorCertification.create(certification_id: cert16.id, doctor_id: doc1.id)
DoctorCertification.create(certification_id: cert22.id, doctor_id: doc3.id)
DoctorCertification.create(certification_id: cert6.id, doctor_id: doc5.id)

DoctorCertification.create(certification_id: cert6.id, doctor_id: doc6.id)
DoctorCertification.create(certification_id: cert20.id, doctor_id: doc8.id)
DoctorCertification.create(certification_id: cert25.id, doctor_id: doc9.id)
DoctorCertification.create(certification_id: cert10.id, doctor_id: doc10.id)

PatientDoctorRelationship.destroy_all
PatientDoctorRelationship.create(patient_id: u1.id, doctor_id: doc1.id)
PatientDoctorRelationship.create(patient_id: u1.id, doctor_id: doc2.id)
PatientDoctorRelationship.create(patient_id: u2.id, doctor_id: doc1.id)
PatientDoctorRelationship.create(patient_id: u2.id, doctor_id: doc2.id)
PatientDoctorRelationship.create(patient_id: u4.id, doctor_id: doc2.id)

PatientDoctorRelationship.create(patient_id: u4.id, doctor_id: doc5.id)
PatientDoctorRelationship.create(patient_id: u3.id, doctor_id: doc4.id)
PatientDoctorRelationship.create(patient_id: u3.id, doctor_id: doc6.id)
PatientDoctorRelationship.create(patient_id: u5.id, doctor_id: doc8.id)
PatientDoctorRelationship.create(patient_id: u5.id, doctor_id: doc9.id)

Review.destroy_all


Appointment.destroy_all
