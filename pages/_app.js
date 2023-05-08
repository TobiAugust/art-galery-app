import GlobalStyle from "../styles";
import useSWR from "swr";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const URL = "https://example-apis.vercel.app/api/art";
  const { data: pieces } = useSWR(URL);

  const [artPieces, setArtPieces] = useState([]);

  useEffect(() => {
    if (pieces) {
      setArtPieces(pieces);
    }
  }, [pieces]);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} artPieces={artPieces} />
    </>
  );
}

export default MyApp;
