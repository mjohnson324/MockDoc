## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name            | string    | not null

## doctors
column name            | data type  | details
-----------------------|------------|-----------------
id                     | integer    | not null, primary key
gender                 | string     | not null
education              | text       | not null
lat                    | float      | not null
lng                    | float      | not null
professional_statement | text       |


## doctor-specialties
column name      | data type | details
-----------------|-----------|------------------
id               | integer   | not null, primary key
doctor_id        | integer   | not null
specialty_id     | integer   | not null
- [doctor_id, specialty_id], indexed, unique

## specialties
column name  | data type | details
-------------|-----------|------------------
id           | integer   | not null, primary key
name         | string    | not null, indexed, unique

## doctor-certifications
column name      | data type | details
-----------------|-----------|------------------
id               | integer   | not null, primary key
doctor_id        | integer   | not null
certification_id | integer   | not null
- [doctor_id, certification_id], indexed, unique

## board-certifications
column name | data type | details
------------|-----------|------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed, unique

## appointments
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
patient_id          | integer   | not null, foreign key (references patients), indexed
doctor_id           | integer   | not null, foreign key (references doctors), indexed
start_time          | timestamp | not null
reason              | text      | not null

## reviews
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
patient_id     | text      | not null, foreign key (references patients), indexed
doctor_id      | integer   | not null, foreign key (references doctors), indexed
overall_rating | integer   | not null
bedside_manner | integer   | not null
wait_time      | integer   | not null
body           | text      |
