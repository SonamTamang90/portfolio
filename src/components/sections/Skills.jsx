import { SiKia } from "react-icons/si";
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
  FaJ,
} from "react-icons/fa6";

const skills = [
  {
    language: "Html5",
    icon: <FaHtml5 />,
  },
  {
    language: "Css3",
    icon: <FaCss3Alt />,
  },
  {
    language: "Sass",
    icon: <FaSass />,
  },
  {
    language: "Javacript",
    icon: <FaJs />,
  },
  {
    language: "React",
    icon: <FaReact />,
  },
  {
    language: "Git",
    icon: <FaGitAlt />,
  },
  {
    language: "Github",
    icon: <FaGithub />,
  },
];

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
              Technical Skills
            </h2>
          </div>
          {/* /section heading */}
          <div className="w-full group flex gap-16 overflow-x-hidden mask-inline-faded">
            <ul className="flex gap-16 w-full animate-marquee group-hover:play-state-paused">
              {skills.map((skill) => (
                <li
                  key={skill.language}
                  className="flex flex-col items-center gap-4 text-white/80"
                >
                  <span className="text-6xl">{skill.icon}</span>
                  <h4 className="text-sm uppercase font-semibold">
                    {skill.language}
                  </h4>
                </li>
              ))}
            </ul>
            <ul className="flex gap-16 w-full animate-marquee group-hover:play-state-paused">
              {skills.map((skill) => (
                <li
                  key={skill.language}
                  className="flex flex-col items-center gap-4 text-white/80"
                >
                  <span className="text-6xl">{skill.icon}</span>
                  <h4 className="text-sm uppercase font-semibold">
                    {skill.language}
                  </h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
