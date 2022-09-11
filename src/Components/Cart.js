import { useEffect, useState, useCallback } from "react";
import { getCartByUserCookie, updateCart } from "../DAL/api.js";
import { Card, Button, Stack, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return JSON.parse(c.substring(name.length, c.length));
    }
  }
  return "";
}

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lgShow, setLgShow] = useState(false);

  const getDataCallback = useCallback(getData, []);

  async function getData() {
    setCart(await getCartByUserCookie(getCookie("id")));
    setLoading(false);
  }

  useEffect(() => {
    getDataCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const increaseAmount = async (product) => {
    const userID = getCookie("id");
    await updateCart(userID, product.productID, product.quantity + 1, true);
    setCart(await getCartByUserCookie(getCookie("id")));
  };

  const decreaseAmount = async (product) => {
    const userID = getCookie("id");
    await updateCart(userID, product.productID, product.quantity - 1, false);
    setCart(await getCartByUserCookie(getCookie("id")));
  };

  const deleteFromCart = async (product) => {
    const userID = getCookie("id");
    await updateCart(userID, product.productID, (product.quantity = 0), false);
    setCart(await getCartByUserCookie(getCookie("id")));
  };

  const total = () => {
    let total = 0;
    for (let prod of cart) {
      total += prod.quantity * prod.unitPrice;
    }
    return total;
  };

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <h1>Cart</h1>
          {cart.map(
            (product) =>
              product.quantity > 0 && (
                <Card key={product.productID} style={{ width: "fit-content" }}>
                  <Card.Img
                    variant="top"
                    src={product.image1}
                    alt={product.name}
                    className="productCategoryImg"
                  />
                  <Card.Body>
                    <Link to={`/products/${product.productID}`}>
                      <Card.Title>{product.name}</Card.Title>
                    </Link>
                    <Card.Text>Price: {product.unitPrice}$</Card.Text>
                    <Button
                      variant="success"
                      className="changeAmount"
                      onClick={() => {
                        decreaseAmount(product);
                      }}
                    >
                      -
                    </Button>
                    <input
                      type="number"
                      className="quantityProduct"
                      readOnly="readonly"
                      value={product.quantity}
                    ></input>
                    <Button
                      variant="success"
                      className="changeAmount"
                      onClick={() => {
                        increaseAmount(product);
                      }}
                    >
                      +
                    </Button>
                    <Button
                      onClick={() => {
                        deleteFromCart(product);
                      }}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              )
          )}
          <Stack gap={2} className="col-md-5 mx-auto">
            <Button variant="outline-dark" disabled>
              Total: {total()}$
            </Button>
            <Button variant="info" onClick={() => setLgShow(true)}>
              Checkout
            </Button>
          </Stack>
          <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-lg">
                Total summary
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {cart.map(
                (product) =>
                  product.quantity > 0 && (
                    <div key={(product.product, product.quantity)}>
                      {product.quantity} {product.name}s, ({" "}
                      {product.quantity * product.unitPrice}$)
                    </div>
                  )
              )}
              <br></br>
              <h5>
                Total: {total()}$ <Button>Confirm</Button>
              </h5>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </div>
  );
}

export default Cart;
