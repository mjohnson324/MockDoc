## patients
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
name            | string    | not null
birthday        | date      | not null
sex             | string    | not null
phone number    | integer   | not null, indexed, unique

## doctors
column name            | data type | details
-----------------------|-----------|-----------------
id                     | integer   | not null, primary key
education              | text      | not null
languages              | string    | not null
professional_statement | text      |


## doctor-specialties
column name      | data type | details
-----------------|-----------|------------------
id               | integer   | not null, primary key
doctor_id        | integer   | not null
specialty_id     | integer   | not null

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
seen_before         | boolean   | not null, default: false
phone_number        | integer   | not null

## reviews
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
author_id      | text      | not null, foreign key (references patients), indexed
doctor_id      | integer   | not null, foreign key (references doctors), indexed
overall_rating | integer   | not null
bedside_manner | integer   | not null
wait_time      | integer   | not null
body           | text      |
