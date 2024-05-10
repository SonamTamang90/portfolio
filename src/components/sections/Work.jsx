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
              Things I've built.
            </h2>
          </div>
          {/* Projects showcase lists */}
          <div className="space-y-8">
            {/* Project One */}
            <div className="cursor-pointer hover:bg-zinc-800/50 rounded-lg p-6 transition-all border border-transparent hover:border hover:border-zinc-700/50">
              <div className="grid grid-cols-1 md:grid-cols-8 gap-y-8 md:gap-11">
                <div className="md:col-span-3">
                  <img
                    src="./astroshop-ss.png"
                    alt="project one"
                    className="w-full"
                  />
                </div>

                <div className="md:col-start-4 md:col-end-9 md:pr-12">
                  <a
                    href="https://selisegroup.com/"
                    target="_blank"
                    className="flex items-center text-base font-semibold tracking-tight text-zinc-300 transition hover:text-primary cursor-pointer"
                  >
                    <span className="inline-block mr-2">
                      Selise Digital Platforms ·
                    </span>
                    <span>Software Engineer</span>
                  </a>
                  <p className="relative z-10 mt-2 text-zinc-400 mb-4">
                    Engineered innovative websites, design systems, and digital
                    experiences, delivering exceptional results across diverse
                    projects and for a variety of clients.
                  </p>
                  <div className="flex gap-6 text-sm">
                    <p className="text-primary">Tailwind</p>
                    <p className="text-primary">React</p>
                    <p className="text-primary">Redux</p>
                    <p className="text-primary">Supabase</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Project One */}
            {/* Project Two */}
            <div className="cursor-pointer hover:bg-zinc-800/50 rounded-lg p-6 transition-all border border-transparent hover:border hover:border-zinc-700/50">
              <div className="grid grid-cols-1 md:grid-cols-8 gap-y-8  md:gap-11">
                <div className="md:col-span-3">
                  <img
                    src="./modular-ss.png"
                    alt="project one"
                    className="w-full"
                  />
                </div>

                <div className="md:col-start-4 md:col-end-9 md:pr-12">
                  <a
                    href="https://selisegroup.com/"
                    target="_blank"
                    className="flex items-center text-base font-semibold tracking-tight text-zinc-300 transition hover:text-primary cursor-pointer"
                  >
                    <span className="inline-block mr-2">
                      Selise Digital Platforms ·
                    </span>
                    <span>Software Engineer</span>
                  </a>
                  <p className="relative z-10 mt-2 text-zinc-400 mb-4">
                    Engineered innovative websites, design systems, and digital
                    experiences, delivering exceptional results across diverse
                    projects and for a variety of clients.
                  </p>
                  <div className="flex gap-6 text-sm">
                    <p className="text-primary">Html</p>
                    <p className="text-primary">Scss</p>
                    <p className="text-primary">Javascript</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Project Two */}

            {/* Project Three */}
            <div className="cursor-pointer hover:bg-zinc-800/50 rounded-lg p-6 transition-all border border-transparent hover:border hover:border-zinc-700/50">
              <div className="grid grid-cols-1 md:grid-cols-8 gap-y-8 md:gap-11">
                <div className="md:col-span-3">
                  <img
                    src="./sketch-ss.png"
                    alt="project three"
                    className="w-full"
                  />
                </div>

                <div className="md:col-start-4 md:col-end-9 md:pr-12">
                  <a
                    href="https://selisegroup.com/"
                    target="_blank"
                    className="flex items-center text-base font-semibold tracking-tight text-zinc-300 transition hover:text-primary cursor-pointer"
                  >
                    <span className="inline-block mr-2">
                      Selise Digital Platforms ·
                    </span>
                    <span>Software Engineer</span>
                  </a>
                  <p className="relative z-10 mt-2 text-zinc-400 mb-4">
                    Engineered innovative websites, design systems, and digital
                    experiences, delivering exceptional results across diverse
                    projects and for a variety of clients.
                  </p>
                  <div className="flex gap-6 text-sm">
                    <p className="text-primary">Tailwind</p>
                    <p className="text-primary">React</p>
                    <p className="text-primary">Redux</p>
                    <p className="text-primary">Supabase</p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Project Three */}
          </div>
          {/* <Link className="inline-block text-zinc-300 transition 0 hover:underline mt-20">
            View all my work
          </Link> */}
        </div>
      </Container>
    </section>
  );
}

export default Work;
