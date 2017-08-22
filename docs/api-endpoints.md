# API Endpoints

## HTML API

### Root

- 'GET /' - loads React web app

### Users

- 'POST /api/patients'
- 'PATCH /api/patients/id'

### Session

- 'POST /api/session'
- 'DELETE /api/session'

### Doctors

- 'GET /api/doctors/'
  - Doctors /search:
  - accepts 'gender' query param to find doctors by gender
  - accepts 'location' query param to find doctors by location
  - accepts 'specialty' query param to find doctors by specialty
- 'GET /api/doctors/id/'

### Appointments

- 'GET /api/appointments'
- 'GET /api/appointments/id'
- 'PATCH /api/appointments/id'

### Reviews

- A doctor's reviews will be included in the doctor show template
- 'GET /api/doctors/id/reviews'
- 'POST /api/doctors/id/reviews'
