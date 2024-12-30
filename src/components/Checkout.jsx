import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Checkout({ cartTotalPrice }) {
  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold">Total</p>
        <p className="font-bold">${cartTotalPrice}</p>
      </div>
      <Link
        to=""
        className="bg-neutral-800 py-2 px-4 text-center text-white rounded-sm"
      >
        Checkout
      </Link>
    </>
  );
}

Checkout.propTypes = {
  cartTotalPrice: PropTypes.string.isRequired,
};

export default Checkout;
