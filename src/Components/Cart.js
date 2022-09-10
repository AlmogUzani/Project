import { useEffect, useState, useCallback } from "react";
import { getCartByUserCookie } from "../DAL/api.js";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
/* import * as crypto from "crypto"; */

function getCookie(cname) {
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
/* const decrypt = (hash) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(hash.encrypted.iv, "hex")
  );

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.encrypted.content, "hex")),
    decipher.final(),
  ]);

  return decrpyted.toString();
}; */

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataCallback = useCallback(getData, []);

  async function getData() {
    setCart(await getCartByUserCookie(getCookie("id")));
    setLoading(false);
  }

  useEffect(() => {
    getDataCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <h1>Cart</h1>
          {cart.map((product) => (
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
                <input
                  type="number"
                  className="quantityProduct"
                  min="0"
                  placeholder={product.quantity}
                ></input>
                <Button variant="primary">Add to cart</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
