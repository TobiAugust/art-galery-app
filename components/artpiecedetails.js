import React from "react";

function ArtPieceDetails({ image, title, artist, year, genre, onBackClick }) {
  return (
    <div>
      <button onClick={onBackClick}>Back</button>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Artist: {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
    </div>
  );
}

export default ArtPieceDetails;
