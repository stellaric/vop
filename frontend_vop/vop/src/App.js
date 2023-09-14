import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Accueil from './Pages/Accueil/Accueil';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
