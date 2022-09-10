import { Card, Container, Button } from "react-bootstrap";
import { getUsersById } from "../DAL/api";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

function UserInfo() {
  const params = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  const getDataCallback = useCallback(getData, []);

  async function getData(id) {
    setUser(await getUsersById(id));
    setLoading(false);
  }

  useEffect(() => {
    getDataCallback(parseInt(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div id="userInfo">
      {loading ? (
        "Loading"
      ) : (
        <Container id="categoriesContainer">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Hello {user[0].name}</Card.Title>
              <Card.Text>
                Age: {user[0].age}
                <br />
                Username: {user[0].username}
                <br />
                Email: {user[0].email}
                <br />
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Container>
      )}
    </div>
  );
}
export default UserInfo;
