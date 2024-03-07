import { NavLink } from 'react-router-dom';
import './Accueil.css';
import TexteAccueil from './Accueil.json';

function Accueil() {
  return (
    <main>
      <p className='accueil-texte container'>{TexteAccueil}</p>

    </main>
  );
}

export default Accueil;
