import { useOutletContext } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import ToastMessage from "../components/ToastMessage";

function ProductPage() {
  const { products, addToCart, toastMessage } = useOutletContext();

  return (
    <section className="flex flex-col sm:flex-row justify-evenly h-screen items-center  relative">
      {toastMessage && <ToastMessage message={toastMessage} />}
      <ProductDetails products={products} addToCart={addToCart} />
    </section>
  );
}

export default ProductPage;
