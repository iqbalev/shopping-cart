import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProductCard({ products, addToCart }) {
  return products.map((product) => (
    <article
      key={product.id}
      className="flex flex-col justify-between items-center gap-2 p-4 "
    >
      <p className="text-center">
        <Link to={`product/${product.id}`}>{product.title}</Link>
      </p>
      <img src={product.image} alt="product-img" className="w-3/5 m-8" />
      <div className="flex flex-col gap-2 justify-center sm:flex-row items-center">
        <p className="text-lg">${product.price}</p>
        <button
          type="button"
          onClick={() => addToCart(product)}
          className="py-2 px-4 rounded-sm border border-neutral-800 text-neutral-800"
        >
          Add to Cart
        </button>
      </div>
    </article>
  ));
}

ProductCard.propTypes = {
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

export default ProductCard;
