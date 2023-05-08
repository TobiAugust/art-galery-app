import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Spotlight</a>
          </Link>
        </li>
        <li>
          <Link href="/art-pieces">
            <a>Pieces</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
