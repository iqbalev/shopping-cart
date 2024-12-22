import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Checkout({ totalPrice }) {
  return (
    <>
      <div className="flex justify-between">
        <p className="font-bold">Total</p>
        <p className="font-bold">${totalPrice}</p>
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
  totalPrice: PropTypes.string.isRequired,
};

export default Checkout;
