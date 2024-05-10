import { Link } from "react-scroll";

const links = [
  {
    label: "About",
    href: "about",
  },
  {
    label: "Work",
    href: "work",
  },
  {
    label: "Experience",
    href: "experience",
  },
  {
    label: "Skills",
    href: "skills",
  },
  {
    label: "Contact",
    href: "contact",
  },
];

function NavLinks() {
  return (
    <nav>
      {/* Bigger screen menu */}
      <div className="hidden md:block">
        <ul className="flex items-center px-3">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                spy={true}
                hashSpy={true}
                smooth={true}
                offset={-20}
                // duration={500}
                className="nav-link relative block text-sm text-zinc-200 font-medium transition hover:text-teal-400 cursor-pointer p-4"
              >
                {link.label}
                <span className="opacity-0 transition-opacity absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-400/0 via-teal-400/40 to-teal-400/0"></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* /Bigger screen menu */}

      {/* Smaller screen menu */}
      {/* Smaller screen menu */}
    </nav>
  );
}

export default NavLinks;
