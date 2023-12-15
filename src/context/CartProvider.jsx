import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const cartStorage = localStorage.getItem("cart");
  const counterStorage = parseInt(localStorage.getItem("counter"));
  const totalStorage = parseInt(localStorage.getItem("total"));
  const [cart, setCart] = useState(cartStorage ? JSON.parse(cartStorage) : []);
  const [counter, setCounter] = useState(counterStorage ? counterStorage : 0);
  const [total, setTotal] = useState(totalStorage ? totalStorage : 0);

  const isInCart = (item) => {
    return cart.find((product) => product.id === item.id);
  };

  const addItem = (item, quantity) => {
    const cartItem = isInCart(item);

    if (item.id == 777) {
      if (cartItem && cartItem.id == 777) {
        return;
      }

      setCart([...cart, { ...item, quantity }]);
      setTotal((total) => total - item.price);
    } else {
      cartItem
        ? (cartItem.quantity += quantity)
        : setCart([...cart, { ...item, quantity }]);
      setTotal((total) => total + item.price * quantity);
      setCounter((counter) => counter + quantity);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeItem = (item) => {
    const cartItem = isInCart(item);

    if (item.id == 777) {
      setTotal((total) => total + item.price);
      setCart(cart.filter((product) => product.id !== item.id));
    } else {
      if (cartItem && cartItem.quantity <= 1) {
        setCart(cart.filter((product) => product.id !== item.id));
      } else {
        cartItem.quantity--;
      }
      setTotal((total) => total - item.price);
      counter > 0 && setCounter((counter) => counter - 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const clear = () => {
    setTotal(0);
    setCart([]);
    counter !== 0 && setCounter(0);
    localStorage.clear();
  };

  useEffect(() => {
    localStorage.setItem("counter", counter);
    counter < 1 && clear();
  }, [counter]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("total", total);
  }, [total]);

  return (
    <CartContext.Provider
      value={{ cart, counter, total, addItem, removeItem, clear }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
