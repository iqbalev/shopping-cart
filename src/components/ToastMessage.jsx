import PropTypes from "prop-types";

function ToastMessage({ message }) {
  return (
    <p className="px-4 py-2 m-3 rounded-sm bg-neutral-800 text-white fixed top-0 right-0 sm:left-1/2 sm:right-auto sm:transform sm:-translate-x-1/2">
      {message}
    </p>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ToastMessage;
