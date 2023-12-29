import "./App.css";
//Dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
//Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout.jsx";
import Loader from "./components/Loader/Loader.jsx";
import Cart from "./components/Cart/Cart.jsx";
// Contexts
import CartProvider from "./context/CartProvider.jsx";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <BrowserRouter>
      {loading && <Loader />}
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer loader={setLoading} />} />
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer loader={setLoading} />}
          />
          <Route
            path="/item/:itemId"
            element={<ItemDetailContainer loader={setLoading} />}
          />
          <Route path="checkout" element={<Checkout loader={setLoading} />} />
          <Route path="cart" element={<Cart loader={setLoading} />} />
          <Route path="*" element={<h2>404 NOT FOUND</h2>} />
        </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
