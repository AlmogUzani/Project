import { Card, Button } from "react-bootstrap";
import {
  getProductsByCategory,
  getCategoriesById,
  getCartByUserCookie,
  addTOCart,
} from "../DAL/api";
import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { getCookie } from "./Cart";

function Category() {
  const params = useParams();
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [loading, setLoading] = useState(true);

  const getDataCallback = useCallback(getData, []);

  async function getData(id) {
    setCart(await getCartByUserCookie(getCookie("id")));
    setProducts(await getProductsByCategory(id));
    setCurrentCategory(await getCategoriesById(id));
    setLoading(false);
  }

  useEffect(() => {
    getDataCallback(parseInt(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userID = getCookie("id");

  const increaseAmount = async (product) => {
    let element = Number(document.getElementById(product.productID).value);
    element += 1;
    document.getElementById(product.productID).value = element;
  };

  const decreaseAmount = async (product) => {
    let element = Number(document.getElementById(product.productID).value);
    element -= 1;
    document.getElementById(product.productID).value = element;
  };

  const addToCart = async (product) => {
    if (
      product.unitInStock >=
      Number(document.getElementById(product.productID).value)
    ) {
      await addTOCart(
        userID,
        product,
        Number(document.getElementById(product.productID).value)
      );
      setCart(await getCartByUserCookie(userID));
      alert("Added to cart");
      document.location.reload();
    } else {
      alert("cannot");
    }
  };
  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div style={{ display: "flex" }}>
          <h1>{currentCategory[0].categoryName}</h1>
          {products.map((product) => (
            <Card key={product.productID} style={{ width: "fit-content" }}>
              <Card.Img
                variant="top"
                src={product.image1}
                alt={product.name}
                className="productCategoryImg"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Price: {product.price}$<br />
                  {product.unitInStock} left.
                  <br />
                  <Link to={`/products/${product.productID}`}>
                    More details
                  </Link>
                </Card.Text>
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
                  id={product.productID}
                  type="number"
                  className="quantityProduct"
                  readOnly="readonly"
                  defaultValue="0"
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
                <Button onClick={() => addToCart(product)}>Add</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default Category;
