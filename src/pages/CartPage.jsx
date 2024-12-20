import { useOutletContext } from "react-router-dom";

function CartPage() {
  const { cart } = useOutletContext();

  return cart.length === 0 ? (
    <section className="grid place-content-center h-screen">
      <p>You haven't put anything into the cart yet...</p>
    </section>
  ) : (
    <section className="flex flex-col justify-center gap-4 items-center p-4">
      {cart.map((product) => (
        <article
          className="grid grid-cols-3 place-items-center w-3/4"
          key={product.id}
        >
          <img src={product.image} alt="product-img" className="w-1/5" />
          <p>{product.title}</p>
          <p>${product.price}</p>
        </article>
      ))}
    </section>
  );
}

export default CartPage;
