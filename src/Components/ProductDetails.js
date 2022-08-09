import { Container, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { getProductById } from "../DAL/api";
import { getCategoriesById } from "../DAL/api";

function ProductDetails(props) {
  const [product, setProduct] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData(id) {
      setProduct(await getProductById(id));
      setCurrentCategory(await getCategoriesById(id));
      setLoading(false);
    }
    getData(props.id);
  }, []);
  return (
    <div>
      <Navbar></Navbar>
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
                          src={product[0].image1}
                          className="d-block w-100"
                          alt={product[0].name}
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={product[0].image2}
                          className="d-block w-100"
                          alt={product[0].name}
                        />
                      </div>
                      <div className="carousel-item">
                        <img
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
                        </ul>
                      </li>
                    </ul>
                    <div className="card-body">
                      <p style={{ marginTop: "13px" }}>
                        <button
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          +
                        </button>
                        <span
                          style={{ alignItems: "center", margin: "0 10px" }}
                        >
                          X
                        </span>
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          style={{ marginRight: "10px" }}
                        >
                          -
                        </button>
                        Quantity: ({product[0].unitInStock} pieces/Kg in stock)
                      </p>
                      <button type="button" className="btn btn-secondary">
                        Add to cart{" "}
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"
                          alt="cart"
                          style={{ height: "50px", width: "50px" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
      )}
      <Footer></Footer>
    </div>
  );
}

export default ProductDetails;
