//ccode un header desigimport React from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="logo">KaraBank </div>
      <nav className="nav">
      <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/services">Service</Link></li>
          <li>
            <Link to="/creer-compte">
              <button>Créer un Compte</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent; 
