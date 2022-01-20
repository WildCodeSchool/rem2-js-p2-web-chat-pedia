import React from "react";

export default function Card(props) {
  const { movie } = props;
  return (
    <div class="resultCard">
      <figure className="image is-48x48">
        <img
          src={movie.image}
          alt= {movie.title}
        />
      </figure>
      <h4 class="bolder">{movie.title}</h4>
      <span><b>Year:</b>{movie.language}</span>
    </div>
  );
}
