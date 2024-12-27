/**
 * Authors: Jonathan Hus, Russell Bisker, John Smolak
 * 
 * Description:
 * This file defines the routing configuration for the application using `vue-router`.
 * It specifies the paths and components for navigation between different pages of the application.
 * 
 * Imported Components:
 * - `Form`: Represents the form view for submitting or editing survey data.
 * - `Survey`: Represents the survey list view.
 * 
 * Routes:
 * - `/`: Displays the survey list (`Survey` component).
 * - `/submit`: Displays the form for submitting a new survey (`Form` component).
 * - `/edit/:id`: Displays the form for editing an existing survey, using the survey ID (`Form` component).
 * 
 * Configuration:
 * - Utilizes `createRouter` and `createWebHistory` for history-based navigation.
 * 
 * Export:
 * - The configured router instance is exported for use in the Vue application.
 */


import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Form from '../components/Form.vue'
import Survey from '../components/Survey.vue'

const routes = [
  {
    path: '/',
    // name: '',
    component: Survey  },
  // Add more routes here as needed
  {
    path: '/submit',
    // name: '',
    component: Form
  },
  {
    path: '/edit/:id',
    component: Form
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
