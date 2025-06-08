# Personal portfolio project

> Important note: this project is currently under development, so there could be error in the code or services that do not work yet

Welcome to my personal portfolio project!
My name is Óscar, I am a software engineering student and I'm building this website project to have somewhere to gather my software projects.

Right now you can run this locally or (hopefully) access it online direcly via your web browser once I host it

## Running it locally

To run this project in your local machine, you have to enable three services:

- MySQL for the database
- Spring boot for the backend
- React for the frontend

Depending on your needs and intentions for each service (developing, testing, just taking a look at the result), you can choose to options:

- Run the service direcly on your machine. This option allows easier development and testing
- Run the Docker container. This option is quicker and easier

### Using Docker

If you want to run one of these services in a Docker container, you should:

- Have Docker installed on your machine
- Run ```docker compose up -d``` if you want to run all services
- Run ```docker compose up -d <MySQL> <Spring> <React>```

### Run it directly on your machine

For this you will need certain prequisites and to follow a somewhat more complex running process

#### Prequisites

- MySQL
- Java 21
- Node 22 and npm 10

#### Steps

1. Run and configure MySQL. Set the root password as specified in the ./src/main/resources/application.properties or use environment variables (recommended)
2. On the MySQL service, create a new database called portfolio ```CREATE DATABASE portfolio;```
3. Run Spring using the maven wrapper ```./mvnw spring-boot:run```
4. Enter the frontend folder ```cd ./frontend```
5. Install dependencies ```npm install```
6. Run the frontend ```npm run```



