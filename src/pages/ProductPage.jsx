import { useOutletContext } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

function ProductPage() {
  const { products, addToCart } = useOutletContext();

  return <ProductDetails products={products} addToCart={addToCart} />;
}

export default ProductPage;
