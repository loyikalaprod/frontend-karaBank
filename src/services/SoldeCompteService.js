
import axios from 'axios';

// Fonction pour récupérer les informations de solde du compte
export const getBalance = async (accountNumber) => {
  try {
    const response = await axios.get(
        
        `http://localhost:8080/api/user/balanceEnquiry?accountNumber=${accountNumber}` );

    if (response.data.responseCode === "004") {
      return response.data.accountInfo;

    } else {
      throw new Error(response.data.responseMessage || 'Erreur inconnue');

    }
  } catch (err) {
    throw new Error('Erreur de récupération des données.', err);
  }
};
