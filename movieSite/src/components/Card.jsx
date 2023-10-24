import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="card">
      <img
        src={
          movie.poster_path
            ? "https://image.tmdb.org/t/p/original/" + movie.poster_path
            : "./img/poster.jpg"
        }
        alt={`affiche film ${movie.title}`}
      />
      <h3>{movie.title}</h3>
      <h4>{movie.release_date}</h4>
      <p>{movie.overview}</p>
    </div>
  );
};

export default Card;
