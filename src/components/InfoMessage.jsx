import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function InfoMessage({ message, link, linkText }) {
  return (
    <>
      <h2 className="text-center text-lg">{message}</h2>
      <Link to={link} className="py-2 px-4 bg-indigo-500 rounded-md text-white">
        {linkText}
      </Link>
    </>
  );
}

InfoMessage.propTypes = {
  message: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

export default InfoMessage;
