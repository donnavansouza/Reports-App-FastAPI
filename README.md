### Reports App w/ FastAPI


## Each API has its own README file providing specific instructions and documentation on how to run and use them. Please follow the instructions in each README file to set up and run the corresponding component of the project.

## This project consists of two FastAPI applications and a frontend Vite.js application:

### Municipality API: Provides endpoints to query Brazil's State Ceará municipalities data based on various criteria, including name, population, and IDHM of different years, and starting character.
### Reports API: Manages reports related to municipalities in Brazil's State of Ceará. It interacts with an external API that provides data about Ceará municipalities.
### Frontend Application: A Vite.js frontend application that consumes data from the Municipality and Reports APIs and interacts with both to provide a user interface for viewing and managing municipality reports.



## How to Run the Application
- **To run the entire application, make sure you have Docker installed on your machine. Then, navigate to the root directory of the project and execute the following commands:**

- docker-compose up --build

**This command will build and start all the services defined in the docker-compose.yml file. Each service, including the Reports API, Municipality API, and the frontend application, will be available on the specified ports.**

Please note that the docker-compose.yml file is configured for Docker Compose version 3.9. If you encounter any issues related to the Docker Compose version, ensure that your Docker Compose version is compatible with the configuration provided in the file.