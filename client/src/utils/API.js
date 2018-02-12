import axios from "axios";

export default {

//Customers
  // Gets all users
  getCustomers: function() {
    return axios.get("/api/customers");
  },
  // Gets the customer with the given id
  getCustomer: function(id) {
    return axios.get("/api/customers/" + id);
  },
  // Deletes the customer with the given id
  deleteCustomer: function(id) {
    return axios.delete("/api/customers/" + id);
  },
  // Saves a customer to the database
  saveCustomer: function(customerData) {
    return axios.post("/api/customers/new", customerData);
  },

//Businesses
  // Gets all businesses
  getCompanies: function() {
    return axios.get("/api/companies");
  },
  // Gets the customer with the given id
  getCompany: function(id) {
    return axios.get("/api/companies/" + id);
  },
  // Deletes the customer with the given id
  deleteCompany: function(id) {
    return axios.delete("/api/companies/" + id);
  },
  // Saves a customer to the database
  saveCompany: function(companyData) {
    return axios.post("/api/companies/new", companyData);
  },

//Surveys
  // Gets all surveys
  createSurvey: function(companyId, surveyData) {
    return axios.post(`/api/companies/${companyId}/survey`, surveyData);
  },
  // Gets the survey with the given id
  activateSurvey: function(data) {
    return axios.post(`/api/surveys/activate`, data);
  },
  // Deletes the customer with the given id
  deleteSurvey: function(id) {
    return axios.delete("/api/surveys-api/" + id);
  },

//Rewards
  // Gets the survey with the given id
  createReward: function(companyId, rewardData) {
    return axios.post(`/api/companies/${companyId}/reward`, rewardData);
  },
  // Deletes the customer with the given id
  deleteReward: function(id) {
    return axios.delete("/api/rewards-api/" + id);
  }
};