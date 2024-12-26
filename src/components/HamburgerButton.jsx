import PropTypes from "prop-types";

function HamburgerButton({ toggleMobileNavMenu }) {
  return (
    <button type="button" onClick={toggleMobileNavMenu} className="sm:hidden">
      <span className="block w-6 h-0.5  bg-neutral-800 mb-1"></span>{" "}
      <span className="block w-6 h-0.5 bg-neutral-800 mb-1"></span>{" "}
      <span className="block w-6 h-0.5  bg-neutral-800"></span>
    </button>
  );
}

HamburgerButton.propTypes = {
  toggleMobileNavMenu: PropTypes.func.isRequired,
};

export default HamburgerButton;
