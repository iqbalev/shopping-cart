import PropTypes from "prop-types";

function CloseButton({ closeMobileNavMenu }) {
  return (
    <button type="button" onClick={closeMobileNavMenu} className="sm:hidden">
      X
    </button>
  );
}

export default CloseButton;

CloseButton.propTypes = {
  closeMobileNavMenu: PropTypes.func.isRequired,
};
