# Hotel Management System

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [Trello Board](#trello-board)
- [Google Slides Presentation](#google-slides-presentation)
- [Class Diagram](#class-diagram)
-  [Future Work](#future-work) 

## Project Overview
The Hotel Management System is a web application for managing hotel-related operations. It includes functionality for creating and managing hotels, rooms, guests, reservations, and staff. This system is designed to simplify hotel management tasks, such as booking rooms, managing guest information, and handling reservations.

## Features
- Hotel creation and management
- Room management
- Guest registration
- Reservation booking
- Staff management
- Authentication and authorization
- Role-based access control
- RESTful API for integration

## Technologies Used
- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- MySQL
- Bearer Authentication
- Hibernate
- RESTful API
- Maven
- Angular CLI

## Getting Started

### Prerequisites
- Java Development Kit (JDK) 11 or higher
- MySQL database
- Git (optional)
- Angular CLI

### Installation
1. Clone the repository to your local machine.


## Usage
- Access the web application through a web browser at http://localhost:8081.
- Use the provided API endpoints for integration with other systems or applications.


## API Endpoints
### Endpoint Summary

| Endpoint                     | Path                          | HTTP Method | Request Body            | Response Body                          | Description                              |
|------------------------------|-------------------------------|-------------|-------------------------|----------------------------------------|------------------------------------------|
| /bill/generateReport         | POST /bill/generateReport     | POST        | Map<String, Object>    | ResponseEntity<String>                 | Generate a report for bills              |
| /bill/getBills               | GET /bill/getBills           | GET         | None                    | ResponseEntity<List<Bill>>             | Get all bills                           |
| /bill/getPdf                 | POST /bill/getPdf             | POST        | Map<String, Object>    | ResponseEntity<byte[]>                 | Get bill as PDF                         |
| /bill/delete/{id}            | DELETE /bill/delete/{id}     | DELETE      | Integer id              | ResponseEntity<String>                 | Delete a bill by ID                     |
| /dashboard/details           | GET /dashboard/details        | GET         | None                    | ResponseEntity<Map<String, Object>>    | Get details for dashboard                |
| /hotel/add                   | POST /hotel/add               | POST        | Map<String, String>     | ResponseEntity<String>                 | Add a new hotel                         |
| /hotel/get                   | GET /hotel/get               | GET         | String Value (optional) | ResponseEntity<List<Hotel>>            | Get all hotels                          |
| /hotel/update                | PUT /hotel/update             | PUT         | Map<String, String>     | ResponseEntity<String>                 | Update hotel information                |
| /room/add                    | POST /room/add                | POST        | Map<String, String>     | ResponseEntity<String>                 | Add a new room                          |
| /room/get                    | GET /room/get                | GET         | None                    | ResponseEntity<List<roomWrapper>>      | Get all rooms                           |
| /room/update                 | PUT /room/update              | PUT         | Map<String, String>     | ResponseEntity<String>                 | Update room information                 |
| /room/delete/{id}            | DELETE /room/delete/{id}      | DELETE      | Integer id              | ResponseEntity<String>                 | Delete a room by ID                     |
| /room/getByHotel/{id}        | GET /room/getByHotel/{id}    | GET         | Integer id              | ResponseEntity<List<roomWrapper>>      | Get rooms by hotel ID                   |
| /room/getRoomById/{id}       | GET /room/getRoomById/{id}   | GET         | Integer id              | ResponseEntity<roomWrapper>            | Get room by ID                          |
| /room/updateRoomStatus       | POST /room/updateRoomStatus   | POST        | Map<String, String>     | ResponseEntity<String>                 | Update room status                      |
| /user/signup                 | POST /user/signup             | POST        | Map<String, String>     | ResponseEntity<String>                 | Sign up a new user                      |
| /user/login                  | POST /user/login              | POST        | Map<String, String>     | ResponseEntity<String>                 | Login user                              |
| /user/get                    | GET /user/get                | GET         | None                    | ResponseEntity<List<UserWrapper>>     | Get all users                           |
| /user/update                 | PUT /user/update              | PUT         | Map<String, String>     | ResponseEntity<String>                 | Update user information                 |
| /user/checkToken             | GET /user/checkToken         | GET         | None                    | ResponseEntity<String>                 | Check user token validity               |
| /user/changePassword         | PUT /user/changePassword     | PUT         | Map<String, String>     | ResponseEntity<String>                 | Change user password                    |
| /user/forgotPassword         | PUT /user/forgotPassword     | PUT         | Map<String, String>     | ResponseEntity<String>                 | Reset user password                     |


## Contributing
1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch to work on a feature or bug fix.
4. Make your changes, commit them, and push to your fork on GitHub.
5. Create a pull request to the original repository.

## Trello Board
Check the project progress on [Trello]
[https://trello.com/your-trello-board-link](https://trello.com/b/GuAK5Abt/duaaprojectironhack](https://trello.com/b/qkWFGYTt/hotel-managements-project)

## Google Slides Presentation
Explore the project presentation on [Google Slides]
https://docs.google.com/presentation/d/your-presentation-id/edit](https://docs.google.com/presentation/d/1enl90goy0Gw9fIZnXQA7f80QahZHEte-7jiyDRV7iFw/edit#slide=id.gae08f917ff_0_0)https://docs.google.com/presentation/d/1enl90goy0Gw9fIZnXQA7f80QahZHEte-7jiyDRV7iFw/edit#slide=id.gae08f917ff_0_0


## Class Diagram and Use Case Diagram
![classdigram](https://github.com/Duaa3/Hotel-Managements-Project-Backend-/assets/124520079/b046c265-1819-4472-8b9b-90253851c21e)
![hotel](https://github.com/Duaa3/Hotel-Managements-Project-Backend-/assets/124520079/c8c59ab7-bba1-4de0-bec2-799ef04b96be)
![staff](https://github.com/Duaa3/Hotel-Managements-Project-Backend-/assets/124520079/6300df10-0e21-46bc-904a-ad3f0fa140af)
![guest](https://github.com/Duaa3/Hotel-Managements-Project-Backend-/assets/124520079/53b5d5f5-b602-4ab9-ac55-f86d5afec29f)





## Future Work

While the current version of the project provides essential features, there are several areas where future work could enhance its functionality and usability. Some potential improvements include:

1. **Reviews and Ratings:** Add a feature for guests to leave reviews and ratings for hotels, rooms, and their overall experience.

2. **Advanced Search:** Enhance the search functionality with advanced filters, sorting options, and location-based search.

3. **Mobile Application:** Develop a mobile app version to reach a wider audience and provide a seamless booking experience on smartphones.

4. **Internationalization:** Support multiple languages and currencies to cater to a global audience.
# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
