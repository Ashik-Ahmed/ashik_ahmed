import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Expertise from "./components/Expertise/Expertise";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Expertise />
      <Portfolio />
      <Experience />
      <Education />
      <Blogs />
      <Contact />
      <Footer />
    </main>
  );
}
