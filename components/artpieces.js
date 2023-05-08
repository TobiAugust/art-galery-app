import ArtPiecePreview from "./artpiecepreview";

export default function ArtPieces({ pieces }) {
  return (
    <ul>
      {pieces.map((piece) => (
        <li key={piece.id}>
          <ArtPiecePreview
            image={piece.image}
            title={piece.title}
            artist={piece.artist}
          />
        </li>
      ))}
    </ul>
  );
}
