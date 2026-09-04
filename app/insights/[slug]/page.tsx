import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Closing from "@/components/Closing";
import { getArticle, getArticles, renderMarkdown } from "@/lib/insights";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.description, images: [{ url: a.image }] },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const body = await renderMarkdown(article.body);
  const others = getArticles().filter((x) => x.slug !== article.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main>
        <article className="wrap post">
          <div className="field-head">
            <Link className="mono" href="/insights">Insights</Link>
            <span className="mono">{article.category}</span>
          </div>
          <header className="post-head">
            <h1 className="post-title">{article.title}</h1>
            <p className="post-standfirst">{article.description}</p>
            <p className="post-meta mono">
              {article.author}
              {article.readingTime ? ` · ${article.readingTime} read` : ""}
            </p>
          </header>
          <div className="post-figure">
            <Image src={article.image} alt={article.imageAlt} fill priority sizes="(max-width: 1360px) 100vw, 1360px" />
          </div>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: body }} />
        </article>

        <section className="wrap more" aria-label="More insights">
          <div className="field-head">
            <span className="mono">More insights</span>
            <Link className="mono" href="/insights">All articles</Link>
          </div>
          <ul className="more-list">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/insights/${o.slug}`}>
                  <span className="cat mono">{o.category}</span>
                  <span className="more-title">{o.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <Closing />
      </main>
      <Footer />
    </>
  );
}
