import { Card, Button } from "react-bootstrap";

function Product(params) {
  const { product, hideButton } = params;
  return (
    <Card style={{ width: "fit-content" }}>
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="productCategoryImg"
      />
      <Card.Body>
        <Card.Title>
          {product.name}
          <p>{product.quantity}</p>
        </Card.Title>
        <Card.Text>Price: {product.unitPrice}$</Card.Text>
        <input
          type="number"
          className="quantityProduct"
          defaultValue={product.quantity}
        ></input>
      </Card.Body>
    </Card>
  );
}

export default Product;
