import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import Loader from "../components/Loader";
import ToastMessage from "../components/ToastMessage";
import ProductCard from "../components/ProductCard";
import ScrollToTopButton from "../components/ScrollToTopButton";

const SCROLL_THRESHOLD_PERCENTAGE = 0.7;

function ShopPage() {
  const { products, isLoading, addToCart, toastMessage } = useOutletContext();
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
        <section className="grid w-3/4 gap-10 grid-cols-1 sm:grid-cols-2 p-4 relative">
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
