import { Container } from "react-bootstrap";
import { getCategories, getBestSellers } from "../DAL/api";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  const [categories, setCategories] = useState([]);
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataCallback = useCallback(getData, []);

  async function getData() {
    setProducts(await getBestSellers());
    setCategories(await getCategories());
    setLoading(false);
  }

  useEffect(() => {
    getDataCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="homepage">
      {loading ? (
        "Loading"
      ) : (
        <div>
          <h2 className="homePageTitle">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <p className="textTitle">Welcome to MamiMevi !</p>
            <p className="textTitle">Inspired by Rami Levi </p>
            <br />
            <br />
            <p className="textTitle">Buy online the products you need,</p>
            <p className="textTitle">FAST & EASY & SAFE</p>
            <p className="textTitle">(Trust me)</p>
            <br />
          </h2>
          <Container id="categoriesContainer">
            <h1>Categories</h1>
            <div className="row">
              {categories.map((category, index) => (
                <div className="column" key={index}>
                  <Link to={`/category/${category.categoryID}`}>
                    <h3>{category.categoryName}</h3>
                    <img
                      src={category.image}
                      className="categoryImg"
                      alt={category.categoryName}
                    ></img>
                  </Link>
                </div>
              ))}
            </div>
          </Container>
          <Container id="bestSeller">
            <h1>Best Sellers</h1>
            {
              <div className="row">
                {product.map((prod, index) => (
                  <div className="column" key={index}>
                    <Link to={`/products/${prod.productID}`}>
                      <h3>{prod.name}</h3>
                      <img
                        id="bestSellerImg"
                        src={prod.image1}
                        className="categoryImg"
                        alt={prod.name}
                      ></img>
                      <h5>Sold: {prod.quantityy}</h5>
                    </Link>
                  </div>
                ))}
              </div>
            }
          </Container>
          <p>
            <br />
            <br />
            <br />
            <br />
            This is the best site ever trust me!
          </p>
        </div>
      )}
    </div>
  );
}
export default Homepage;
