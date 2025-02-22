import axios from "axios";



const REST_API_BASE_URL = 'http://localhost:8080/api/user/balanceEnquiry?accountNumber=2025303952';

export const listClients = () => axios.get(REST_API_BASE_URL);

