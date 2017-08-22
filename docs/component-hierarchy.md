## Component Hierarchy:

**Header**

**Footer**

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

**Search**

**SearchResultsContainer**
- Search
- Search Parameter
- AppointmentsIndex
  + AppointmentsIndexItem
-DoctorsIndex
  + DoctorsIndexItem

**BookingFormContainer**
- BookingForm

**ReviewFormContainer**
- ReviewForm

## Routes:

| Path                         | Component                        |
|------------------------------|----------------------------------|
| "/"                          | "Search"                         |
| "/createUser"                | "AuthFormContainer"              |
| "/signIn"                    | "AuthFormContainer"              |
| "/patient/editProfile"       | "PatientProfileContainer"        |
| "/patient/pastAppointments"  | "PatientAppointmentsContainer"   |
| "/doctor/:id"                | "DoctorProfileContainer"         |
| "/search/results"            | "SearchResultsContainer"         |
| "/booking/:id"               | "BookingFormContainer"           |
| "/review/:id"                | "ReviewFormContainer"            |
