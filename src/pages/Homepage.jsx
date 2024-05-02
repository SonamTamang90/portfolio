import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Work from "../components/sections/Work";
import Contact from "../components/sections/Contact";
// import { UseEffectScroll } from "react-use-smooth-scroll";
// import "react-use-smooth-scroll/dist/index.css";
function Homepage() {
  return (
    <main>
      {/* <UseEffectScroll>
        <Hero />
        <About />
        <Work />
        <Contact />
      </UseEffectScroll> */}
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  );
}

export default Homepage;
