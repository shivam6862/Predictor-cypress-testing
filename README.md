# Predictor cypress testing

## Overview

This repository contains the source code for the Smoke and Drink Prediction application, along with comprehensive end-to-end (E2E) testing and component testing using Cypress.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
  - [End-to-End Testing](#end-to-end-testing)
  - [Component Testing](#component-testing)

## Installation

To get started with the Smoke and Drink Prediction application, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/shivam6862/Predictor-cypress-testing.git
   ```

2. Change into the project directory:

   ```bash
   cd smoke-and-drink-prediction
   ```

3. Install dependencies in frontend dir:

   ```bash
   npm install
   ```

4. Install dependencies in backend dir:

   ```bash
   pip install -r requirements. txt
   ```

## Usage

After the installation, you can run the application using:

```bash
npm run dev
```

This will start the application, and you can access it at [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

### End-to-End Testing

We have implemented end-to-end (E2E) testing to comprehensively validate the functionality of the Smoke and Drink Prediction application. Cypress, a powerful E2E testing framework, is employed to ensure that the entire application workflow functions seamlessly.

#### Test Scenarios:

1. **Form Fill:**

   - Ensures that the user can successfully fill out and submit the prediction form without encountering errors.
   - Validates the accuracy of input fields and ensures proper handling of various input scenarios.

2. **Prediction:**

   - Verifies the accuracy of the prediction algorithm by comparing expected results with the actual predictions made by the application.

3. **Todo List:**
   - Tests the functionality of the todo list feature, including adding, updating, and deleting tasks.
   - Verifies that the todo list state is maintained correctly across user interactions.

### Component Testing

In addition to E2E testing, we have implemented component tests to validate the individual components that make up the Smoke and Drink Prediction application. Cypress is also utilized for component testing, providing a focused approach to ensuring the correctness of specific UI elements.

#### Test Scenarios:

1. **Form Fill Component:**

   - Validates the behavior of the form fill component, ensuring that it handles user input appropriately and triggers the necessary actions upon submission.

2. **Header Component:**

   - Tests the header component to ensure proper rendering and responsiveness.
   - Validates that links and navigation elements in the header function correctly.

3. **Notification Component:**

   - Verifies that the notification component displays messages accurately based on application events.
   - Tests the dismissal of notifications and ensures they are removed from the UI when appropriate.

4. **Result Popup Component:**
   - Validates the behavior of the result popup component, ensuring it correctly displays prediction results and relevant information.
   - Tests the popup dismissal functionality.

To run both E2E and component tests interactively, use the following command:

```bash
npx cypress open
```

This will open the Cypress Test Runner, allowing you to execute and observe the tests in a browser environment. Select the desired test suite or individual tests to run and view detailed results, including any potential failures.
