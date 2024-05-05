import { Link } from "react-router-dom";
import Container from "../layout/Container";

function Work() {
  return (
    <section id="work">
      <Container>
        <div className="border-b border-zinc-700/40 pt-32 pb-20">
          <div className="mb-16">
            <div className="inline-block bg-primary/25 text-primary rounded-full py-2 px-6 mb-6">
              <h4 className="uppercase font-medium">My Work</h4>
            </div>
            <h2 className="text-2xl text-zinc-300 font-bold">
              Here are some of the things I've built.
            </h2>
          </div>

          {/* projects showcase lists */}
          <ul className="flex flex-col gap-20">
            {/* first project */}
            <li className="flex gap-8 cursor-pointer group">
              <div className="relative max-w-xs">
                <img
                  src="astroshop-ss.png"
                  alt="dequest app overview"
                  className="rounded-lg"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-zinc-900/5 to-zinc-900 transition group-hover:to-transparent"></div>
              </div>
              {/* / project details */}
              <div className="lg:pr-20">
                <h3 className="text-zinc-300 font-medium mb-4">
                  Astro online shopping
                </h3>
                <p className="text-zinc-400">
                  An innovative quiz application designed to empower and engage
                  individuals passionate about front-end development. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <ul className="flex gap-6 text-primary/80 mt-6">
                  <li>React</li>
                  <li>Tailwind</li>
                  <li>Firebase</li>
                </ul>
              </div>
              {/* / project details end */}
            </li>
            {/* first project */}

            {/* second project */}
            <li className="flex gap-8 cursor-pointer group">
              <div className="relative max-w-xs">
                <img
                  src="modular-ss.png"
                  alt="dequest app overview"
                  className="rounded-lg"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-zinc-900/5 to-zinc-900 transition group-hover:to-transparent"></div>
              </div>
              {/* / project details */}
              <div className="lg:pr-20">
                <h3 className="text-zinc-300 font-medium mb-4">
                  Modular funiture
                </h3>
                <p className="text-zinc-400">
                  An innovative quiz application designed to empower and engage
                  individuals passionate about front-end development. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <ul className="flex gap-6 text-primary/80 mt-6">
                  <li>React</li>
                  <li>Tailwind</li>
                  <li>Firebase</li>
                </ul>
              </div>
              {/* / project details end */}
            </li>
            {/* second project end */}

            {/* third project */}
            <li className="flex gap-8 cursor-pointer group">
              <div className="relative max-w-xs">
                <img
                  src="sketch-ss.png"
                  alt="dequest app overview"
                  className="rounded-lg"
                />
                <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-zinc-900/5 to-zinc-900 transition group-hover:to-transparent"></div>
              </div>
              {/* / project details */}
              <div className="lg:pr-20">
                <h3 className="text-zinc-300 font-medium mb-4">Sketch shop</h3>
                <p className="text-zinc-400">
                  An innovative quiz application designed to empower and engage
                  individuals passionate about front-end development. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <ul className="flex gap-6 text-primary/80 mt-6">
                  <li>React</li>
                  <li>Tailwind</li>
                  <li>Firebase</li>
                </ul>
              </div>
              {/* / project details end */}
            </li>
            {/* third project end */}
          </ul>
          {/* / projects showcase lists */}

          <Link className="inline-block text-zinc-300 transition 0 hover:underline mt-20">
            View all my work
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Work;
