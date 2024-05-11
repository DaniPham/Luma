# Luma Playwright Automation

### Overview

This project is aimed at providing automated testing capabilities using Playwright, a Node.js library for automating web browsers. It includes test scripts written in JavaScript to automate the testing of web.

### Prerequistites

Before running the tests, ensure you have the following installed:

* Node.js: [Here](https://nodejs.org/)
* npm: Node.js package manager, usually installed automatically with Node.js
* Playwright: Using npm:

```
npm install playwright
```

### Running Tests

To execute the test suite, run the following command:

```
npx playwright test
```

To execute the test suite in headed mode, run command:

```
npx playwright test --headed
```

### Reporting

Test execution reports are generated using the built-in Playwright test runner. Reports are generated in the `./test-results` directory after test execution.
