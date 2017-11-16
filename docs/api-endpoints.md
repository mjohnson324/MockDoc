# API Endpoints
---

### Root

- GET / - loads React web app

### Users

- POST /api/users
- GET /api/users/:id

### Session

- POST /api/session
- DELETE /api/session

### Doctors

- GET /api/doctors/
  - Doctors /search:
  - accepts location query param to find doctors by location
  - accepts specialty query param to find doctors by specialty
- GET /api/doctors/:id

### Appointments

- GET /api/appointments/:id
- PATCH /api/appointments/:id

### Reviews

- POST /api/reviews
- PATCH  /api/reviews/:id
- DELETE /api/reviews/:id
