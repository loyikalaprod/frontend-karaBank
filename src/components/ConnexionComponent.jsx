import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ConnexionService from "../services/ConnexionService";
import './css/Connexion.css';

const ConnexionComponent = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      othername: '',
      gender: '',
      address: '',
      stateOfOrigin: '',
      email: '',
      phoneNumber: '',
      alternatePhoneNumber: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await ConnexionService.login(formData);
          console.log('Succès:', response.data);
          alert('Votre Compte a été Créer avec Succès! Consulter votre boite mail pour récupérer le numéro du Compte Bancaire ');
          navigate('/'); // Redirection après connexion (changer selon besoin)
        } catch (error) {
          console.error('Echec :', error);
          alert('Échec de la création du Compte. Vérifiez vos informations.');
        }
      };
      


      return (
        <div className="connexion-container">
          <h2>Création du Compte</h2>
          <form onSubmit={handleSubmit} className="connexion-form">
            <input type="text" name="firstName" placeholder="Prénom" value={formData.firstName} onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Nom" value={formData.lastName} onChange={handleChange} required />
            <input type="text" name="othername" placeholder="Autre nom" value={formData.othername} onChange={handleChange} />
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Sélectionnez le genre</option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
            <input type="text" name="address" placeholder="Adresse" value={formData.address} onChange={handleChange} required />
            <input type="text" name="stateOfOrigin" placeholder="Pays d'origine" value={formData.stateOfOrigin} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="phoneNumber" placeholder="Numéro de téléphone" value={formData.phoneNumber} onChange={handleChange} required />
            <input type="text" name="alternatePhoneNumber" placeholder="Autre numéro (optionnel)" value={formData.alternatePhoneNumber} onChange={handleChange} />
            
            <button type="submit">Enregister</button>
          </form>
        </div>
      );
    };
    
    export default ConnexionComponent;