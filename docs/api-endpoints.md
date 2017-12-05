# API Endpoints
---

### Root

- GET / - loads React web app

### API Users

- POST /api/users
- GET /api/users/:id

### API Session

- POST /api/session
- DELETE /api/session

### API Doctor

- GET /api/doctors/
  - Doctors /search:
  - accepts location query param to find doctors by location
  - accepts specialty query param to find doctors by specialty
- GET /api/doctors/:id

### API Appointments

- GET /api/appointments/:id
- PATCH /api/appointments/:id

### API Reviews

- POST /api/reviews
- PATCH  /api/reviews/:id
- DELETE /api/reviews/:id
