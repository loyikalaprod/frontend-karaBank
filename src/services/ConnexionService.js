import axios from 'axios';

const API_URL = 'http://localhost:8080/api/user'; // Endpoint de connexion

const ConnexionService = {
  login: (userData) => {
    return axios.post(API_URL, userData);
  },
};

export default ConnexionService;