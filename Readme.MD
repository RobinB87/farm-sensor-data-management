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
