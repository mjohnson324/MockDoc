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

**DoctorProfileContainer**
  - DoctorProfileHeader
  - DoctorProfile
  - DoctorAppointmentsIndex
    + DoctorAppointmentsIndexItem
    - ReviewsIndex
  + ReviewsIndexItem

**SearchContainer**
  - Search

**SearchIndexContainer**
- Search
- SearchIndex


**BookingFormContainer**
- BookingForm

- AppointmentsTable
  - AppointmentsDayDisplay

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
