import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import fetchAPI from "./services/fetchAPI";
import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});
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

  useEffect(() => {
    if (toastMessage) {
      const toastMessageTimer = setTimeout(() => {
        setToastMessage("");
      }, 2000);
      return () => clearTimeout(toastMessageTimer);
    }
  }, [toastMessage]);

  function showModal(image, title, price) {
    setModalContent({ image, title, price });
    setIsModalVisible(true);
  }

  function closeModal() {
    setIsModalVisible(false);
  }

  function showToastMessage(message) {
    setToastMessage(message);
  }

  function addToCart(product) {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      setCart((prevCart) => [...prevCart, product]);
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: 1,
      }));
      showModal(product.image, product.title, product.price);
    } else {
      increaseQuantity(product.id);
      showModal(product.image, product.title, product.price);
    }
  }

  function removeFromCart(product) {
    setQuantities((prevQuantities) => {
      const removedQuantities = { ...prevQuantities };
      delete removedQuantities[product];
      return removedQuantities;
    });
    setCart((prevCart) => prevCart.filter((item) => item.id !== product));
    showToastMessage(`Removed from cart.`);
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

  return (
    <>
      <Header quantities={quantities} />
      <main>
        <Outlet
          context={{
            isLoading,
            isModalVisible,
            products,
            cart,
            quantities,
            addToCart,
            removeFromCart,
            decreaseQuantity,
            increaseQuantity,
            modalContent,
            closeModal,
            toastMessage,
          }}
        />
      </main>
    </>
  );
}

export default App;
