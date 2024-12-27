<!--
  Authors: Jonathan Hus, Russell Bisker, John Smolak

  Description:
  This component displays a list of surveys in a table format. Each row provides survey details and action buttons for editing or deleting the survey.
  
  Features:
  - Displays survey data with columns for Survey ID, First Name, and Last Name.
  - Includes "Edit" and "Delete" buttons for each survey.
  - Fetches survey data from the SurveyService API.
  - Provides confirmation prompt before deleting a survey and refreshes the table after deletion.
  
  Key Components:
  - Data property (`surveys`) stores the list of surveys fetched from the API.
  - Methods:
    - `getSurveys`: Fetches the list of surveys from the API.
    - `editSurvey`: Navigates to the survey editing page with the survey ID as a route parameter.
    - `deleteSurvey`: Deletes a survey after user confirmation and refreshes the list.
  - Lifecycle hook (`created`) automatically loads the surveys on component initialization.
-->

<template>
  <div class="container">
    <h1 class="text-center"> Survey List</h1>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Survey ID</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="survey in surveys" v-bind:key="survey.id">
                <td> {{ survey.id }}</td>
                <td> {{ survey.firstName }}</td>
                <td> {{ survey.lastName }}</td>
                <td> <button type="button" @click="editSurvey(survey.id)" class="btn btn-primary">Edit</button></td>
                <td> <button type="button" @click="deleteSurvey(survey.id)"class="btn btn-primary">Delete</button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import SurveyService from '../services/SurveyService'

export default {
    name: 'Surveys',
    data() {
        return {
            surveys: []
        };
    },
    methods: {
        getSurveys() {
            SurveyService.getSurveys().then((response) => {
                this.surveys = response.data;
            })
        },
        editSurvey(idnum) {
            // console.log('log idnum: ' + idnum);
            this.$router.push("/edit/" + idnum);
        },
        deleteSurvey(id){
            if(confirm('Are you sure you want to delete this survey?')){
                SurveyService.deleteSurvey(id)
                .then(() => {
                    this.getSurveys(); //refresh survey list after deleting
                    alert('Survey successfully deleted.');
                })
                .catch((error) => {
                    console.error('Error deleting survey:');
                });
            }
        }
    },
    created() {
        this.getSurveys()
    }
}
</script>
<style>
</style>
