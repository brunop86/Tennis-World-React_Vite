import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const cartContext = useContext(CartContext);

  if (cartContext.counter > 0) {
    return (
      <>
        <ul id="items" className="list-group my-4 mx-5">
          {cartContext.cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </ul>
        <div id="total">
          <hr className="my-4 mx-5" />
          <div className="d-flex justify-content-between mb-4 mx-5">
            <h5 className="text-secondary">Total</h5>
            <h5> ${cartContext.total}</h5>
          </div>
          <Link to="/checkout">
            <button
              id="comprar"
              className="btn btn-primary w-25 py-2 mx-5"
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
            >
              <i className="bi bi-cart-check-fill me-1"></i> View Cart &
              Checkout
            </button>
          </Link>
        </div>
      </>
    );
  } else {
    return (
      <ul id="items" className="list-group">
        <p className="text-center fs-3">There are no items in the cart.</p>
      </ul>
    );
  }
};

export default Cart;
