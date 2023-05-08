import React from "react";
import Spotlight from "../components/Spotlight";

export default function SpotlightPage({ artPieces }) {
  const randomPiece = artPieces[Math.floor(Math.random() * artPieces.length)];

  return (
    <div>
      <Spotlight image={randomPiece.image} artist={randomPiece.artist} />
    </div>
  );
}
