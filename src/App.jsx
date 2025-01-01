import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import fetchAPI from "./services/fetchAPI";
import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    async function getProducts() {
      setIsLoading(true);
      const data = await fetchAPI();
      setProducts(data);
      setIsLoading(false);
    }
    getProducts();
  }, []);

  function addToCart(product) {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart((prevCart) => [...prevCart, product]);
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: 1,
      }));
      showToastMessage(`Added to cart.`);
    } else {
      increaseQuantity(product.id);
      showToastMessage(`Added to cart.`);
    }
  }

  function decreaseQuantity(product) {
    setQuantities((prevQuantities) => {
      const decreasedQuantities = {
        ...prevQuantities,
        [product]: prevQuantities[product] - 1,
      };
      if (decreasedQuantities[product] === 0) {
        removeFromCart(product);
      }
      return decreasedQuantities;
    });
  }

  function increaseQuantity(product) {
    setQuantities((prevQuantities) => {
      const increasedQuantities = {
        ...prevQuantities,
        [product]: prevQuantities[product] + 1,
      };
      return increasedQuantities;
    });
  }

  function removeFromCart(product) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product));
    showToastMessage(`Removed from cart.`);
  }

  useEffect(() => {
    if (toastMessage) {
      const toastMessageTimer = setTimeout(() => {
        setToastMessage("");
      }, 2000);
      return () => clearTimeout(toastMessageTimer);
    }
  }, [toastMessage]);

  function showToastMessage(message) {
    setToastMessage(message);
  }

  return (
    <>
      <Header quantities={quantities} />
      <main>
        <Outlet
          context={{
            isLoading,
            products,
            cart,
            quantities,
            addToCart,
            removeFromCart,
            decreaseQuantity,
            increaseQuantity,
            toastMessage,
          }}
        />
      </main>
    </>
  );
}

export default App;
