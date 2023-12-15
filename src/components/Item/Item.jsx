import { Link } from "react-router-dom";

const Item = ({ id, name, image }) => {
  return (
    <article className="CardItem">
      <picture>
        <img src={image} className="ItemImg" />
      </picture>
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <footer className="ItemFooter">
        <Link to={`/item/${id}`} className="Option">
          View Details
        </Link>
      </footer>
    </article>
  );
};

export default Item;
