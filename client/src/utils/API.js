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
  getSurveys: function() {
    return axios.get("/api/surveys-api");
  },
  // Gets the survey with the given id
  getSurvey: function(id) {
    return axios.get("/api/surveys-api/" + id);
  },
  // Deletes the customer with the given id
  deleteSurvey: function(id) {
    return axios.delete("/api/surveys-api/" + id);
  },
  // Saves a customer to the database
  saveSurvey: function(surveyData) {
    return axios.post("/api/surveys-api", surveyData);
  },

//Rewards
  // Gets all rewards
  getRewards: function() {
    return axios.get("/api/rewards-api");
  },
  // Gets the survey with the given id
  createReward: function(companyId, rewardData) {
    return axios.post(`/api/companies/${companyId}/reward`, rewardData);
  },
  // Deletes the customer with the given id
  deleteReward: function(id) {
    return axios.delete("/api/rewards-api/" + id);
  },
  // Saves a customer to the database
  saveReward: function(rewardData) {
    return axios.post("/api/rewards-api", rewardData);
  }
};