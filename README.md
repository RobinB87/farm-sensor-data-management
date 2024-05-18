Steps:

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

   # backend:

   a. generate a sensor module in the backend (nest g module sensor-data)
   b. generate a sensor controller (nest g controller sensor-data)
   c. verify with postman if basic route works
   d. enable CORS on the backend, so frontend is allowed to reach it (basic CORS setup for now)
   e. setup a basic api result model in the backend to be able to return a generic object to the frontend from every controller, that is pretty nice for handling in the frontend

   # frontend:

   a. generate a sensor data module in the frontend (ng new module sensor-data)
   b. generate a sensor data component
   c. add route with empty path, so component gets shown without a specific route
   d. add a service which returns the basic get method and pipes the api result model to just a string for now
   e. call service method in frontend, keep it just an observable and async pipe it in the frontend

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
