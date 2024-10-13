
# NestJS Library API

 
A simple library management API built using NestJS, Prisma ORM, JWT for authentication, and PostgreSQL for the database. This project includes authentication for users and admin roles, as well as the ability to manage books, genres, reviews, and reading progress.

## **Features**

-  **Authentication**: Users can register, login, and receive JWT tokens.

-  **Admin Role**: Admins can add and manage books and genres.

-  **User Role**: Users can write reviews and track their reading progress.

-  **Book Management**: Books can belong to multiple genres.

-  **Genre Management**: Admins can manage genres.

-  **Review Management**: Users can leave reviews for books.

-  **Reading Progress**: Users can track their reading progress for books.

## Environment Setup

Create a `.env` file in the root directory with the following content:

```bash
DATABASE_URL=postgres://postgres:mysecretpassword@localhost:5433/library_db
JWT_SECRET_KEY=your_jwt_secret
```

## Project setup

```bash
$  npm  install
```

## Compile and run the project

```bash
# development
$  npm  run  start

# watch mode
$  npm  run  start:dev

# production mode
$  npm  run  start:prod
```

## Run tests

  Before executing the end-to-end tests, make sure you have the following test accounts.
-   Admin : username: admin, password: admin, role: admin
-   User : username: user, password: user, role: user

```bash
$  npm  run  test:e2e
```
## **Documentation**
Swagger is used for API Documentation, you can see it in `http://localhost:3000/swagger`

## **Pattern**

-  **Modular Pattern**: Every application is divided into multiple modules, each encapsulating related functionality. This enhance separation of concerns, reusability, and maintainability.

-  **Dependency Injection**: NestJS uses Dependency Injection  to manage the lifecycle and dependencies of classes (services, controllers, etc.). It ensures loosely coupled code

-  **Repository Pattern**: This pattern separates data access logic from the business logic, keeping database queries separate in dedicated repository classes. In ORMs like Prisma, each model is treated as a repository, and operations are executed through the model's methods.

## **Tech Stack**
-  **NestJS**: Backend framework.
-  **Prisma ORM**: Database ORM for PostgreSQL.
-  **JWT**: Authentication mechanism.
-  **PostgreSQL**: Database.
-  **Swagger**: API documentation and testing.
