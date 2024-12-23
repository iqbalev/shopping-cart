import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import PropTypes from "prop-types";

function Header({ quantities }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartItemCount = Object.values(quantities).reduce(
    (sum, itemQuantity) => sum + itemQuantity,
    0
  );

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="flex p-4 justify-between gap-4 items-center sm:justify-around">
      <h1
        role="button"
        className="text-2xl font-bold uppercase tracking-widest button"
      >
        <Link to="/">Shopping App</Link>
      </h1>
      <NavBar
        cartItemCount={cartItemCount}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </header>
  );
}

Header.propTypes = {
  quantities: PropTypes.object.isRequired,
};

export default Header;
