import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import NavBar from "./NavBar";

function Header({ quantities }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const cartItemCount = Object.values(quantities).reduce(
    (sum, itemQuantity) => sum + itemQuantity,
    0
  );

  function toggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function closeDropdown() {
    setIsDropdownOpen(false);
  }

  function closeDropdownOnOutsideClick(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdownOnOutsideClick);
    return () =>
      document.removeEventListener("mousedown", closeDropdownOnOutsideClick);
  }, []);

  return (
    <header className="flex p-4 justify-between gap-4 items-center sm:justify-around">
      <h1
        role="button"
        className="text-2xl font-bold uppercase tracking-widest button"
      >
        <Link to="/">Shopping App</Link>
      </h1>
      <NavBar
        isDropdownOpen={isDropdownOpen}
        dropdownRef={dropdownRef}
        cartItemCount={cartItemCount}
        toggleDropdown={toggleDropdown}
        closeDropdown={closeDropdown}
      />
    </header>
  );
}

Header.propTypes = {
  quantities: PropTypes.object.isRequired,
};

export default Header;
