import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import fetchAPI from "./services/fetchAPI";
import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

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
    setCart((prevCart) => [...prevCart, product]);
  }

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ isLoading, products, cart, addToCart }} />
      </main>
    </>
  );
}

export default App;
