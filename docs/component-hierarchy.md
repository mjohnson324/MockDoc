## Component Hierarchy:

**HeaderContainer**
  - Header

**SessionFormContainer**
  - SessionForm

**SignupFormContainer**
  - SignupForm

**PatientProfileContainer**
  - PatientProfile
    + PatientIndexItem

**DoctorContainer**
  - Doctor
    + DoctorsMap
    + DoctorReviews
      + DoctorReviewsItem
    + DoctorAppointments
      + AppointmentsTable
        + AppointmentsDayDisplay

**SearchContainer**
  - Search (This is the search bar)

**SearchIndexContainer**
- SearchIndex (This displays search results)
  + DoctorsMap (Google Maps Display)
  + SearchContainer
    + Search
  + SearchIndexItem
      + AppointmentsTable (Holds Lists of Appointments sorted by day)
        + AppointmentsDayDisplay (Each is a list of appointments)

**BookingFormContainer**
  - BookingForm

**ReviewFormContainer**
  - ReviewForm

## Routes:

| Path                         | Component                        |
|------------------------------|----------------------------------|
| "/"                          | "SearchContainer"                |
| "/search"                    | "SearchIndexContainer"           |
| "/createuser"                | "SignupFormContainer"            |
| "/signin"                    | "SessionFormContainer"           |
| "/patient"                   | "PatientProfileContainer"        |
| "/doctor/:id"                | "DoctorProfileContainer"         |
| "/booking/:id"               | "BookingFormContainer"           |
| "/review/:id"                | "ReviewFormContainer"            |
