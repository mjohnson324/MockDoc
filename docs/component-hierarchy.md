## Component Hierarchy:

**HeaderContainer**
  - Header

**AuthFormContainer**
- AuthForm

**PatientProfileContainer**
- PatientProfile

**PatientAppointmentsContainer**
- AppointmentsIndex
  + AppointmentsIndexItem

**DoctorProfileContainer**
- DoctorProfileHeader
- DoctorProfile
  - DoctorAppointmentsIndex
    + DoctorAppointmentsIndexItem
- ReviewsIndex
  + ReviewsIndexItem

**SearchContainer**
- Search

**SearchResultsContainer**
- Search
- Search Parameter
- AppointmentsIndex
  + AppointmentsIndexItem
-DoctorsIndex
  + DoctorsIndexItem

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
