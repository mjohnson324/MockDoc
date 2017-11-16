## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null

## doctors
column name            | data type  | details
-----------------------|------------|-----------------
id                     | integer    | not null, primary key
first_name             | string     | not null
last_name              | string     | not null
degree                 | string     | not null
gender                 | string     | not null
education              | text       | not null
lat                    | float      |
lng                    | float      |
professional_statement | text       |

## doctor_specialties (join table)
column name      | data type | details
-----------------|-----------|------------------
id               | integer   | not null, primary key
doctor_id        | integer   | not null, foreign key (references doctors)
specialty_id     | integer   | not null, foreign key (references specialties)
- [doctor_id, specialty_id], indexed, unique

## specialties
column name  | data type | details
-------------|-----------|------------------
id           | integer   | not null, primary key
name         | string    | not null, indexed, unique

## doctor_certifications (join table)
column name      | data type | details
-----------------|-----------|------------------
id               | integer   | not null, primary key
doctor_id        | integer   | not null, foreign key (references doctors)
certification_id | integer   | not null, foreign key (references board_certifications)
- [doctor_id, certification_id], indexed, unique

## certifications
column name | data type | details
------------|-----------|------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed, unique

## appointments
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
patient_id          | integer   | not null, foreign key (references patients), indexed
doctor_id           | integer   | not null, foreign key (references doctors)
start_time          | timestamp | not null
reason              | text      | not null
- [start_time, doctor_id], indexed, unique

## reviews
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
appointment_id | text      | not null, foreign key (references patients), indexed, unique
overall_rating | integer   | not null
bedside_manner | integer   | not null
wait_time      | integer   | not null
body           | text      |
