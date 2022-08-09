import Navbar from "./Navbar";
import Footer from "./Footer";
import { Card, Button } from "react-bootstrap";
import { getOrderDetailsByOrderId, getProducts } from "../DAL/api";
import { getOrdersById } from "../DAL/api";
import { useEffect, useState } from "react";
import Login from "./Login";

function Cart({ ids }) {
  const [orders, setOrders] = useState({});
  const [orderDetails, setOrderDetails] = useState([]);
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(
    () => async () => {
      const orders = await getOrdersById(ids);
      setOrders({ ...orders });
      setOrderDetails(await getOrderDetailsByOrderId(orders[0].orderID));
      setProducts(await getProducts());
      setLoading(false);
    },
    []
  );

  const createCart = (product) => {
    const Product = products.find(
      (element) => element.id === product.product_id
    );
    return (
      <Card style={{ width: "fit-content" }}>
        <Card.Img
          variant="top"
          src={Product.image1}
          alt={Product.name}
          className="productCategoryImg"
        />
        <Card.Body>
          <Card.Title>{Product.name}</Card.Title>
          <Card.Text>Price: {product.unitPrice}$</Card.Text>
          <input
            type="number"
            className="quantityProduct"
            defaultValue={product.quantity}
          ></input>
          <Button variant="primary">Delete</Button>
        </Card.Body>
      </Card>
    );
  };

  /* console.log(orderDetails); */
  return (
    <div>
      <Navbar></Navbar>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <h1>Cart</h1>
          {orderDetails.map((product) => createCart(product))}
        </div>
      )}
      <Footer></Footer>
    </div>
  );
}

export default Cart;
