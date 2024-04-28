import GridBackground from "../GridBackground";
import { FaXTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section>
      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl w-full lg:px-8">
          <div className="border-b border-zinc-700/40">
            <div className="relative w-full h-screen px-4 sm:px-8 lg:px-12">
              <GridBackground />
              <div className="sm:pl-8 lg:pl-12">
                <div className="max-w-2xl absolute top-2/4 -translate-y-2/4 z-50">
                  <h1 className="text-6xl font-bold tracking-wider leading-tight text-zinc-100">
                    Designing the future of user experiences.
                  </h1>
                  <p className="mt-6 text-base text-zinc-400">
                    Hi, I’m Sonam Tamang, a front-end developer focused on
                    creating beautiful and user friendly application while
                    writing clean code.
                  </p>
                  {/*  socials links  */}
                  <div className="mt-8">
                    <ul className="flex gap-6">
                      <li>
                        <a href="#" className="text-zinc-400 group">
                          <FaXTwitter className="w-6 h-6 transition group-hover:text-zinc-300" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-zinc-400 group">
                          <FaLinkedin className="w-6 h-6 transition group-hover:text-zinc-300" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-zinc-400 group">
                          <FaGithub className="w-6 h-6 transition group-hover:text-zinc-300" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-zinc-400 group">
                          <FaInstagram className="w-6 h-6 transition group-hover:text-zinc-300" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*  socials links  */}
                  <div className="mt-11">
                    <NavLink
                      to="/work"
                      className="text-primary/90 transition hover:text-zinc-300 hover:underline"
                    >
                      See my work
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
