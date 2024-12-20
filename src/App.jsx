import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import fetchAPI from "./services/fetchAPI";
import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

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
      console.log("Product added to cart.");
    } else {
      console.log("Product is already in cart.");
    }
  }

  function decreaseQuantity(product) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: prevQuantities[product] - 1,
    }));
    console.log("Quantity decreased");
  }

  function increaseQuantity(product) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: prevQuantities[product] + 1,
    }));
    console.log("Quantity increased.");
  }

  return (
    <>
      <Header />
      <main>
        <Outlet
          context={{
            isLoading,
            products,
            cart,
            quantities,
            addToCart,
            decreaseQuantity,
            increaseQuantity,
          }}
        />
      </main>
    </>
  );
}

export default App;
