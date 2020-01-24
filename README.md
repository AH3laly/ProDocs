# Introduction to ProDocs:
`ProDocs` is a web application to create documentation to any project.

# User Story:
- We need to create a site for each client.
- User use username and password to access his site.
- User create projects.
- User Invite any user by email to join the project.
- Each project can contain one or more story, Ex: User Docs, Tech Docs, etc.
- Each story can contain one or more articles.
- Article can be a parent article or a child of other article.
- Client can control user access to Project, Story or Article.
- When a user login to his account, all projects from any site will be available in my Projects menu.
- Any user can post comment on (Project, Story, Article)
- We will export whole project to PDF in the near future.


# Use Cases:
- Client Register.
- Client reset password.


# Components:
- Project (Project contain one or more Stories )
- Story
- Users
- Global Access Control Lists
- Project Access control List
- Comments (for each article)
- Bread Cramps


# Global Access Control Lists:
- Project Create
- User Create
- User Reset Password
- User Lock/Unlock
- Comment Approve

# Project Access Control List
- Project Scope (Public or Private).
-- Public Projects are visible to external world.
-- Private Projects are invisible to external world and controllable by Access Control Lists.
- Project Update
- Project Delete
- Project Assign Users
- Project Update user Roles
- Project Create Story


# Project Config File:
- Auto Approve User Registrations (True or False)
- Allow User Registration (True or False).
- Require email verification for newly registered users (True or False)
- Allow Password Reset (True or False)
- Invalid Password Lockout time (Number of Minutes).
-


# User Story:
- Create users (Invitation through Email)
- Create Projects
- Create Story (Project contain one or more Stories)
- Create Articles (Story contain one or more articles)
- We use Markdown Editor to create article content
- Assign Users to Project

## Article Available Tags:
- link
- code block (All languages highlighting)
- Image
- Table
- Box (Notice, Success, Warning, Alert)


# Forms:
- Login
- Register
- Password Reset
- Comment Box
- Profile Update

# Security Notes:
- All forms must be secured Using Capcha.
- All forms must be secured using CSRF tokens.
- All forms must be secured against XSS attacks.
- All forms must be secured against SQL injection.
- Five invalid login attempts will lock account for 30 minutes and notify admin.


# Database Structure:

```sql

CREATE TABLE user (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  is_locked tinyint(1) NOT NULL default 0,
  create_date datetime NOT NULL default CURRENT_TIMESTAMP,
  update_date datetime NULL
) charset utf8;


CREATE TABLE project (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  url_key varchar(255) NOT NULL,
  description text(1000) NULL,
  owner_id int(11) NOT NULL,
  create_date datetime NOT NULL default CURRENT_TIMESTAMP,
  update_date datetime NULL
) charset utf8;

CREATE TABLE story (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  url_key varchar(255) NOT NULL,
  description text(1000) NULL,
  create_date datetime NOT NULL default CURRENT_TIMESTAMP,
  update_date datetime NULL,
  owner_id int(11) NOT NULL
) charset utf8;

```
