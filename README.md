# **Survey Says**

Survey Says is a web application that allows users to log in, create/update/delete surveys, take surveys,
and view the results of surveys.

**Technologies Used**
===

Back-End
---
- ![node](https://icongr.am/devicon/nodejs-original.svg) Node
- ![express](https://icongr.am/devicon/express-original.svg) Express
- ![mongo](https://icongr.am/devicon/mongodb-original-wordmark.svg) MongoDB
- ![mongoose](https://pm1.narvii.com/6325/27c78e40ca616a10b0dc546b5a91b532596217b4_128.jpg) Mongoose

Front-End
---
- ![javascript](https://icongr.am/devicon/javascript-original.svg) Javascript
- ![jquery](https://icongr.am/devicon/jquery-original.svg) JQuery


Styling
---
- ![html](https://icongr.am/devicon/html5-original.svg) HTML
- ![css](https://icongr.am/devicon/css3-original.svg) CSS
- ![sass](https://icongr.am/devicon/sass-original.svg) Sass
- ![bootstrap](https://icongr.am/devicon/bootstrap-plain.svg) Bootstrap
- ![handlebars](https://icongr.am/devicon/handlebars-original.svg) Handlebars (aka Eric's Bootstrap)


Links
---
* Front-End Repo: https://github.com/ebow-s-world/survey-says-client
* Back-End Repo: https://github.com/ebow-s-world/survey-says-server
* Deployed Front-End: https://ebow-s-world.github.io/survey-says-client/
* Deployed Back-End: https://glacial-inlet-84927.herokuapp.com

User Stories
------

### Authorization
* As a new user, I can sign up for the application using an email and password.
* As a signed up user, I can use my credentials to sign in to the application.
* As a signed in user, I can change my password.
* As a signed in user, I can sign out.

### Survey Create/Edit
* As a signed in user, I can get all surveys that I have created.
* As a signed in user, I can create a new survey.
* As a signed in user, I can change the title, add, and remove options from surveys I have created (NOTE: each survey must have at least ***2*** options!).
* As a signed in user, I can delete surveys I have created.

### Take Surveys
* As a signed in user, I can see all surveys.
* As a signed in user, I can submit a response to any survey.
* As a signed in user, I can view the results of any survey.

Wireframe
------
![wireframe](https://i.imgur.com/aqSICTd.jpg)

Entity Relationship Diagram
------
### Basic ERD
![erd1](https://i.imgur.com/RkaLjj4.jpg)

### Schema Definitions
![erd2](https://i.imgur.com/tDEXAwB.jpg)

API Paths & Methods
------
### Authentication

| Method | URL
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
| GET    | `/my-surveys`
| PATCH  | `/surveys/:id`
| DELETE | `/surveys/:id`

### Options

| Method   | URL
|--------|------------------------
| POST   | `/options`
| PATCH  | `/options/:id`
| DELETE | `/options/:id`

### Responses

| Method   | URL
|--------|------------------------
| POST   | `/responses`

Planning
------

### Day 0 Planning Meeting
**GOAL:** Consensus on requirements, back-end schema, and scope (i.e. MVP vs. Stretch)
* Reviewed user-stories to determine scope
* Created a wireframe and ERD
* Brainstormed stretch goals
* Determined schedule for daily Scrums and "sprints"
  - Scrum stand-ups three times daily
* Agreed to Use ZenHub for project management

### Day 1 Planning Meeting
**GOAL:** Breakdown scope into tasks, assign work, and document in ZenHub
* Categorized objectives into Back-End, Front-End, and Stretch Goal epics
* Set milestones (i.e. sprints) based on day:
  - Day 1 = Back-End
  - Day 2 = Front-End
  - Day 3+ = Front-End Styling + Stretch Goals

### Day 2 Planning Meeting
**GOAL:** Revisit tasks, review schedule
* Whiteboarded all objectives
* Reviewed which had been completed updated ZenHub accordingly
* Work assigned

### Day 3 Planning Meeting
**GOAL:** Highlight remaining MVP requirements, assess stretch Goals
* Whiteboarded reamining objectives
* Work assigned

Process
------
* Stand-ups at beginning, middle, and end of the day.
* Heavily utilized pair and group programming with rotating leaders
* Kept a running list of outstanding tasks to tackle
* Used curl scripts to test API before creating and styling HTML forms
* Methodically worked on code feature-by-feature
* Tested code thoroughly after each new feature was added (TDD)
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
* Display aggregate survey results in charts
* Each survey dislayed as a link which will open survey on its own page
* Search Surveys by Title 
* Front-End Validation
  - One Response per User per Survey
  - Cannot delete Surveys which have Responses
  - Cannot delete Options which have Responses
* Back-End Validation
  - One Response per User per Survey
  - Limit 1 Response per User per Survey
  - Limit 10 Options per Survey
  - Delete Surveys also deletes dependencies (Options and Responses)
*

Team
------
* [Cory Anders](https://github.com/cande04)
* [Thomas O'Hearne](https://github.com/tohearne)
* [Greg Thomas](https://github.com/agregthomas)
* [Eric Bowman](https://github.com/ericjbowman)
