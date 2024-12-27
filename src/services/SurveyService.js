/**
 * Authors: Jonathan Hus, Russell Bisker, John Smolak
 * 
 * Description:
 * This service provides methods to interact with the survey API for managing survey data. 
 * It uses Axios for making HTTP requests to the backend server.
 * 
 * API Base URL:
 * - `http://44.203.55.113:8080/api/surveys`
 * 
 * Features:
 * - Fetch all surveys.
 * - Retrieve a specific survey by ID.
 * - Create a new survey.
 * - Update an existing survey.
 * - Delete a survey by ID.
 * 
 * Methods:
 * - `getSurveys`: Sends a GET request to retrieve all surveys.
 * - `getSurveyById`: Sends a GET request to retrieve a survey by its ID.
 * - `createSurvey`: Sends a POST request to create a new survey.
 * - `updateSurvey`: Sends a PUT request to update an existing survey.
 * - `deleteSurvey`: Sends a DELETE request to remove a survey by its ID.
 */


import axios from "axios";

const SURVEY_API_BASE_URL = 'http://44.203.55.113:8080/api/surveys'

class SurveyService {
    getSurveys() {
        return axios.get(SURVEY_API_BASE_URL);
    }

    getSurveyById(id) {
        return axios.get(`${SURVEY_API_BASE_URL}/${id}`);
    }

    createSurvey(survey){
        return axios.post(SURVEY_API_BASE_URL, survey);
    }

    updateSurvey(id, surveyData) {
        return axios.put(`${SURVEY_API_BASE_URL}/${id}`, surveyData);
    }

    deleteSurvey(id) {
        return axios.delete(`${SURVEY_API_BASE_URL}/${id}`)
    }
}

export default new SurveyService()