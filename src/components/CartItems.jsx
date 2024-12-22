import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CartItems({
  product,
  quantities,
  decreaseQuantity,
  increaseQuantity,
}) {
  return (
    <article className="grid grid-cols-4 place-items-center">
      <img src={product.image} alt="product-img" className="w-3/6" />
      <p className="text-center">
        <Link to={`/shop/product/${product.id}`}>{product.title}</Link>
      </p>
      <p>${product.price}</p>
      <div className="flex justify-center items-center gap-2">
        <button type="button" onClick={() => decreaseQuantity(product.id)}>
          -
        </button>
        <p>{quantities[product.id]}</p>
        <button type="button" onClick={() => increaseQuantity(product.id)}>
          +
        </button>
      </div>
    </article>
  );
}

CartItems.propTypes = {
  product: PropTypes.object.isRequired,
  quantities: PropTypes.object.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
};

export default CartItems;
