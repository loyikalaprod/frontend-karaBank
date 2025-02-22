import './css/Footer.css';




const FooterComponent = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} - Tous droits réservés - Développer par @hossainprogrammer </p>
      <div className="social-links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default FooterComponent;
