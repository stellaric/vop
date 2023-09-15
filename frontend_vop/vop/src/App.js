import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './Pages/Accueil/Accueil';
import Vol from './Pages/Vol/Vol';
import Hotel from './Pages/Hotel/Hotel';
import Destination from'./Pages/Destination/Destination'
import Activite from'./Pages/Activity/Activity'
import Authentification from'./Pages/Authentification/Auth'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/vol" element={<Vol />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/activite" element={<Activite />} />
          <Route path="/authentification" element={<Authentification />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
