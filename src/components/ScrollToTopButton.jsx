import PropTypes from "prop-types";
import ScrollToTopButtonIcon from "../assets/ScrollToTopButtonIcon.svg";

function ScrollToTopButton({ isScrollToTopButtonVisible, scrollToTop }) {
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-4 right-8 ${
        isScrollToTopButtonVisible ? "block" : "hidden"
      }`}
    >
      <img src={ScrollToTopButtonIcon} alt="scroll-to-top-button-icon" />
    </button>
  );
}

ScrollToTopButton.propTypes = {
  isScrollToTopButtonVisible: PropTypes.bool.isRequired,
  scrollToTop: PropTypes.func.isRequired,
};

export default ScrollToTopButton;
