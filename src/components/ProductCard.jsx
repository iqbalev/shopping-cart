import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AddToCartButton from "./AddToCartButton";
import RatingIcon from "../assets/RatingIcon.svg";

function ProductCard({ products, addToCart }) {
  return products.map((product) => (
    <article
      key={product.id}
      className="flex flex-col justify-between gap-2 p-4"
    >
      <div className="flex flex-col items-center justify-center w-56 h-56 p-4 mx-auto">
        <img
          src={product.image}
          alt="product-img"
          className="w-full h-full object-contain block"
        />
      </div>
      <div className="flex flex-col items-start p-4 gap-1">
        <div className="flex gap-2 items-center">
          <p className="font-semibold">${product.price}</p>
          <AddToCartButton
            onClick={() => addToCart(product)}
            className="px-1 rounded-sm bg-indigo-500 text-sm text-white"
          />
        </div>
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
