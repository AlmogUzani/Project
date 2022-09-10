import { Card, Button } from "react-bootstrap";
import { getProductsByCategory } from "../DAL/api";
import { getCategoriesById } from "../DAL/api";
import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";

function Category() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [loading, setLoading] = useState(true);

  const getDataCallback = useCallback(getData, []);

  async function getData(id) {
    setProducts(await getProductsByCategory(id));
    setCurrentCategory(await getCategoriesById(id));
    setLoading(false);
  }

  useEffect(() => {
    getDataCallback(parseInt(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(products);

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
                  <Link to={`/products/${product.productID}`}>
                    More details
                  </Link>
                </Card.Text>
                <input
                  type="number"
                  className="quantityProduct"
                  placeholder="0"
                  min="0"
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

export default Category;
