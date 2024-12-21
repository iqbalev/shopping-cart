import { useOutletContext, Link } from "react-router-dom";

function CartPage() {
  const { cart, quantities, decreaseQuantity, increaseQuantity } =
    useOutletContext();

  const totalPrice = cart
    .reduce((sum, item) => {
      const productQuantity = quantities[item.id];
      return sum + productQuantity * item.price;
    }, 0)
    .toFixed(2);

  return cart.length === 0 ? (
    <section className="grid place-content-center h-screen">
      <p>You haven't put anything into the cart yet...</p>
    </section>
  ) : (
    <div className="grid p-4 gap-4 sm:grid-cols-[3fr_1fr]">
      <section className="flex flex-col justify-center gap-12 items-center p-4 border rounded-sm">
        {cart.map((product) => (
          <article
            className="grid grid-cols-4 place-items-center"
            key={product.id}
          >
            <img src={product.image} alt="product-img" className="w-3/6" />
            <p className="text-center">{product.title}</p>
            <p>${product.price}</p>
            <div className="flex justify-center items-center gap-2">
              <button
                type="button"
                onClick={() => decreaseQuantity(product.id)}
              >
                -
              </button>
              <p>{quantities[product.id]}</p>
              <button
                type="button"
                onClick={() => increaseQuantity(product.id)}
              >
                +
              </button>
            </div>
          </article>
        ))}
      </section>
      <section className="flex flex-col p-2 gap-2 sm:py-0">
        <div className="flex justify-between">
          <p className="font-bold">Total</p>
          <p className="font-bold">${totalPrice}</p>
        </div>
        <Link to="" className="bg-neutral-800 py-2 px-4 text-center text-white">
          Checkout
        </Link>
      </section>
    </div>
  );
}

export default CartPage;
