import Container from "./Container";
import Logo from "../ui/Logo";
import NavLinks from "../ui/NavLinks";
import { HiMoon } from "react-icons/hi2";

function Header() {
  return (
    <header>
      <Container>
        <div className="relative flex items-center gap-4 mt-6">
          <div className="flex flex-1">
            <Logo />
          </div>
          <div className="flex flex-1 justify-end md:justify-center">
            <NavLinks />
          </div>
          <div className="flex justify-end md:flex-1">
            <button className="bg-zinc-800/90 backdrop-blur ring-1 ring-white/10 shadow-lg shadow-zinc-800/5 px-3 py-2 rounded-full transition hover:ring-white/20">
              <HiMoon className="w-5 h-5 text-zinc-400" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
