import { Card, Container, Button } from "react-bootstrap";
import { getUserIDByUserCookie } from "../DAL/api";
import { useEffect, useState, useCallback } from "react";
import { getCookie } from "./Cart";

function UserInfo() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataCallback = useCallback(getData, []);

  async function getData() {
    setUser(await getUserIDByUserCookie(getCookie("id")));
    setLoading(false);
  }

  useEffect(() => {
    getDataCallback();
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
              <Button variant="primary">Edit</Button>
            </Card.Body>
          </Card>
        </Container>
      )}
    </div>
  );
}
export default UserInfo;
