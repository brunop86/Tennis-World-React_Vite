import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ list }) => {
  return (
    <>
      <div className="ListGroup">
        {list.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
