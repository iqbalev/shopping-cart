import PropTypes from "prop-types";
import HamburgerButtonIcon from "../assets/HamburgerButtonIcon.svg";

function HamburgerButton({ toggleMobileNavMenu }) {
  return (
    <button
      type="button"
      onClick={toggleMobileNavMenu}
      className="sm:hidden bg-neu"
    >
      <img src={HamburgerButtonIcon} alt="hamburger-button-icon" />
    </button>
  );
}

HamburgerButton.propTypes = {
  toggleMobileNavMenu: PropTypes.func.isRequired,
};

export default HamburgerButton;
