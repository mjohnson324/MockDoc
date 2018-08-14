# Sample State

```javascript
{
  session: {
    currentUser: {
      id: 1,
      email: "123fake_email@notreal.com",
      first_name: "Joe",
      last_name: "Schmoe",
      appointment_ids: [1], // or []
      review_ids: [1] // or []
    } // When logged out, currentUser is null
  },
  errors: ["Invalid username or password"],
  filter: {
    specialty: "primary care",
    address: "New York",
    status: "loading", // for tracking search results and the loading screen
    googleLoaded: true // to prevent errors related to google maps integration
  },
  doctors: {
    1: {
      id: 1,
      first_name: "Nick",
      last_name: "Riviera",
      degree: "DO", // or null
      lat: 40.754755,
      lng: -73.983443,
      address: "51 W 42nd St, New York, NY 10036, USA",
      education: "Hollywood Upstairs Medical College",
      quote: "If I kill you, you don't pay!",
      average_rating: 3.3,
      specialties: ["cardiology", "neurosurgeon", "plastic surgeon"],
      appointment_ids: [1],
      review_ids: [1]
    }
  },
  appointments: {
    1: {
      id: 1,
      patient_id: 1,
      doctor_id: 1,
      first_name: "Nick",
      last_name: "Riviera",
      address: "51 W 51st St, New York,NY",
      reason: "I'm sick",
      start_time: "2017-10-01T12:00:00.000Z"
    }
  },
  reviews: {
    1: {
      id: 1,
      appointment_id: 1,
      overall_rating: 5,
      bedside_manner: 5,
      wait_time: 3,
      updated_at: "2017-11-01T03:29:05.591Z",
      body: "He's an excellent and professional doctor."
    }
  }
}

```