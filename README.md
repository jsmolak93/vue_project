# HW3-Vue.js

This project is a frontend application built using Vue.js that was developed by my teammates to enable users to fill out and submit surveys containing their personal information and preferences. The application was adapted from a previous Angular homework assignment, while the backend was developed using Spring Boot, which remained unchanged except for modifications to the API endpoints to align with the new frontend. The main objective of the application is to allow users to create, view, and edit their survey responses.

# Design

The application consists of multiple Vue components. The core components include:

- **`Form.vue`**: Handles the form submission and editing. This component features a responsive form layout with input fields for personal details such as first name, last name, address, city, state, ZIP code, telephone number, email, and survey-specific questions like recommendations and preferences. It leverages Vue’s `v-model` directive for two-way data binding, ensuring that the form data is synchronized with the component’s `formData` object.
- **`Survey.vue`**: Displays a table of all surveys in the database. Each survey entry includes an ID, first name, and last name, along with buttons to edit or delete the survey.
- **`SurveyService.js`**: A service layer that facilitates communication with the backend using Axios. This service handles CRUD operations, including fetching all surveys, creating, updating, and deleting specific survey records by interacting with the API endpoints.

# File Structure and Components

### Components:
- **`App.vue`**: The main entry component of the application that houses the router view.
- **`Form.vue`**: The component for creating and editing surveys. It includes form validation, data binding, and various form elements.
- **`Survey.vue`**: Displays a table of all surveys with functionality for editing and deleting entries.
- **`SurveyService.js`**: A service module using Axios to make HTTP requests to the backend API for performing CRUD operations.

### Configuration:
- **`router/index.js`**: The router configuration file that defines routes for the application, including paths for viewing all surveys and submitting/editing surveys.
- **`main.js`**: The entry point for the Vue app that sets up and mounts the application, importing necessary styles and configuring the router.
- **`index.html`**: The HTML file that includes a navigation bar and a `div` element with an `id="app"` where the Vue application is mounted.

# How to Run the Project

To run the project, follow these steps:

1. **Clone or download** the repository to ensure you have the project code on your local machine.
2. **Install dependencies**: Run `npm install` to install all the required dependencies.
3. **Start the development server**: Use `npm run dev` or `npm run serve` to start the Vue development server. This will make the application accessible locally, typically at `http://localhost:3000` or a similar port.
4. **Navigate to the app**: Open a web browser and go to the local address to access the application.

# Other Relevant Information

### API Integration
The frontend communicates with the backend API through the `SurveyService.js` file, which includes methods to:
- `getSurveys()`
- `getSurveyById(id)`
- `createSurvey(survey)`
- `updateSurvey(id, surveyData)`
- `deleteSurvey(id)`

The backend API base URL is `http://44.203.55.113:8080/api/surveys`, and endpoints are defined based on the survey data structure.

### Form Validation
The **`Form.vue`** component uses Vue’s built-in validation to ensure that the form fields are properly filled before submission. Required fields are marked with the `required` attribute, and form submission is handled with the `@submit.prevent` directive to prevent the default page refresh.

### Styling
The project uses **Bootstrap** for styling. The Bootstrap CSS file is imported in `main.js` to apply styles throughout the application.

### Routing
The **Vue Router** is used to handle navigation between pages. The `router/index.js` file defines the routes, including paths for:
- Viewing surveys (`/`)
- Submitting a new survey (`/submit`)
- Editing an existing survey (`/edit/:id`)

