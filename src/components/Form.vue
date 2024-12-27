<!---
  Authors: Jonathan Hus, Russell Bisker, John Smolak

  Description:
  This component provides a form for collecting survey data. The form captures user information, survey preferences, and feedback.
  It includes various input types (text, email, date, radio buttons, checkboxes, and dropdowns) and uses Vue's two-way binding with `v-model`.
  
  Features:
  - Dynamically populates form fields with options for dropdowns, checkboxes, and radio buttons.
  - Validations for required fields (e.g., first name, last name, email, etc.).
  - Fetching and updating form data via the SurveyService API.
  - Cancel functionality that redirects to the home page.
  
  Key Components:
  - Data properties (`formData`) store form values.
  - Methods include `fetchData` to load existing survey data and `submitForm` to create or update the survey.
  - Lifecycle hook (`created`) checks for a route parameter to fetch existing data.
-->


<template>
    <div class="container">
        <form class="was-validated" autocomplete="on" id="formdata" @submit.prevent="submitForm">
        <div class="row">
          <div class="col">
            <label for="first_name" class="form-label">First Name:</label>
            <input type="text" class="form-control" placeholder="First Name" name="firstName" id="firstName" v-model="formData.firstName" required autofocus>
          </div>
          <div class="col">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" placeholder="Last Name" name="lastName" id="lastName" v-model="formData.lastName" required>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="address" class="form-label">Address</label>
            <input type="text" class="form-control" placeholder="Enter address" name="address" id="address" v-model="formData.address" required>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="city" class="form-label">City</label>
            <input type="text" class="form-control" placeholder="" name="city" id="city" v-model="formData.city" required>
          </div>
          <div class="col">
            <label for="state" class="form-label">State</label>
            <input type="text" class="form-control" placeholder="" name="state" id="state" v-model="formData.state" required>
          </div>
          <div class="col-2">
            <label for="zipcode" class="form-label">Zip</label>
            <input type="text" class="form-control" placeholder="Enter ZIP code" name="zipcode" id="zipcode" v-model="formData.zipcode" required>
          </div>
        
        </div>
        <div class="row">
          <div class="col">
            <label for="telephone" class="form-label">Telephone</label>
            <input type="tel" class="form-control" placeholder="Enter telephone" name="telephone" v-model="formData.telephone">
          </div>
          <div class="col">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" placeholder="user@example.com" name="email" id = "email" v-model="formData.email" required>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label for="date" class="form-label">Date of survey:</label>
            <input type="date" class="form-control" placeholder="Enter date" name="survey_date" id="survey_date" v-model="formData.survey_date">
          </div>
        </div>
     
      <div class="row mt-3 align-items-center">
  <label for="dropdown" class="col-auto form-label mb-0">How likely are you to recommend this school?</label>
  <div class="col">
    <select id="dropdown" class="form-select" v-model="formData.recommendation">
      <option v-for="option in recommendationOptions" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</div>


      <div class="row mt-3 align-items-center">
  <label class="col-auto mb-0">What did you like most about your visit:</label>
  <div class="col d-flex flex-wrap">
    <div 
      v-for="option in likeOptions" 
      :key="option.value" 
      class="form-check form-check-inline"
    >
      <input 
        type="checkbox" 
        :id="'like-' + option.value" 
        class="form-check-input" 
        :value="option.value" 
        v-model="formData.likes" 
      />
      <label 
        :for="'like-' + option.value" 
        class="form-check-label"
      >
        {{ option.label }}
      </label>
    </div>
  </div>
</div>


      <div class="row mt-3 align-items-center">
  <label class="col-auto mb-0">How did you become interested in the university:</label>
  <div class="col d-flex flex-wrap">
    <div 
      v-for="option in interestOptions" 
      :key="option.value" 
      class="form-check form-check-inline"
    >
      <input 
        type="radio" 
        :id="'interest-' + option.value" 
        class="form-check-input" 
        name="interest" 
        :value="option.value" 
        v-model="formData.interest" 
      />
      <label 
        :for="'interest-' + option.value" 
        class="form-check-label"
      >
        {{ option.label }}
      </label>
    </div>
  </div>
</div>


        <div class="row my-3">
          <div class="col">
            <label for="comments">Let us know if you have any additional comments:</label>
            <textarea class="form-control" rows="5" id="comments" name="text" v-model="formData.comments"></textarea>
          </div>
        </div>
        <div class="row mt-3">
            <div class="col text-end">
                <button type="submit" class="btn btn-primary me-2">Submit</button>
                <button type="button" class="btn btn-secondary" @click="cancelForm">Cancel</button>
            </div>
        </div>
      </form>
    </div>
</template>

<script>
// import axios from "axios";
import SurveyService from "@/services/SurveyService";
export default {
    name: "FormComponent",
    props: ["FormID"],
    data() {
        return {
            formData: {
                firstName: "",
                lastName: "",
                address: "",
                city: "",
                state: "",
                zipcode: "",
                telephone: "",
                email: "",
                survey_date: "",
                recommendation: "",
                likes: [],
                interest: "",
                comments: "",
            },
            // Define recommendationOptions as part of the data
            recommendationOptions: [
                { label: "Very Likely", value: "VERY_LIKELY" },
                { label: "Likely", value: "LIKELY" },
                { label: "Unlikely", value: "UNLIKELY" },
            ],
            likeOptions: [
                { label: "Students", value: "STUDENTS" },
                { label: "Location", value: "LOCATION" },
                { label: "Campus", value: "CAMPUS" },
                { label: "Atmosphere", value: "ATMOSPHERE" },
                { label: "Sports", value: "SPORTS" },
                { label: "Dorm Rooms", value: "DORM_ROOMS" },
            ],
            interestOptions: [
                { label: "Friends", value: "FRIENDS" },
                { label: "Television", value: "TELEVISION" },
                { label: "Internet", value: "INTERNET" },
                { label: "Other", value: "OTHER" },
            ],
        };
    },
    methods: {
        fetchData(id) {
            SurveyService.getSurveyById(id)
            .then(response => {
                this.formData = response.data; // Populate formData with API response
                console.log(this.formData.lastName);
                console.log(this.formData.survey_date);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
        },
        submitForm() {
            console.log("Updated Data:", this.formData);
            if(this.formid) {
                console.log("Updating : " + this.formid);
                SurveyService.updateSurvey(this.formid, this.formData);
            } else {
                console.log("Posting new form...");
                SurveyService.createSurvey(this.formData);
            }
            this.$router.push("/");
        },
        cancelForm() {
            this.$router.push("/");
        }

    },
    created() {
        console.log(this.$route);
        const id = this.$route.params.id;
        console.log("printing id: " + id);
        if (id) {
            this.formid = id;
            this.fetchData(id);
        }
    }

}
</script>

<style>

</style>