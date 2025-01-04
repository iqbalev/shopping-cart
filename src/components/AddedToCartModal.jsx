import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import CheckIcon from "../assets/CheckIcon.svg";
import CloseButton from "./CloseButton";

function AddedToCartModal({ modalContent, closeModal }) {
  return (
    <dialog className="flex flex-col justify-between bg-white rounded-md w-80 sm:w-96 h-64 sm:h-72 p-4 gap-4">
      <div className="flex justify-between items-center">
        <div className="flex">
          <img src={CheckIcon} alt="check-icon" />
          <h5>Added to cart</h5>
        </div>
        <CloseButton onClick={closeModal} />
      </div>
      <div className="flex gap-5">
        <div className="w-24">
          <img
            src={modalContent.image}
            alt="product-img"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col">
          <p>{modalContent.title}</p>
          <p>${modalContent.price}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Link
          to="/cart"
          className="flex-1 text-center border rounded-md border-indigo-500 p-2"
          onClick={closeModal}
        >
          View Cart
        </Link>
        <Link className="flex-1 text-center border rounded-md bg-indigo-500 p-2 text-white">
          Checkout
        </Link>
      </div>
    </dialog>
  );
}

AddedToCartModal.propTypes = {
  modalContent: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default AddedToCartModal;
