import Container from "./Container";
import Logo from "../ui/Logo";
import NavLinks from "../ui/NavLinks";
import { FaDownload } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(function () {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100]">
      <Container>
        <div
          className={`${
            isSticky
              ? "bg-zinc-800/90 backdrop-blur ring-1 ring-white/10 shadow-lg shadow-zinc-800/5 rounded-full "
              : ""
          }`}
        >
          <div className="flex items-center gap-4 mt-6 px-2">
            <div className="flex flex-1">
              <Logo />
            </div>
            <div className="flex flex-1 justify-end md:justify-center">
              <NavLinks />
            </div>
            <div className="flex justify-end md:flex-1">
              <button className="flex items-center gap-2 bg-zinc-800/90 text-sm text-zinc-400 backdrop-blur ring-1 ring-white/10 shadow-lg shadow-zinc-800/5 px-3 py-2 rounded-full transition hover:ring-white/20">
                <FaDownload className="w-3 h-3" />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
