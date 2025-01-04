import { useOutletContext } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import AddedToCartModal from "../components/AddedToCartModal";
import ToastMessage from "../components/ToastMessage";

function ProductPage() {
  const {
    products,
    isModalVisible,
    addToCart,
    modalContent,
    closeModal,
    toastMessage,
  } = useOutletContext();

  return (
    <section className="flex flex-col sm:flex-row justify-evenly h-screen items-center  relative">
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
      <ProductDetails products={products} addToCart={addToCart} />
    </section>
  );
}

export default ProductPage;
