import { useParams } from "react-router-dom";

function ProductDetails({ products }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  return (
    <section className="flex flex-col justify-evenly h-screen items-center sm:flex-row ">
      {product && (
        <>
          <div className="flex justify-center items-center w-1/5 ">
            <img src={product.image} alt="product-img" className="w-full" />
          </div>
          <div className="flex flex-col justify-center gap-4 w-3/5">
            <h2 className="font-bold text-lg">{product.title}</h2>
            <p>{product.description}</p>
            <div className="flex items-center gap-2">
              <p>${product.price}</p>
              <button
                type="button"
                className="py-2 px-4 rounded-sm border border-neutral-800 text-neutral-800"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default ProductDetails;
