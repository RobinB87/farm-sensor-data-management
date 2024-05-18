# INSTRUCTIONS

- cd to backend and run npm install => followed by npm run start:dev
- cd to frontend and run npm install => followed by ng serve -o
- if correct, everything works out of the box:
  - db file will be created in backend
  - migrations will be created
  - use postman to add some initial data, or use the form

# BRIEF EXPLANATION

I've decided to use Angular and NestJS for this assignment. I have added my docker files, because I mostly use a devcontainer for development. However, for ease, local installation works as well (see instructions).

1. I scaffolded the new frontend and backend projects, which I then tested by adding an endpoint in the backend, setting up CORS, and calling the endpoint in the frontend. I just displayed a very simple string just to verify everything works.
2. Then I added my 'in memory' sqlite database and created a simple data model. I wanted to add humidity and temperature later as well, but I guess it does not really matter for now which data I display. NestJS can handle auto migrations and model syncs by using migrationsRun: true and synchronize: true (not recommmended for PROD use).
3. Display the data in an Angular material table, then extract this table to it's own component.
4. Create dialog to add data and merge this to my observable stream, so that the added item is immediately displayed.
5. At this point I was thinking: 'A form probably does not make sense, as sensor data comes from PLC controllers or something...!'. So I was thinking about creating a microservice structure, with one service who was just pushing data randomly. However, as the assignment mentions 'simplicity' and 'basic' a couple of times, I thought this was maybe a bit too much for now. And went with a different approach (see point 7).
6. Finish up project so far; create some unit tests and error handling.
7. Add an RxJS interval which refreshes data every 10 seconds and merges this to the current observable stream.

- mimic microservice / sensor data machines by just posting data with postman
- verify adding data by form still works

# DETAIL EXPLANATION

Some additional steps which I have taken are described here.

1. Set up my docker dev environment:

   - These are just basic templates you can use to set up a local environment with all the required tools / frameworks installed via Docker (mostly I have nothing locally installed except for VSCode)
   - Node alpine is a very lightweight container, so I install Angular CLI and Nest CLI via the Dockerfile
   - Installed LTS versions of Angular (16), Node (20) and Nest (10.3.2)
   - Verify environment works correctly: nest new backend --dry-run and ng new frontend --dry-run

2. Set up a basic backend

   - nest new backend
   - remove redundant files and verify everything works: npm run start:dev

3. Set up a basic frontend

   - ng new frontend
   - remove some redundant markup and verify everything works: ng serve -o

4. Connect the backend and frontend

   BACKEND:

   - generate a sensor module in the backend (nest g module sensor-data)
   - generate a sensor controller (nest g controller sensor-data)
   - verify with postman if basic route works
   - enable CORS on the backend, so frontend is allowed to reach it (basic CORS setup for now)
   - setup a basic api result model in the backend to be able to return a generic object to the frontend from every controller, that is pretty nice for handling in the frontend

   FRONTEND:

   - generate a sensor data module in the frontend (ng new module sensor-data)
   - generate a sensor data component
   - add route with empty path, so component gets shown without a specific route
   - add a service which returns the basic get method and pipes the api result model to just a string for now
   - call service method in frontend, keep it just an observable and async pipe it in the frontend

5. renamed some stuff as I saw the correct name should be sensors, not sensor-data (like SensonModule)

6. install sqlite as in memory database and typeorm as the ORM

- npm i @nestjs/typeorm typeorm
- npm i sqlite3

7. persist sensors

- create a sensor entity and ensure typeorm recognizes it by adding it to the typeorm.forfeature in the sensor module
- create sensor service which can create a sensor
- create sensor create action in controller
- use POSTMAN to see if create works (POST request to localhost:3000/sensors/data) with a body of { "type": "b", "value": 100 }
- use POSTMAN to test GET as well

8. create angular material table and dialog for adding data

9. dto validation:

- npm i class-validator class-transformer

10. interval

- add an interval which refreshes data every 10 seconds, but starts immediately as well
- test with postman
- test if using form still works as well
