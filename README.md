# Practical Web Development Final Project 
build a RESTful full-stack web application to manage students and campuses

Prof. Melissa Lynch - Section 1 Fall 2021

# Contributors
Ashley Gong - ashleyg101  
Hayley Robinson - hayleyrobin    
Shinnosuke Takahashi - Shinnosuke-Takahashi  

# Software
- Node
- Express
- React
- Redux
- PostgreSQL
- Sequelize

# User Stories
As a user I 
- [x] will land on a visually pleasing homepage by default, which allows navigation to view all campuses and all students

- can navigate to all campuses view, and
  - [x] see a list of all campuses in the database
  - [x] see an informative message if no campuses exist
  - [x] add a new campus with a validated form displaying real-time error messages

- can navigate to a single campus view, and
  - [x] see details about a single campus, including enrolled students (if any)
  - [x] see an informative message if no students are enrolled at that campus
  - [x] navigate to any student’s single student view 
  - [x] delete the campus 
  - [x] edit campus information (including adding/removing students) with a validated form displaying real-time error messages

- can navigate to all students view, and
  - [x] see a list of all students in the database
  - [x] see an informative message if no students exist
  - [x] add a new student with a validated form displaying real-time error messages

- can navigate to a single student view, and
  - [x] see details about a single student, including the campus at which they are enrolled (if exists)
  - [x] see an informative message if student is not enrolled at a campus
  - [x] navigate to single campus view of the student’s enrolled campus
  - [x] delete the student
  - [x] edit the student’s information (including campus s/he is enrolled at) with a validated form displaying real-time error messages
