import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import PropTypes from "prop-types";

function Header({ quantities }) {
  const cartItemCount = Object.values(quantities).reduce(
    (sum, itemQuantity) => sum + itemQuantity,
    0
  );

  return (
    <header className="flex flex-col gap-4 items-center py-4 sm:flex-row justify-around">
      <h1
        role="button"
        className="text-2xl font-bold uppercase tracking-widest button"
      >
        <Link to="/">Shopping App</Link>
      </h1>
      <NavBar cartItemCount={cartItemCount} />
    </header>
  );
}

Header.propTypes = {
  quantities: PropTypes.object.isRequired,
};

export default Header;
