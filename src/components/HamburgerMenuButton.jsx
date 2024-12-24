import PropTypes from "prop-types";

function HamburgerMenuButton({ toggleDropdownMenu }) {
  return (
    <button type="button" onClick={toggleDropdownMenu} className="sm:hidden">
      <span className="block w-6 h-0.5  bg-neutral-800 mb-1"></span>{" "}
      <span className="block w-6 h-0.5 bg-neutral-800 mb-1"></span>{" "}
      <span className="block w-6 h-0.5  bg-neutral-800"></span>
    </button>
  );
}

HamburgerMenuButton.propTypes = {
  toggleDropdownMenu: PropTypes.func.isRequired,
};

export default HamburgerMenuButton;
