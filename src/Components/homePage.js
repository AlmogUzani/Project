import { Container, Row, Col } from "react-bootstrap";
import { getCategories } from "../DAL/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      {loading ? (
        "Loading"
      ) : (
        <Container id="categoriesContainer">
          <h1>Categories</h1>
          <div className="row">
            {categories.map((category) => (
              <div className="column">
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
      )}
    </div>
  );
}
export default Homepage;
