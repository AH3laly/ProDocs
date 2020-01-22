# Introduction to ProDocs:
ProDocs is a web application to create documentation to any project.


# Components:
- Project (Project contain one or more Stories )
- Story (Story contain one or more Articles)
- Article (Article Markdown Content)
- Users
- Global Access Control Lists
- Project Access control List
- Comments (for each article)

# Global Access Control Lists:
- Project Create
- User Create
- User Reset Password
- User Lock/Unlock
- Comment Approve

# Project Access Control List
- Project Update
- Project Delete
- Project Assign Users
- Project Update user Roles
- Project Create Story
-


# Project Config:
- Auto Approve Comments


# Features:
- Create users (Invitation through Email)
- Create Projects
- Create Story (Project contain Stories)
- Create Articles (Story contain one or more articles)
- We use Markdown Editor to create article content
- Assign Users to Project

# Database Structure:

```sql

CREATE TABLE user (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  is_locked tinyint(1) NOT NULL default 0
) charset utf8;


CREATE TABLE project (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  url_key varchar(255) NOT NULL,
  description text(1000) NULL
) charset utf8;

CREATE TABLE story (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  url_key varchar(255) NOT NULL,
  description text(1000) NULL
) charset utf8;

CREATE TABLE article (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  url_key varchar(255) NOT NULL,
  description longtext(10000) NULL
) charset utf8;

```
