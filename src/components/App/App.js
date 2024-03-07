// Importation des dépendances nécessaires pour utiliser React et react-router-dom
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Importation des composants utilisés dans l'application
import Accueil from '../Accueil/Accueil'
import ListeFilms from '../ListeFilms/ListeFilms'
import Entete from '../Entete/Entete'
import Film from '../Film/Film';
import './App.css';
import Admin from '../Admin/Admin.js';

// Création d'un contexte React pour partager des données globalement dans l'application
export const AppContext = React.createContext();



function App() {

  //const [estLog, setEstLog] = useState(false);
  const [logging, setLogging] = useState({ estLog: false, usager: '' });

  function login(e) {
    e.preventDefault();
    //console.log("login");
    if (e.target.usager.value == 'admin') {
      //setEstLog(prevEstLog => !prevEstLog);
      //setEstLog({ estLog: true, usager: e.target.usager.value });
      setLogging(logging => ({ ...logging, estLog: true, usager: e.target.usager.value }));
      e.target.reset();
    }
  }
  return (
    <AppContext.Provider value={logging}>
      <Router>
        {/* <Entete handleLogin={login} estLog={estLog} /> */}
        {<Entete handleLogin={login} estLog={logging} />}
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/liste-films" element={<ListeFilms />} />
          <Route path="/film/:id" element={<Film logging={logging} />} />
          {/* <Route path="/admin" element={estLog ? <Admin /> : <Navigate to="/" />} /> */}
          {<Route path="/admin" element={logging.estLog ? <Admin /> : <Navigate to="/" />} />}
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
