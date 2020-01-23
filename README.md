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


# Project Config File:
- Auto Approve Comments
- Allow User Registration.
-

# Use

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

CREATE TABLE article (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  url_key varchar(255) NOT NULL,
  description longtext(10000) NULL,
  create_date datetime NOT NULL default CURRENT_TIMESTAMP,
  update_date datetime NULL,
  owner_id int(11) NOT NULL
) charset utf8;

```
