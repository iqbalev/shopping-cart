import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RatingIcon from "../assets/RatingIcon.svg";

function ProductCard({ products, addToCart }) {
  return products.map((product) => (
    <article
      key={product.id}
      className="flex flex-col justify-between gap-2 p-4 shadow-sm"
    >
      <div className="flex flex-col items-center justify-center w-48 h-full p-4 mx-auto">
        <img
          src={product.image}
          alt="product-img"
          className="w-full h-auto block"
        />
      </div>
      <div className="flex flex-col items-start p-4 gap-1">
        <p className="font-semibold">${product.price}</p>
        <p
          title={product.title}
          className="w-full overflow-hidden text-ellipsis whitespace-nowrap"
        >
          <Link to={`product/${product.id}`}>{product.title}</Link>
        </p>
        <div className="flex justify-center items-center gap-1">
          <img
            className="w-4 inline-block"
            src={RatingIcon}
            alt="rating-icon"
          />
          <p className="text-sm">{product.rating.rate}</p>
          <span className="text-sm">|</span>
          <p className="text-sm">{product.rating.count} sold</p>
        </div>
      </div>
      <button
        type="button"
        onClick={() => addToCart(product)}
        className="p-3 rounded-md bg-indigo-500 text-white"
      >
        Add to Cart
      </button>
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
