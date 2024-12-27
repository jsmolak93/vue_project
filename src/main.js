/**
 * Authors: Jonathan Hus, Russell Bisker, John Smolak
 * 
 * Description:
 * The entry point for the application. It initializes the application, sets up routing, and mounts the root component.

 * Key Features:
 * - Imports Bootstrap CSS for styling.
 * - Configures Vue Router to enable routing functionality.
 * - Mounts the root `App` component to the DOM element with `id="app"`.

 * Usage:
 * - Modify this file to include global configurations, plugins, or libraries for your application.
 */

// import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(router)
app.mount('#app')
