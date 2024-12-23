import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function ProductDetails({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));

  return (
    product && (
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
              onClick={() => addToCart(product)}
              className="py-2 px-4 rounded-sm border border-neutral-800 text-neutral-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </>
    )
  );
}

ProductDetails.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
