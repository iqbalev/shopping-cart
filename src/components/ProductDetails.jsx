import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import AddToCartButton from "./AddToCartButton";

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
            <AddToCartButton
              onClick={() => addToCart(product)}
              className="p-3 rounded-md bg-indigo-500 text-white"
            />
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
