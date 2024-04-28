import { NavLink } from "react-router-dom";

const links = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Gear",
    href: "/gear",
  },
  {
    label: "Blogs",
    href: "/blogs",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

// TODO: Adding active links
//<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-400/0 via-teal-400/40 to-teal-400/0"></span>

function NavLinks() {
  return (
    <nav className="bg-zinc-800/90 backdrop-blur ring-1 ring-white/10 shadow-lg shadow-zinc-800/5 rounded-full">
      <ul className="flex px-3">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.href}
              className="relative block text-sm text-zinc-200 font-medium p-3 transition hover:text-teal-400"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
