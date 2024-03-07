
import './TuileFilm.css';

function TuileFilm(props) {

  console.log(props)

  return (
    <article className='card'>
      <img src={`/img/${props.data.titreVignette}`} alt={props.data.titre} />
      <ul className='tuile-liste'>
        <li className='tuile-titre'>{props.data.titre}</li>
        <li className='tuile-annee'>{props.data.annee}</li>
      </ul>

    </article>
  );
}

export default TuileFilm;
