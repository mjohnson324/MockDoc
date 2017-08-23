{
  currentUser: {
    id: 1,
    email: "123fake_email@notreal.com",
    name: "Joe Schmoe",
    appointment_ids: []
  },
  forms: {
    signUp: { errors: [] },
    signIn: { errors: [] },
    bookAppointment: { errors: [] },
    writeReview: { errors: [] },
  },
  doctors: {
    1: {
      id: 1,
      name: Nick Riviera,
      gender: male,
      location: {
                lat: -90,
                lng: -90
              },
      education: Hollywood Upstairs Medical College,
      professional_statement: Hi everybody!,
      specialties: general surgeon,
      board-certifications: null,
      appointment_ids: [1],
      review_ids: [1]
      },
    2: {
      id: 2,
      name: Julius Hibbert,
      gender: male,
      location: {
                lat: 0,
                lng: 0
              },
      education: Johns Hopkins University School of Medicine,
      professional_statement: null,
      specialties: family medicine,
      board_certifications: American Board of Family Medicine,
      appointment_ids: [4],
      review_ids: [4]
      }
  },
  appointments: {
    1: {
      id: 1,
      time: 10:30,
      patient_id: 1,
      doctor_id: 1
    },
    4: {
      id: 1,
      time: 4:00,
      patient_id: null, // When booked, this becomes the patient's id
      doctor_id: 2
    }
  }
  reviews: {
    1: {
      author_id: 1,
      doctor_id: 2,
      overall_rating: 5,
      bedside_manner: 5,
      wait_time: 3,
      body: "He's an excellent and professional doctor."
    },
    2: {
      author_id: 1,
      doctor_id: 1,
      overall_rating: 3,
      bedside_manner: 5,
      wait_time: 5,
      body: null
    }
  }
}
