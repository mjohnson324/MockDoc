# Component Hierarchy

- **Provider**
  - **HashRouter**
    - **HeaderContainer**
      - Header
    - **SearchContainer**
      - Search (the search bar)
    - **SessionFormContainer**
      - SessionForm
        - Errors
    - **SignupFormContainer**
      - SignupForm
        - Errors
    - **BookingFormContainer**
      - BookingForm
        - Errors
    - **ReviewFormContainer**
      - ReviewForm
        - Errors
    - **PatientProfileContainer**
      - PatientProfile
        - PatientIndexItem
    - **DoctorContainer**
      - Doctor
        - DoctorsMapWrapper
          -DoctorsMap (Google Map)
        - DoctorReviews
          - DoctorReviewsItem
        - DoctorAppointments
          - AppointmentsTable
            - AppointmentsDayDisplay
    - **SearchIndexContainer**
      - SearchIndex (Search results)
        - DoctorsMapWrapper
          - DoctorsMap (Google Map)
        - SearchIndexItem
          - AppointmentsTable (Holds Lists of Appointments sorted by day)
            - AppointmentsDayDisplay (Each is a list of appointments)

## Routes

| Path                         | Component (s)                        |
|------------------------------|----------------------------------|
| "/"                          | "SearchContainer", "HeaderContainer, Footer                |
| "/search"                    | "SearchIndexContainer"           |
| "/signup"                | "SignupFormContainer"            |
| "/signin"                    | "SessionFormContainer"           |
| "/patient"                   | "PatientProfileContainer"        |
| "/doctor/:id"                | "DoctorContainer"         |
| "/booking/:id"               | "BookingFormContainer"           |
| "/review/:id"                | "ReviewFormContainer"            |
