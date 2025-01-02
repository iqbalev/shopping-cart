import PropTypes from "prop-types";

function AddToCartButton({ onClick, className }) {
  return (
    <button type="button" onClick={onClick} className={className}>
      Add to Cart
    </button>
  );
}

AddToCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default AddToCartButton;
