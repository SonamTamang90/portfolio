import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

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

function NavLinks() {
  const [curActiveLink, setCurActiveLink] = useState("");
  const location = useLocation();
  console.log(location.pathname);

  function handleActiveLink(link) {
    setCurActiveLink(link);
  }

  useEffect(
    function () {
      if (location.pathname === "/") {
        setCurActiveLink("");
      }
    },
    [location]
  );

  return (
    <nav>
      <ul className="flex px-3">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.href}
              onClick={() => handleActiveLink(link.href)}
              className={`relative block text-sm ${
                curActiveLink === link.href ? "text-primary" : "text-zinc-200"
              } font-medium p-4 transition hover:text-teal-400`}
            >
              {link.label}
              {curActiveLink === link.href && (
                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-400/0 via-teal-400/40 to-teal-400/0"></span>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;
