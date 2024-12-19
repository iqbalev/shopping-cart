import { useOutletContext } from "react-router-dom";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";

function ShopPage() {
  const { products, isLoading } = useOutletContext();

  return (
    <div className="grid place-items-center h-screen">
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <section className="grid w-3/4 gap-10 grid-cols-1 sm:grid-cols-2 p-4">
          <ProductCard products={products} />
        </section>
      )}
    </div>
  );
}

export default ShopPage;
