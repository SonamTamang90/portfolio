import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Work from "../components/sections/Work";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";

function Homepage() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Contact />
    </main>
  );
}

export default Homepage;
