import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import DecreaseQuantityButton from "./DecreaseQuantityButton";
import IncreaseQuantityButton from "./IncreaseQuantityButton";

function CartItems({
  product,
  quantities,
  decreaseQuantity,
  increaseQuantity,
  productPrice,
}) {
  return (
    <article className="grid grid-cols-4 place-items-center">
      <img src={product.image} alt="product-img" className="w-3/6" />
      <p className="text-center">
        <Link to={`/shop/product/${product.id}`}>{product.title}</Link>
      </p>
      <p>${productPrice}</p>
      <div className="flex justify-center items-center gap-2">
        <DecreaseQuantityButton onClick={() => decreaseQuantity(product.id)} />
        <p>{quantities[product.id]}</p>
        <IncreaseQuantityButton onClick={() => increaseQuantity(product.id)} />
      </div>
    </article>
  );
}

CartItems.propTypes = {
  product: PropTypes.object.isRequired,
  quantities: PropTypes.object.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  productPrice: PropTypes.string.isRequired,
};

export default CartItems;
