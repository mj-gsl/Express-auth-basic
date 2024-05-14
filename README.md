# Express Authentication App

This is a simple authentication application built with Express.js. It includes basic login and registration functionality, using in-memory storage for user information. The app also includes automated tests and a CI/CD pipeline setup.

## Features

- User registration and login
- Session management with `express-session`
- Password hashing with `bcryptjs`
- Automated tests with `Mocha` and `Chai`
- CI/CD pipeline with GitHub Actions

## Prerequisites

- Node.js v22.x
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mj-gsl/Express-auth-basic.git
   cd Express-auth-basic

## Install dependencies:

npm install

## Create a .env file with the following content:
SESSION_SECRET=your-secret-key

## Start the server
npm start

## Open your browser and navigate to http://localhost:3000

Use the following endpoints to register and log in:

Registration: http://localhost:3000/register.html

Login: http://localhost:3000/login.html


## To run the automated tests:
npm test

## --------- CI/CD Pipeline
This project uses GitHub Actions for continuous integration and deployment. The pipeline runs on every push and pull request to the main branch, testing the application with Node.js v22.x.

Project Structure
index.js: Main application file.
auth.js: Authentication routes.
public/: Directory for static HTML files.
test/: Directory for test files.
.github/workflows/node.js.yml: GitHub Actions workflow file.
.env.example: Example environment configuration file.
