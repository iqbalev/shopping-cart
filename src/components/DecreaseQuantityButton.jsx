import PropTypes from "prop-types";

function DecreaseQuantityButton({ onClick }) {
  return (
    <button type="button" onClick={onClick}>
      -
    </button>
  );
}

DecreaseQuantityButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DecreaseQuantityButton;
