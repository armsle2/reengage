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
    return axios.post("/api/customers", customerData);
  },

//Businesses
  // Gets all businesses
  getBusinesses: function() {
    return axios.get("/api/businesses");
  },
  // Gets the customer with the given id
  getBusiness: function(id) {
    return axios.get("/api/business/" + id);
  },
  // Deletes the customer with the given id
  deleteBusiness: function(id) {
    return axios.delete("/api/businesses/" + id);
  },
  // Saves a customer to the database
  saveBusiness: function(businessData) {
    return axios.post("/api/businesses", businessData);
  },

//Surveys
  // Gets all surveys
  getSurveys: function() {
    return axios.get("/api/surveys");
  },
  // Gets the survey with the given id
  getSurvey: function(id) {
    return axios.get("/api/surveys/" + id);
  },
  // Deletes the customer with the given id
  deleteSurvey: function(id) {
    return axios.delete("/api/surveys/" + id);
  },
  // Saves a customer to the database
  saveSurvey: function(surveyData) {
    return axios.post("/api/surveys", surveyData);
  },

//Rewards
  // Gets all rewards
  getRewards: function() {
    return axios.get("/api/rewards");
  },
  // Gets the survey with the given id
  getReward: function(id) {
    return axios.get("/api/rewards/" + id);
  },
  // Deletes the customer with the given id
  deleteReward: function(id) {
    return axios.delete("/api/rewards/" + id);
  },
  // Saves a customer to the database
  saveRewards: function(rewardData) {
    return axios.post("/api/rewards", rewardData);
  }
};