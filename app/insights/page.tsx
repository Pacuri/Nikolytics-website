import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Closing from "@/components/Closing";
import InsightsLibrary from "@/components/InsightsLibrary";
import { getArticles } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Notes on how nonprofits actually run day to day: where the hours go, where the software spend goes, and what changes when the systems finally talk to each other.",
  alternates: { canonical: "/insights" },
};

export default function InsightsIndex() {
  const articles = getArticles();
  return (
    <>
      <Header />
      <main>
        <section className="wrap page-head">
          <div className="field-head">
            <span className="mono">Insights</span>
            <span className="mono">{articles.length} articles</span>
          </div>
          <div className="block-intro" style={{ paddingTop: "clamp(48px, 7vh, 80px)" }}>
            <h1 className="block-title">
              Operational problems you already <em>recognize</em>.
            </h1>
            <p className="lede">
              Notes on how nonprofits actually run day to day: where the hours go, where the software spend goes, and what
              changes when the systems finally talk to each other.
            </p>
          </div>
        </section>
        <InsightsLibrary articles={articles} heading={false} />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
