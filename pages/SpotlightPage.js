import React from "react";
import Spotlight from "../components/spotlight";

export default function SpotlightPage({ artPieces }) {
  const randomPiece = artPieces[Math.floor(Math.random() * artPieces.length)];

  return (
    <div>
      <Spotlight piece={randomPiece} />
    </div>
  );
}
