import { useState, useEffect } from 'react';
import axios from 'axios';

const SoldeCompteComponent = () => {
  const [balanceData, setBalanceData] = useState(null);
  const [accountNumber] = useState('2025303952');
  const [error, setError] = useState(null);

  // Fonction pour récupérer les données de l'API
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/user/balanceEnquiry?accountNumber=${accountNumber}`);
        
        // Vérifier si le code de réponse est valide
        if (response.data.responseCode === "004") {
          setBalanceData(response.data.accountInfo);
        } else {
          setError(response.data.responseMessage || 'Erreur inconnue');
        }
      } catch (err) {
        setError('Erreur de récupération des données.', err);
      }
    };

    fetchBalance();
  }, [accountNumber]);

  // Affichage des données
  return (
    <div>
      <h1>Solde du compte</h1>
      {error && <p>{error}</p>}
      {balanceData ? (
        <div>
          <p><strong>Nom du compte :</strong> {balanceData.accountName}</p>
          <p><strong>Numéro de compte :</strong> {balanceData.accountNumber}</p>
          <p><strong>Solde actuel :</strong> {balanceData.accountBalance}</p>
        </div>
      ) : (
        <p>Chargement des données...</p>
      )}
    </div>
  );
};

export default SoldeCompteComponent;
