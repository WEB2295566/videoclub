import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TuileFilm from '../TuileFilm/TuileFilm';
import './ListeFilms.css';

function ListeFilms() {

  const urlListeFilms = 'https://api-films-bbmz.onrender.com/api/films/';
  //const urlListeFilms = 'data/titre-asc.json';
  const [urlFiltre, setUrlFiltre] = useState([urlListeFilms]);
  const [listeFilms, setListeFilms] = useState([]);

  useEffect(() => {
    fetch(urlFiltre)
      .then((reponse) => reponse.json())
      .then((data) => {
        console.log(data);
        setListeFilms(data);
      });
  }, [urlFiltre]);

  console.log('rendu');

  const tuilesFilm = listeFilms.map((film, index) => {
    return (
      <Link key={index} to={`/film/${film.id}`} style={{ textDecoration: 'none' }} >
        <TuileFilm key={index} data={film} />
      </Link>
    );
  });

  // function filtre(e) {
  //   if (e.target.textContent === "Titre alphabetique (A - Z)") {
  //     setUrlFiltre(`${urlListeFilms}?tri=titre&ordre=asc`);

  //   } else if (e.target.textContent === "Titre alphabetique (Z - A)") {
  //     setUrlFiltre(`${urlListeFilms}?tri=titre&ordre=desc`)

  //   }
  // }

  function filtre(e) {
    switch (e.target.textContent) {
      case "Titre alphabetique (A - Z)":
        setUrlFiltre(`${urlListeFilms}?tri=titre&ordre=asc`);
        break;

      case "Titre alphabetique (Z - A)":
        setUrlFiltre(`${urlListeFilms}?tri=titre&ordre=desc`);
        break;

      case "Réalisateur alphabétique (A-Z)":
        setUrlFiltre(`${urlListeFilms}?tri=realisation&ordre=asc`);
        break;

      case "Réalisateur alphabétique (Z-A)":
        setUrlFiltre(`${urlListeFilms}?tri=realisation&ordre=desc`);
        break;

      case "Par année (du plus récent)":
        setUrlFiltre(`${urlListeFilms}?tri=annee&ordre=desc`);
        break;

      case "Par année (du plus ancien)":
        setUrlFiltre(`${urlListeFilms}?tri=annee&ordre=asc`);
        break;

      default:

        console.log("pas de filtre appliqué");
    }
  }


  function maDeuxiemeFonction() {
    // console.log('maDeuxiemeFonction');
  }

  return (


    <main>
      <ul className='filtre-container'>
        <li onClick={(e) => { filtre(e); maDeuxiemeFonction(); }}>Titre alphabetique (A - Z)</li>
        <li onClick={(e) => { filtre(e); maDeuxiemeFonction(); }}>Titre alphabetique (Z - A)</li>
        <li onClick={(e) => { filtre(e); maDeuxiemeFonction(); }}>Réalisateur alphabétique (A-Z)</li>
        <li onClick={(e) => { filtre(e); maDeuxiemeFonction(); }}>Réalisateur alphabétique (Z-A)</li>
        <li onClick={(e) => { filtre(e); maDeuxiemeFonction(); }}>Par année (du plus récent)</li>
        <li onClick={(e) => { filtre(e); maDeuxiemeFonction(); }}>Par année (du plus ancien)</li>
      </ul>

      <div className='galerie'>
        {tuilesFilm}
      </div>
    </main >
  );
}

export default ListeFilms;
