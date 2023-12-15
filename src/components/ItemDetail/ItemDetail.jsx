import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, image, price, description, stock }) => {
  const [quantity, setQuantity] = useState(1);
  const cartContext = useContext(CartContext);
  const item = { id, name, price, description };

  return (
    <>
      <div className="card">
        <div className="row g-0 py-4">
          <div className="col-md-5 px-3">
            <div className="d-flex flex-column justify-content-center">
              <img src={image} className="card-img-top" alt="product" />
            </div>
          </div>
          <div className="col-md-7">
            <h2 className="pb-2">{name}</h2>
            <p className="text-secondary pb-3">{description}</p>
            <h2 className="pb-2">${price}</h2>
            <div className="text-secondary">
              <small>Quantity:</small>
              <ItemCount count={quantity} setCount={setQuantity} stock={10} />
            </div>
            <div className="input">
              <a
                onClick={() => cartContext.addItem(item, quantity)}
                className="btn btn-primary mt-2"
              >
                <i className="bi bi-cart-plus me-2"></i>Add to cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
