import { useContext, useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import Message from "../Message/Message";
import { db } from "../../firebase/client";

const Checkout = ({ loader }) => {
  const cartContext = useContext(CartContext);
  const [message, setMessage] = useState({
    type: "success",
    content: "",
  });

  const [data, setData] = useState({});

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendOrder = (event) => {
    event.preventDefault();
    loader(true);
    createOrder();
  };

  const createOrder = async () => {
    const order = { data, items: cartContext.cart, total: cartContext.total };
    const query = collection(db, "orders");
    await addDoc(query, order)
      .then(({ id }) => {
        setMessage({
          type: "success",
          content: `Your order was uploaded successfully (Order id: ${id}).`,
        });
        cartContext.clear();
      })
      .catch((error) => {
        setMessage({
          type: "danger",
          content: "It looks something went wrong, please try again.",
        });
      });
    loader(false);
  };

  useEffect(() => {
    if (!cartContext.cart.length && message.content == "") {
      setMessage({
        type: "warning",
        content: "It looks there is no  products in your cart.",
      });
    }
  }, [cartContext.cart]);

  return (
    <main className="album">
      <div className="container-xxl pt-4 pb-3">
        {!cartContext.cart.length ? (
          <Message type={message.type} content={message.content} />
        ) : (
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-white">Your Cart</span>
                <span className="badge badge-secondary badge-pill"></span>
              </h4>
              <ul className="list-group mb-3">
                {cartContext.cart.map((item) => (
                  <li
                    key={item.id}
                    className={`list-group-item d-flex justify-content-between lh-condensed`}
                  >
                    <div>
                      <h6 className={`my-0`}>
                        <span className={`badge bg-primary me-2`}>
                          {item.quantity}
                        </span>
                        {item.name}
                      </h6>
                      <small>{item.description}</small>
                    </div>
                    <span>${item.price}</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total</span>
                  <strong>${cartContext.total}</strong>
                </li>
              </ul>
            </div>

            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing Address</h4>
              <form className="needs-validation" onSubmit={sendOrder}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">First name</label>
                    <input
                      name="first_name"
                      type="text"
                      className="form-control"
                      id="firstName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">Last name</label>
                    <input
                      name="last_name"
                      type="text"
                      className="form-control"
                      id="lastName"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">Country</label>
                    <select
                      name="country"
                      className="form-select d-block w-100"
                      id="country"
                      onChange={handleChange}
                    >
                      <option>Choose...</option>
                      <option>Argentina</option>
                      <option>United States</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">State</label>
                    <select
                      name="state"
                      className="form-select d-block w-100"
                      id="state"
                      onChange={handleChange}
                    >
                      <option>Choose...</option>
                      <option>Tucuman</option>
                      <option>New York</option>
                    </select>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">Zip</label>
                    <input
                      name="zip_code"
                      type="text"
                      className="form-control"
                      id="zip"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <hr className="mb-4" />
                <button
                  className="btn btn-primary btn-lg btn-block"
                  type="submit"
                >
                  <i
                    className="bi bi-bag-fill"
                    style={{ marginRight: "4px" }}
                  ></i>{" "}
                  Purchase
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Checkout;
