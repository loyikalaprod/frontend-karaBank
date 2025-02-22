
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import ConnexionComponent from './components/ConnexionComponent';

function App() {
  return (
    <Router>
        <div id="root">
      <HeaderComponent />
      <main className="main-content">
        <div className="main-content d-flex flex-grow-1 justify-content-center align-items-center">

        
          <Routes>

            <Route path="creer-compte" element={<ConnexionComponent />} />
          </Routes>

        </div>
      </main>
      <FooterComponent/>
    </div>
    </Router>

  );
}

export default App;
