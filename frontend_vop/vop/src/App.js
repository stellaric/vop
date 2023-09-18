import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Accueil from './Pages/Accueil/Accueil';
import './App.css';



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
