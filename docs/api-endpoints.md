# API Endpoints

All api endpoints deliver json-formatted data to the frontend.

## Root

- GET / - loads React web app

## API Users

- POST /api/users
- GET /api/users/:id

## API Session

- POST /api/session
- DELETE /api/session

## API Doctors

- GET /api/doctors/
  - Doctors /search:
  - accepts location query param to find doctors by location
  - accepts specialty query param to find doctors by specialty
- GET /api/doctors/:id

## API Appointments

- GET /api/appointments/:id
- PATCH/PUT /api/appointments/:id

## API Reviews

- POST /api/reviews
- PATCH/PUT  /api/reviews/:id
- DELETE /api/reviews/:id
