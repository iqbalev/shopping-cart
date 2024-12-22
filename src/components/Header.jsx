import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="flex flex-col gap-4 items-center py-4 sm:flex-row justify-around">
      <h1
        role="button"
        className="text-2xl font-bold uppercase tracking-widest button"
      >
        <Link to="/">Shopping App</Link>
      </h1>
      <NavBar />
    </header>
  );
}

export default Header;
