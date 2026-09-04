import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="wrap nf">
        <h1>That page is not here.</h1>
        <p>The address may have changed, or the page may still be in preparation. The homepage and the Insights library are both a click away.</p>
        <Link className="textlink" href="/">Back to the homepage</Link>
      </main>
      <Footer />
    </>
  );
}
