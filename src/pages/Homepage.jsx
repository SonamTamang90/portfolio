import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Work from "../components/sections/Work";
import Experience from "../components/sections/Experience";
import Skills from "../components/sections/Skills";
import Contact from "../components/sections/Contact";

function Homepage() {
  return (
    <main>
      <h1 className="text-3xl text-green-400">
        THIS IS A TEST FOR GITHUB ACTIONS
      </h1>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}

export default Homepage;
