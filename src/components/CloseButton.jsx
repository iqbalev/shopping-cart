import PropTypes from "prop-types";
import CloseButtonIcon from "../assets/CloseButtonIcon.svg";

function CloseButton({ onClick, className }) {
  return (
    <button type="button" onClick={onClick} className={className}>
      <img src={CloseButtonIcon} alt="close-button-icon" />
    </button>
  );
}

export default CloseButton;

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};
