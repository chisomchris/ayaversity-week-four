import { About } from "./components/about";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { HowTo } from "./components/how-to";
import { Popular } from "./components/popular";
import { Sponsors } from "./components/sponsors";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Sponsors />
      <Popular />
      <Features />
      <About />
      <HowTo />
      <Footer />
    </>
  );
}
