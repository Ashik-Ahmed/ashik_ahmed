import Expertise from "./components/Expertise/Expertise";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <main className="px-4 max-w-6xl mx-auto my-12">
      <Hero />
      <Services />
      <Expertise />
      <Portfolio />
    </main>
  );
}
