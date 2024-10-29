import Expertise from "./components/Expertise/Expertise";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <main className="px-4 max-w-6xl mx-auto">
      <Hero />
      <Services />
      <Expertise />
    </main>
  );
}
