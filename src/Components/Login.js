import { useState } from "react";
import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { FaUserCircle, FaUnlockAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { checkLogin } from "../DAL/api";
import Validation from "./validation";

function Login() {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    username: {
      value: "",
      validation: {
        required: true,
        minimumLength: 2,
      },
      errors: [],
    },
    password: {
      value: "",
      validation: {
        required: true,
        minimumLength: 6,
      },
      errors: [],
    },
  });

  const validationHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const current = loginForm[name];
    current.value = value;
    current.errors = Validation(name, value, current.validation);
    setLoginForm({ ...loginForm });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let valid = true;
    for (const obj in loginForm) {
      const current = loginForm[obj];
      current.errors = Validation(
        obj,
        loginForm[obj].value,
        current.validation
      );
      if (current.errors.length > 0) {
        valid = false;
      }
      setLoginForm({ ...loginForm });
    }
    if (valid) {
      const ans = await checkLogin(
        loginForm.username.value,
        loginForm.password.value
      );
      if (ans?.err) {
        alert(ans.err);
      } else {
        navigate("/");
        document.location.reload();
      }
    }
  };

  return (
    <div>
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3" id="Form-header">
          <h1>Login</h1>
        </Row>

        <Row className="mb-3">
          {
            <Form.Group as={Col} md="5" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <FaUserCircle />
                </InputGroup.Text>
                <Form.Control
                  name="username"
                  defaultValue={loginForm.username.value}
                  type="text"
                  placeholder="Enter Username"
                  isInvalid={loginForm.username.errors.length}
                  onBlur={validationHandler}
                />
                {loginForm.username.errors.map((error, index) => (
                  <Form.Control.Feedback type="invalid" key={index}>
                    {error.value}
                  </Form.Control.Feedback>
                ))}
              </InputGroup>
            </Form.Group>
          }
        </Row>
        <Row className="mb-4">
          {
            <Form.Group as={Col} md="5" controlId="validationCustomPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">
                  <FaUnlockAlt />
                </InputGroup.Text>
                <Form.Control
                  name="password"
                  defaultValue={loginForm.password.value}
                  type="password"
                  placeholder="Enter password"
                  isInvalid={loginForm.password.errors.length}
                  onBlur={validationHandler}
                />
                {loginForm.password.errors.map((error, index) => (
                  <Form.Control.Feedback type="invalid" key={index}>
                    {error.value}
                  </Form.Control.Feedback>
                ))}
              </InputGroup>
            </Form.Group>
          }
        </Row>
        <Row id="Form-footer">
          <Button type="submit">Submit</Button>
        </Row>
      </Form>
    </div>
  );
}

export default Login;
