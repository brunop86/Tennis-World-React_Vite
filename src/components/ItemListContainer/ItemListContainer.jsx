import { useEffect, useState } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/client";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ loader }) => {
  const { categoryId } = useParams();
  const [list, setList] = useState([]);

  const getItemsFS = async () => {
    const productsRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");
    const result = await getDocs(productsRef);
    const items = result.docs.map((item) => ({
      id: item.id,
      ...item.data(),
    }));
    setList(items);
    loader(false);
  };

  useEffect(() => {
    loader(true);
    getItemsFS();
  }, [categoryId]);

  return (
    <div>
      <ItemList list={list} />
    </div>
  );
};

export default ItemListContainer;
