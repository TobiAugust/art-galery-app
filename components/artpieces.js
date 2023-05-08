export default function ArtPieces({ artPieces }) {
  return (
    <ul>
      {artPieces.map((piece) => (
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
