import React from "react";

export default function Spotlight({ piece }) {
  return (
    <div>
      <h2>Spotlight</h2>
      <img src={piece.image} alt={piece.title} />
      <p>{piece.artist}</p>
      <p>{piece.title}</p>
    </div>
  );
}
