import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    mostrarLoader();
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

function mostrarLoader() {
  Swal.fire({
    title: "Loading",
    html: "Please wait...",
    timer: 1000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
    },
  });
}

export default ItemDetailContainer;
