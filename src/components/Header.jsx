import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-col gap-4 items-center py-4 sm:flex-row justify-around">
      <h1
        role="button"
        className="text-2xl font-bold uppercase tracking-widest button"
      >
        <Link to="/">Shopping App</Link>
      </h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
