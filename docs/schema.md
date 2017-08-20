# Database Schema

## users
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
username       | string    | not null, unique
session_token  | string    | not null, unique
password_digest| string    | not null
profile_pic_url| string    |
cover_pic_url  | string    |
location       | string    |
created_at     | datetime  | not null
updated_at     | datetime  | not null

## tracks
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null
uploader_id    | integer   | not null, foreign key
track_url      | string    | not null
image_url      | string    |
description    | string    |
genre          | string    |
created_at     | datetime  | not null
updated_at     | datetime  | not null

## comments
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
body           | string    | not null
commenter_id   | integer   | not null, foreign key
track_id       | integer   | not null, foreign key
created_at     | datetime  | not null
updated_at     | datetime  | not null
