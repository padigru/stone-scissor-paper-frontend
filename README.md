# StoneScissorsPaperFrontend

Frontend for a stone, scissor and paper game. The backend for this game [is here](https://github.com/padigru/stone-scissor-paper-backend).

## Build the application as docker container

To build the application as docker container run the following command in the root directory:

`docker build -t stone-scissors-paper-frontend .`

Start the application with:

`docker run -it -p 80:80 stone-scissors-paper-frontend`

## Run frontend and backend together

You can use the docker-compose file or the helm charts in [this repository](https://github.com/padigru/stone-scissor-paper-deployment).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
