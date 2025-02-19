# Cypress End-to-End Testing for Magento Software Testing Board

This project uses [Cypress](https://www.cypress.io/) for end-to-end testing of the Magento Software Testing Board website ([https://magento.softwaretestingboard.com/](https://magento.softwaretestingboard.com/)). Cypress makes it easy to write, run, and debug tests for web applications.

## Project Overview

This repository contains automated tests for the Magento Software Testing Board's eCommerce website, primarily testing features such as:

- Product browsing and searching.
- Adding items to the cart.
- User registration and login.
- Checkout process.
- Category and product pages.

## Installation

1. Clone the repository:
   git clone <repository-url>
   cd <repository-directory>

2. Install dependencies:
npm install

3. Install Cypress: Cypress is automatically installed with the dependencies, but you can install it manually if needed:

npx cypress install

Running Tests
1. To run the tests in the browser:
npx cypress open

2. To run the tests individually
npm run cy:run

3. To run the test parallely
npm run cy:parallel 

##Reports
On execution of the test suits the related html reports can be find at location
/hiring_SeniorQACodeChallenge/source/cypress/reports/html/



