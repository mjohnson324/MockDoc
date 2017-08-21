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
doctor_stats_id | integer   | foreign key (references doctor profile stats), indexed, unique

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
practice_id            | integer   | not null, foreign key (references practices), indexed



## practices
column name           | data type | details
----------------------|-----------|-----------------------
id                    | integer   | not null, primary key
name                  | string    | not null, indexed, unique
location              | string    | not null, indexed, unique
doctor_id             | integer   | not null, foreign key (references doctors), indexed

## appointments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## Reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | string    | not null
author_id   | text      | not null, foreign key (references patients), indexed

## Ratings
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
overall_rating | integer   | not null
bedside_manner | integer   | not null
wait_time      | integer   | not null
author_id        | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id         | integer   | not null, foreign key (references tags), indexed
