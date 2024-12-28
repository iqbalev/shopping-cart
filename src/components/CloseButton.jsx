import PropTypes from "prop-types";
import CloseButtonIcon from "../assets/CloseButtonIcon.svg";

function CloseButton({ closeMobileNavMenu }) {
  return (
    <button type="button" onClick={closeMobileNavMenu} className="sm:hidden">
      <img src={CloseButtonIcon} alt="close-button-icon" />
    </button>
  );
}

export default CloseButton;

CloseButton.propTypes = {
  closeMobileNavMenu: PropTypes.func.isRequired,
};
