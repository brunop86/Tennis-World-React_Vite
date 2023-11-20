import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="input-group" style={{ maxWidth: "120px" }}>
        <button className="btn btn-secondary" type="button" onClick={decrement}>
          -
        </button>
        <input
          type="text"
          className="form-control text-center"
          value={quantity}
          disabled
        />
        <button className="btn btn-secondary" type="button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="btn btn-primary mt-3"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ItemCount;
