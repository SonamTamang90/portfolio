import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Work from "../components/sections/Work";
import Blog from "../components/sections/Blog";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";

function Homepage() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Blog />
      <Contact />
    </main>
  );
}

export default Homepage;
