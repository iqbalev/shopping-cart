import { useOutletContext } from "react-router-dom";

function CartPage() {
  const { cart, quantities, decreaseQuantity, increaseQuantity } =
    useOutletContext();

  return cart.length === 0 ? (
    <section className="grid place-content-center h-screen">
      <p>You haven't put anything into the cart yet...</p>
    </section>
  ) : (
    <section className="flex flex-col justify-center gap-4 items-center p-4">
      {cart.map((product) => (
        <article
          className="grid grid-cols-4 place-items-center w-3/4"
          key={product.id}
        >
          <img src={product.image} alt="product-img" className="w-1/5" />
          <p className="text-center">{product.title}</p>
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
      ))}
    </section>
  );
}

export default CartPage;
