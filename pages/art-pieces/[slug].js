import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/artpiecedetails";
import ArtPieces from "../../components/artpieces";

function findArtPieceBySlug(artPieces, slug) {
  return artPieces.find((artPiece) => artPiece.slug === slug);
}

export default function ArtPieceDetailsPage({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = findArtPieceBySlug(artPieces, slug);

  if (!artPiece) {
    return <p>Loading...</p>;
  }

  return (
    <ArtPieceDetails
      image={artPiece.image}
      title={artPiece.title}
      artist={artPiece.artist}
      year={artPiece.year}
      genre={artPiece.genre}
      onBackClick={() => router.back()}
    />
  );
}

export async function getStaticProps() {
  const res = await fetch("https://example-apis.vercel.app/api/art");
  const artPieces = await res.json();

  return {
    props: {
      artPieces,
    },
  };
}
