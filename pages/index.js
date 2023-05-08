import { GlobalStyle } from "../styles";
import useSWR from "swr";
import ArtPieces from "../components/artpieces";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR("/api/artPieces", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <ArtPieces pieces={data} />;
}
