import { NavLink } from 'react-router-dom';
import './Entete.css';
import logoImage from './logo.png';
import { useContext } from 'react';
import { AppContext } from '../App/App';


function Entete(props) {
  const context = useContext(AppContext);
  console.log(props);

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/"><img src={logoImage} alt="logo" /></NavLink>
      </div>
      <nav className="main-nav">
        {/* {props.estLog ? <NavLink to="/admin">Admin</NavLink> : ''} */}
        {context.estLog ? <NavLink to="/admin">Admin</NavLink> : ''}
        <ul className="main-nav-list">
          <NavLink className="main-nav-link" to="/Liste-films">Tous les films</NavLink>
        </ul>

      </nav>

      <form onSubmit={props.handleLogin}>
        <input type="text" name="usager" placeholder='login' />
        <button>Login</button>
      </form>
    </header>
  );
}

export default Entete;
