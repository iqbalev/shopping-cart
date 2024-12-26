import PropTypes from "prop-types";

function CloseButton({ closeDropdown }) {
  return (
    <button type="button" onClick={closeDropdown} className="sm:hidden">
      X
    </button>
  );
}

export default CloseButton;

CloseButton.propTypes = {
  closeDropdown: PropTypes.func.isRequired,
};
