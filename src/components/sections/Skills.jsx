import Container from "../layout/Container";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa6";

function Skills() {
  return (
    <section id="skills">
      <Container>
        <div className="py-32">
          {/* section heading */}
          <div className="mb-16">
            <div className="inline-block bg-primary/25 text-primary rounded-full py-2 px-6 mb-6">
              <h4 className="uppercase font-medium">Skills</h4>
            </div>
            <h2 className="text-2xl text-zinc-300 font-bold">
              {/* Additional Information about Myself */}
              My technical skills
            </h2>
          </div>
          {/* /section heading */}

          <div className="grid grid-cols-3 md:grid-cols-7 gap-6 md:gap-11">
            <div className="w-28 h-28 bg-zinc-800/50 flex flex-col gap-2 justify-center items-center border border-zinc-700/50 rounded-md">
              <FaHtml5 className="w-11 h-11 text-white/80" />
              <h4 className="text-sm text-white/80">HTML</h4>
            </div>
            <div className="w-28 h-28 bg-zinc-800/50 flex flex-col gap-2 justify-center items-center border border-zinc-700/50 rounded-md">
              <FaCss3Alt className="w-11 h-11 text-white/80" />
              <h4 className="text-sm text-white/80">CSS</h4>
            </div>
            <div className="w-28 h-28 bg-zinc-800/50 flex flex-col gap-2 justify-center items-center border border-zinc-700/50 rounded-md">
              <FaSass className="w-11 h-11 text-white/80" />
              <h4 className="text-sm text-white/80">SASS</h4>
            </div>
            <div className="w-28 h-28 bg-zinc-800/50 flex flex-col gap-2 justify-center items-center border border-zinc-700/50 rounded-md">
              <FaJs className="w-11 h-11 text-white/80" />
              <h4 className="text-sm text-white/80">Javascript</h4>
            </div>
            <div className="w-28 h-28 bg-zinc-800/50 flex flex-col gap-2 justify-center items-center border border-zinc-700/50 rounded-md">
              <FaReact className="w-11 h-11 text-white/80" />
              <h4 className="text-sm text-white/80">React</h4>
            </div>
            <div className="w-28 h-28 bg-zinc-800/50 flex flex-col gap-2 justify-center items-center border border-zinc-700/50 rounded-md">
              <FaNodeJs className="w-11 h-11 text-white/80" />
              <h4 className="text-sm text-white/80">Node Js</h4>
            </div>
            <div className="w-28 h-28 bg-zinc-800/50 flex flex-col gap-2 justify-center items-center border border-zinc-700/50 rounded-md">
              <FaGitAlt className="w-11 h-11 text-white/80" />
              <h4 className="text-sm text-white/80">Git</h4>
            </div>
            <div className="w-28 h-28 bg-zinc-800/50 flex flex-col gap-2 justify-center items-center border border-zinc-700/50 rounded-md">
              <FaGithub className="w-11 h-11 text-white/80" />
              <h4 className="text-sm text-white/80">GitHub</h4>
            </div>
            <div className="w-28 h-28 bg-zinc-800/50 flex flex-col gap-2 justify-center items-center border border-zinc-700/50 rounded-md">
              <FaDatabase className="w-11 h-11 text-white/80" />
              <h4 className="text-sm text-white/80">MySql</h4>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
