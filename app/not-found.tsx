import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <h1>This page has moved.</h1>
      <p>We couldn’t find that page. Explore our work or start again from the homepage.</p>
      <Link href="/">Back to Veruance</Link>
    </main>
  );
}
