import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="h-10 w-10 bg-zinc-800/90 backdrop-blur ring-1 ring-white/10 shadow-lg shadow-zinc-800/5 rounded-full p-0.5">
      <Link to="/">
        <img
          src="logo.png"
          alt="Profile picture logo"
          className="rounded-full"
        />
      </Link>
    </div>
  );
}

export default Logo;
