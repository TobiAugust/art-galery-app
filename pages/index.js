import { GlobalStyle } from "../styles";
import useSWR from "swr";
import ArtPieces from "../components/artpieces";
import React from "react";

function pickRandomPiece(pieces) {
  const randomIndex = Math.floor(Math.random() * pieces.length);
  return pieces[randomIndex];
}

function Spotlight({ image, artist }) {
  return (
    <div>
      <h2>Spotlight Piece</h2>
      <img src={image} alt={artist} />
      <p>Artist: {artist}</p>
    </div>
  );
}

export default function HomePage() {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data: pieces } = useSWR(URL);

  if (!pieces) {
    return <p>Loading...</p>;
  }

  const randomPiece = pickRandomPiece(pieces);

  return (
    <div>
      <Spotlight image={randomPiece.image} artist={randomPiece.artist} />
      <ArtPieces pieces={pieces} />
    </div>
  );
}
