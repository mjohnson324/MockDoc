```javascript
{
  session: {
    currentUser: {
      id: 1,
      email: "123fake_email@notreal.com",
      first_name: "Joe",
      last_name: "Schmoe",
      appointment_ids: [1],
      review_ids: [1]
    }
  },

  errors: ["Password is too short (minimum 12 characters)"],

  filter: {
    specialty: "primary care physician",
    address: "New York",
    date: "Tue Dec 05 2017 16:44:12 GMT-0500 (EST)"
  }

  doctors: {
    1: {
      id: 1,
      first_name: "Nick",
      last_name: "Riviera",
      gender: "male",
      degree: "DO",
      lat: 40.754755,
      lng: -73.983443,
      address: "51 W 42nd St, New York, NY 10036, USA",
      education: "Hollywood Upstairs Medical College",
      professional_statement: "Hi everybody!",
      average_rating: 3.3,
      specialties: ["cardiologist", "neurosurgeon", "plastic surgeon"],
      certifications: [],
      appointment_ids: [1],
      review_ids: [1]
    },
    2: {
      id: 2,
      first_name: "Julius",
      last_name: "Hibbert",
      gender: "male",
      degree: "MD",
      lat: 40.760405,
      lng: -73.979361,
      address: "51 W 51st St, New York, NY 10019, USA",
      education: "Johns Hopkins University School of Medicine",
      professional_statement: null,
      average_rating: 5,
      specialties: ["primary care physician", "family physician"],
      certifications: ["American Board of Family Medicine", "American Board of Pediatrics"],
      appointment_ids: [4],
      review_ids: [4]
    }
  },

  appointments: {
    1: {
      id: 1,
      patient_id: 1,
      doctor_id: 1 doctor_name: "Julius Hibbert",
      address: "51 W 51st St, New York,NY",
      reason: "I'm sick",
      start_time: "2017-10-01T12:00:00.000Z"
    },
    4: {
      id: 2,
      patient_id: null,
      doctor_id: 2
      doctor_name: "Nick Riviera",
      address: "51 W 42nd St, New York, NY",
      reason: null,
      start_time: "2017-10-01T12:00:00.000Z"
    },
  }

  reviews: {
    1: {
      id: 1,
      appointment_id: 1,
      overall_rating: 5,
      bedside_manner: 5,
      wait_time: 3,
      updated_at: "2017-11-01T03:29:05.591Z",
      body: "He's an excellent and professional doctor."
    },
  }
}

```
