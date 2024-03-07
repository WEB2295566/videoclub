// Film.js
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "../App/App";
import { useParams } from 'react-router-dom';
import './Film.css';

function Film() {
  const context = useContext(AppContext);

  const { id } = useParams();
  const url = `https://api-films-bbmz.onrender.com/api/films/${id}`
  //const url = `https://four1f-node-api.onrender.com/films/mPYzrcZUngrxPFCaEw0J`
  const [film, setFilm] = useState([]);


  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setFilm(data)
        console.log(data);
        console.log(data.notes);
      });
  }, []);


  async function soumettreNote(e) {

    console.log(e.target);

    //console.log("soumettre");

    let aNotes;
    if (!film.notes) {

      aNotes = [1];
    } else {
      aNotes = film.notes;
      aNotes.push(1);

    }

    console.log(aNotes);

    const oOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ notes: aNotes })
    }

    let putNote = await fetch(url, oOptions),
      getFilm = await fetch(url);

    Promise.all([putNote, getFilm])
      .then(response => response[1].json())
      .then((data) => {
        console.log(data);
        console.log(data.notes);
        setFilm(data);
        //setMoyenne()
        //setNbVote()

      })
  }

  let blocAjoutCommentaire;

  if (context.estLog) {
    blocAjoutCommentaire =
      <form onSubmit={soumettreCommentaire}>
        <textarea placeholder='ajouter un commentaire'></textarea>
        <button>soumettre</button>
      </form>
  }

  async function soumettreCommentaire(e) {
    e.preventDefault();
    console.log(e.target);

    let aCommentaires;
    if (!film.commentaires) {
      aCommentaires = [{ commentaires: 'je suis un commentaire', usager: context.usager }];
    } else {
      aCommentaires = film.commentaires;

      aCommentaires.push({ commentaires: 'je suis un commentaire', usager: context.usager });


    }


    const oOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ commentaires: aCommentaires })
    }

    let putCommentaire = await fetch(url, oOptions),
      getFilm = await fetch(url);

    Promise.all([putCommentaire, getFilm])
      .then(response => response[1].json())
      .then((data) => {
        console.log(data);

        setFilm(data);
        //setMoyenne()
        //setNbVote()


      })
  }

  return (
    <>
      <article className='film-card flex-container'>
        <img src={`/img/${film.titreVignette}`} alt={film.titre} />
        <ul className='film-info'>
          <li>
            <button onClick={soumettreNote} className='film-vote'> Votez</button>
          </li>
          <li className='film-titre'>{film.titre}</li>
          <li className='film-description'>{film.description}</li>
          <li className='film-realisation'>Realisateur: <strong>{film.realisation}</strong></li>
          <li className='film-genres'>genres: <strong>{film.genres}</strong></li>
          <li className='film-annee'>Sortie: <strong>{film.annee}</strong></li>
        </ul>

        {blocAjoutCommentaire}

      </article>

    </>
  );
}


export default Film;
