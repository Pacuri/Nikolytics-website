import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CaseStudy from "@/components/CaseStudy";
import Services from "@/components/Services";
import Approach from "@/components/Approach";
import InsightsLibrary from "@/components/InsightsLibrary";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import { getArticles } from "@/lib/insights";

export default function Home() {
  const articles = getArticles().slice(0, 4);
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CaseStudy />
        <Services />
        <Approach />
        <InsightsLibrary articles={articles} />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
