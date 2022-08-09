import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";
import { getCategories } from "../DAL/api";
import { useEffect, useState } from "react";

function Homepage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setCategories(await getCategories());
      setLoading(false);
    }
    getData();
  }, []);
  return (
    <div id="homepage">
      <Navbar></Navbar>
      {loading ? (
        "Loading"
      ) : (
        <Container id="categoriesContainer">
          <Row>
            <h1>Categories</h1>
          </Row>
          <Row className="categoryRow">
            {categories.map((category) => (
              <Col key={category.id} className="category">
                <h3>{category.categoryName}</h3>
                <img
                  src={category.image}
                  className="categoryImg"
                  alt={category.categoryName}
                ></img>
              </Col>
            ))}
          </Row>
        </Container>
      )}
      <Footer></Footer>
    </div>
  );
}
export default Homepage;
