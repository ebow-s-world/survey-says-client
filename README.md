Survey Says
======

Survey Says is a web application that allows users to log in, create/update/delete surveys, take surveys,
and view the results of surveys.

Technologies Used
------

Express, MongoDB, Mongoose, HTML, CSS, JavaScript, jQuery, Bootstrap, and Handlebars

Links
------
* Front-End Repo: https://github.com/ebow-s-world/survey-says-client
* Back-End Repo: https://github.com/ebow-s-world/survey-says-server
* Deployed Front-End: PASTE!
* Deployed Back-End: https://glacial-inlet-84927.herokuapp.com

User Stories
------

* As a new user, I can sign up for the application using an email and password.
* As a signed up user, I can use my credentials to sign in to the application.
* As a signed in user, I can change my password.
* As a signed in user, I can sign out.
* As a signed in user, I can create a new survey.
* As a signed in user, I can update my surveys.
* As a signed in user, I can delete my surveys.
* As a signed in user, I can see all surveys created by me and other users.
* As a signed in user, I can take all surveys created by me and other users.

Wireframe
------
https://i.imgur.com/aqSICTd.jpg

Entity Relationship Diagram
------
https://i.imgur.com/RkaLjj4.jpg
https://i.imgur.com/tDEXAwB.jpg

API Paths & Methods
------
### Authentication

| Method   | URL
|--------|------------------------
| POST   | `/sign-up`
| POST   | `/sign-in`
| PATCH  | `/change-password/`
| DELETE | `/sign-out/`

### Surveys

| Method   | URL
|--------|------------------------
| POST   | `/surveys`
| GET    | `/surveys`
| GET    | `/surveys/:id`
| PATCH  | `/surveys/:id`
| DELETE | `/surveys/:id`

### Options

| Method   | URL
|--------|------------------------
| POST   | `/options`
| GET    | `/options`
| GET    | `/options/:id`
| PATCH  | `/options/:id`
| DELETE | `/options/:id`

### Responses

| Method   | URL
|--------|------------------------
| POST   | `/responses`

Planning
------
* Reviewed user-stories, set scope of project, and declared stretch goals
* Created a wireframe and ERD
* Daily SCRUM meetings to discuss accomplishments, roadblocks, and daily goals
* Used ZenHub for project management

Process
------
* Heavily utilized pair and group programming with rotating leaders
* Kept a running list of outstanding tasks to tackle
* Used curl scripts to test API before creating and styling HTML forms
* Methodically worked on code feature-by-feature
* Tested code thoroughly after each new feature was added
* Reviewed each pull request as a group to avoid merge conflicts

Problem-Solving Strategy
------

* Utilized online resources such as StackOverflow to investigate ways to resolve issues
* Pinpointed issues by using debugger and console.log
* Discussed and resolved code issues among group members
* Worked together as much as possible through pair and group programming
* Submitted inquiries to the General Assembly Project Issue queue to request assistance from instructors

Plans for Future Improvements
------
* Improve UI to make the application more intuitive and improve user experience
* Display aggregate survey results in a pie or bar chart

Team
------
* [Cory Anders](https://git.generalassemb.ly/cande04)
* [Thomas O'Hearne](https://github.com/tohearne)
* [Greg Thomas](https://github.com/agregthomas)
* [Eric Bowman](https://github.com/ericjbowman)
