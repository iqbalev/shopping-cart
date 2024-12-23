import { useOutletContext } from "react-router-dom";
import InfoMessage from "../components/InfoMessage";
import CartItems from "../components/CartItems";
import Checkout from "../components/Checkout";
import ToastMessage from "../components/ToastMessage";

function CartPage() {
  const { cart, quantities, decreaseQuantity, increaseQuantity, toastMessage } =
    useOutletContext();

  const totalPrice = cart
    .reduce((sum, item) => {
      const productQuantity = quantities[item.id];
      return sum + productQuantity * item.price;
    }, 0)
    .toFixed(2);

  return cart.length === 0 ? (
    <section className="flex flex-col gap-2 justify-center items-center h-screen p-4">
      <InfoMessage
        message={"You haven't put anything into the cart yet..."}
        link={"/shop"}
        linkText={"Shop Now"}
      />
    </section>
  ) : (
    <div className="grid p-4 gap-4 sm:grid-cols-[3fr_1fr] relative">
      {toastMessage && <ToastMessage message={toastMessage} />}
      <section className="flex flex-col justify-center gap-12 items-center p-4 border rounded-sm">
        {cart.map((product) => (
          <CartItems
            key={product.id}
            product={product}
            quantities={quantities}
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
          />
        ))}
      </section>
      <section className="flex flex-col p-2 gap-2 sm:py-0">
        <Checkout totalPrice={totalPrice} />
      </section>
    </div>
  );
}

export default CartPage;
