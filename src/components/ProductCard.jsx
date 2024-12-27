import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
const ProductCard = (props) => {
  const { addItem } = useCart();
  //   console.log(props);
  const { id, title, description, image, category, price, item } = props;
  return (
    <>
      <div className="col-md-4">
        <Card className="product-card" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <button
              className="btn btn-primary mx-3"
              onClick={() => addItem(item)}
            >
              Add to cart
            </button>
            <NavLink to={`/productinfo/${id}`}>
              <Button variant="primary">Know more</Button>
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ProductCard;
