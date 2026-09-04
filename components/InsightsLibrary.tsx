import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/lib/insights";

type Props = { articles: Article[]; heading?: boolean };

/* The editorial library: one lead, two stacked, one wide row. Used on the homepage and the Insights index. */
export default function InsightsLibrary({ articles, heading = true }: Props) {
  const [lead, a, b, ...rest] = articles;
  return (
    <section className="wrap" aria-labelledby="insights-title" id="insights">
      {heading && (
        <div className="field-head">
          <span className="mono">Insights</span>
          <Link className="mono" href="/insights">All articles</Link>
        </div>
      )}
      <div className="block">
        {heading && (
          <div className="block-intro reveal">
            <h2 className="block-title" id="insights-title">
              Operational problems you already <em>recognize</em>.
            </h2>
            <p className="lede">
              Notes on how nonprofits actually run day to day: where the hours go, where the software spend goes, and what
              changes when the systems finally talk to each other.
            </p>
          </div>
        )}
        <div className="library reveal">
          {lead && <Card article={lead} kind="lead" sizes="(max-width: 1080px) 100vw, 780px" />}
          {a && <Card article={a} kind="small" sizes="(max-width: 860px) 100vw, (max-width: 1080px) 50vw, 420px" />}
          {b && <Card article={b} kind="small" sizes="(max-width: 860px) 100vw, (max-width: 1080px) 50vw, 420px" />}
          {rest.map((r) => (
            <Card key={r.slug} article={r} kind="third" sizes="(max-width: 860px) 100vw, 400px" />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ article, kind, sizes }: { article: Article; kind: "lead" | "small" | "third"; sizes: string }) {
  const cls = kind === "lead" ? "article lead" : kind === "small" ? "article small" : "article small third";
  const img = (
    <span className="plate-wrap-img">
      <Image src={article.image} alt={article.imageAlt} fill sizes={sizes} className="plate" />
    </span>
  );
  const text = (
    <>
      <span className="cat mono">{article.category}</span>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </>
  );
  return (
    <article className={cls}>
      <Link href={`/insights/${article.slug}`} className={kind === "third" ? "row" : undefined}>
        {img}
        {kind === "third" ? <div>{text}</div> : text}
      </Link>
    </article>
  );
}
