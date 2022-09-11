import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState, useCallback } from "react";
import { getProductById as getProductsById } from "../DAL/api";
import { getCategoriesById } from "../DAL/api";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const param = useParams();
  const [product, setProduct] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataCallback = useCallback(getData, []);

  async function getData(id) {
    const currProduct = await getProductsById(id);
    setProduct(currProduct);
    setCurrentCategory(await getCategoriesById(currProduct[0].categoryID));
    setLoading(false);
  }

  useEffect(() => {
    getDataCallback(parseInt(param.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function createURL(category) {
    return "http://localhost:3000/category/" + category.categoryID;
  }

  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <main>
          <Container style={{ display: "flex" }}>
            <Row>
              <Col id="card" sm={6}>
                <div className="card text-bg-light mb-3" id="fullCard">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="false"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          id="productImg"
                          src={product[0].image1}
                          className="d-block w-100"
                          alt={product[0].name}
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          id="productImg"
                          src={product[0].image2}
                          className="d-block w-100"
                          alt={product[0].name}
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          id="productImg"
                          src={product[0].image3}
                          className="d-block w-100"
                          alt={product[0].name}
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      />
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </Col>
              <Col sm={6}>
                <div className="card text-bg-light" id="fullCard">
                  <div className="card" id="fullCard">
                    <div className="card-body">
                      <h5 className="card-title">{product[0].name}</h5>
                      <p className="card-text">{product[0].description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <ul>
                          <li>Price: {product[0].price}$</li>
                          <li>Size: {product[0].size}</li>
                          <li>Shape: {product[0].shape}</li>
                          <li>Color: {product[0].color}</li>
                          <li>Category: {currentCategory[0].categoryName}</li>
                          <li>{product[0].unitInStock} In stock.</li>
                          <br />
                          <a href={createURL(currentCategory[0])}>
                            <h6>Go to item Category page</h6>
                          </a>
                        </ul>
                      </li>
                    </ul>
                    <div className="card-body"></div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      )}
    </div>
  );
}

export default ProductDetails;
