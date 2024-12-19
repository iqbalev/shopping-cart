import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import fetchAPI from "./services/fetchAPI";
import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      setIsLoading(true);
      const data = await fetchAPI();
      setProducts(data);
      setIsLoading(false);
    }
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet context={{ isLoading, products }} />
      </main>
    </>
  );
}

export default App;
