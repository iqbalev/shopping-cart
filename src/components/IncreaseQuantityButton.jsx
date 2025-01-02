import PropTypes from "prop-types";

function IncreaseQuantityButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      +
    </button>
  );
}

IncreaseQuantityButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default IncreaseQuantityButton;
