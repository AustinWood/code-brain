# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## notes
column name | data type | details
------------|-----------|-----------------------
id            | integer   | not null, primary key
question      | string    | not null
skeleton      | text      | not null
answer        | text      | not null
author_id     | integer   | not null, foreign key (references users), indexed
leitner_score | integer   | not null
next_review   | date      | not null

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
note_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
