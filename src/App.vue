<!--
  Authors: Jonathan Hus, Russell Bisker, Jon Smolak
  Description:
  The root component of the application. It serves as the main entry point and renders the child components using `router-view`.

  Structure:
  - Contains a `div` element with the `id` of "app".
  - Dynamically displays components based on the current route via `<router-view>`.

  Imported Components:
  - `Survey`: Represents the survey list view. (Not directly used in this file but imported for potential use.)
  - `Form`: Represents the form view for submitting or editing survey data.

  Usage:
  - The `<router-view>` dynamically renders the components associated with the current route.

  Style:
  - Custom styles for the root component can be added in the `<style>` section.
-->

<template>
  <div id="app">
    <!-- <Survey /> -->
    <router-view />
  </div>
</template>

<script>
import Survey from './components/Survey.vue';
import Form from './components/Form.vue';

export default {
  name: 'app',
  components: {
    Survey
  }
}
</script>

<style>

</style>
