import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Loader from "../components/Loader";
import AddedToCartModal from "../components/AddedToCartModal";
import ToastMessage from "../components/ToastMessage";
import ProductCard from "../components/ProductCard";
import ScrollToTopButton from "../components/ScrollToTopButton";

const SCROLL_THRESHOLD_PERCENTAGE = 0.7;

function ShopPage() {
  const {
    products,
    isLoading,
    isModalVisible,
    addToCart,
    modalContent,
    closeModal,
    toastMessage,
  } = useOutletContext();

  const [isScrollToTopButtonVisible, setIsScrollToTopButtonVisible] =
    useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleScrollToTopButton() {
    const currentScrollPosition = document.documentElement.scrollTop;
    const totalScrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    // make the scroll to top button appear after scrolled past certain percentage of the page height, relative to the screen size
    const scrollThreshold = totalScrollableHeight * SCROLL_THRESHOLD_PERCENTAGE;

    if (currentScrollPosition > scrollThreshold) {
      setIsScrollToTopButtonVisible(true);
    } else {
      setIsScrollToTopButtonVisible(false);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", toggleScrollToTopButton);
    return () =>
      document.removeEventListener("scroll", toggleScrollToTopButton);
  }, []);

  return (
    <div className="grid place-items-center h-screen">
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 relative">
          {isModalVisible && (
            <div className="w-screen h-screen bg-neutral-800 bg-opacity-80 fixed top-0 left-0 flex justify-center items-center">
              <AddedToCartModal
                isModalVisible={isModalVisible}
                modalContent={modalContent}
                closeModal={closeModal}
              />
            </div>
          )}
          {toastMessage && <ToastMessage message={toastMessage} />}
          <ProductCard products={products} addToCart={addToCart} />
          <ScrollToTopButton
            isScrollToTopButtonVisible={isScrollToTopButtonVisible}
            scrollToTop={scrollToTop}
          />
        </section>
      )}
    </div>
  );
}

export default ShopPage;
