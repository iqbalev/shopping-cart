import { Link } from "react-router-dom";

function NavBar() {
  return (
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
  );
}

export default NavBar;
