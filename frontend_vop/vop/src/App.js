import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Accueil from './Pages/Accueil/Accueil';
import Vol from './Pages/Vol/Vol';
import Hotel from './Pages/Hotel/Hotel';
import Destination from'./Pages/Destination/Destination'
import Activite from'./Pages/Activity/Activity'
import Authentification from'./Pages/Authentification/Auth'
import Contact from './Pages/Contact/Contact';
import Voyage from './Pages/Voyage/Voyages';
import Profil from "./Pages/Profil/components/Profil";
import './App.css';
import Connexion from "./Pages/Connexion/Connexion"
import Inscription from "./Pages/Inscription/Inscription"
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';



function App() {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/vol" element={<Vol />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/activite" element={<Activite />} />
          <Route path="/authentification" element={<Authentification />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/voyage" element={<Voyage />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Connexion" element={<Connexion />} />
          <Route path="/Inscription" element={<Inscription />} />

          </Routes>
        </Router>
  );
}

export default App;
