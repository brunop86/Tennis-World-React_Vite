import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/client";

const ItemDetailContainer = ({ loader }) => {
  const [item, setItem] = useState([]);
  const { itemId } = useParams();

  const getItemFS = async () => {
    const query = doc(db, "products", itemId);
    const result = await getDoc(query);
    setItem({ id: result.id, ...result.data() });
    loader(false);
  };

  useEffect(() => {
    loader(true);
    getItemFS();
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail key={item.id} {...item} />
    </div>
  );
};

export default ItemDetailContainer;
