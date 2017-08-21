## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
birthday        | date      | not null
sex             | string    | not null
address         | string    |
phone number    | integer   | indexed, unique
doctor_stats_id | integer   | foreign key (references doctor-stats), indexed, unique

## doctor-stats
column name            | data type | details
-----------------------|-----------|-----------------
id                     | integer   | not null, primary key
education              | text      | not null
languages              | string    | not null
board certifications   | string    | not null
memberships            | string    | not null
in_network_insurances  | text      | not null
specialties            | string    | not null
professional_statement | text      | not null

## doctors-and-practices
column name  | data type | details
-------------|-----------|-----------------
id           | integer   | not null, primary key
doctor_id    | integer   | not null, foreign key (references doctor-stats), indexed
practice_id  | integer   | not null, foreign key (references practices), indexed

## practices
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
name         | string    | not null, indexed
location     | string    | not null, indexed, unique

## appointments
column name         | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
patient_id          | integer   | not null, foreign key (references users), indexed
doctor_id           | integer   | not null, foreign key (references doctor-stats), indexed
time                | timestamp | not null
visitor_name        | string    | not null
insurance           | string    | not null
appointment_reason  | string    | not null
seen_before         | boolean   | not null, default: false
phone_number        | integer   | not null
insurance_member_id | integer   |
notes               | text      |

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
author_id   | text      | not null, foreign key (references users), indexed
doctor_id   | integer   | not null, foreign key (references doctor-stats), indexed

## Ratings
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
overall_rating | integer   | not null
bedside_manner | integer   | not null
wait_time      | integer   | not null
author_id      | integer   | not null, foreign key (references users), indexed
doctor_id      | integer   | not null, foreign key (references doctor-stats), indexed
tag_id         | integer   | not null, foreign key (references tags), indexed
