# Todo App with Docker
This is a simple Todo application built using React, NestJS, and PostgreSQL, all running inside Docker containers. It uses Docker Compose to set up and manage the services.

## Getting Started

### 1. Clone the Repository
Start by cloning the repository to your local machine:
```bash
git clone https://github.com/thilina15/todo-app.git
```

### 2. Navigate to the Project Directory
Move into the root directory of the project:
```bash
cd todo-app
```

### 3. Build and Start the Docker Containers

Run the following command to build and start the Docker containers:
```bash
docker-compose up --build
```
if this is not working in your docker environment, try this insted 
```bash
docker compose up --build
```
Docker will pull the required images and set up the necessary services (PostgreSQL, backend, and frontend).


### 4. Access the Application

Once the system is up and running, open your web browser and go to:
```bash
http://localhost:3000
```
You should see the Todo app interface, where you can add tasks, mark them as done, and view the recent tasks.

## Notes

-   Backend is accessible on `http://localhost:4000`.
-   PostgreSQL is running on port `5431`.
-   Make sure Docker is installed and running on your system.