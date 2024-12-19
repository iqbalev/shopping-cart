import { useOutletContext } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

function ProductPage() {
  const { products } = useOutletContext();

  return <ProductDetails products={products} />;
}

export default ProductPage;
