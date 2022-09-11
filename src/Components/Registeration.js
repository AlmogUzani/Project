import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { formData, inputsHandler, validateForm } from "./FormData.js";
import { useNavigate } from "react-router-dom";
import InputText from "./InputText.js";
import { signup } from "../DAL/api";

function Signup() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    username: { ...formData.username },
    password: { ...formData.password },
    confirmPassword: { ...formData.confirmPassword },
    first_name: { ...formData.first_name },
    last_name: { ...formData.last_name },
    email: { ...formData.email },
    phoneNumber: { ...formData.phoneNumber },
    address: { ...formData.address },
    age: { ...formData.age },
  });

  const sendDetails = async (e) => {
    e.preventDefault();
    if (!validateForm(setSignupData, signupData)) {
      const customer = {
        username: signupData.username.value,
        password: signupData.password.value,
        name: signupData.first_name.value + " " + signupData.last_name.value,
        email: signupData.email.value,
        phoneNumber: signupData.phoneNumber.value,
        address: signupData.address.value,
        age: signupData.age.value,
      };
      await signup(customer);
      navigate("/login");
    }
  };

  return (
    <div>
      <Container id="signupPage">
        <Container id="signupContainer">
          <Form className="signupForm">
            <h1>Signup</h1>
            <div className="border"></div>
            <InputText
              setData={setSignupData}
              data={signupData}
              inputsHandler={inputsHandler}
            ></InputText>
            <Button
              onClick={sendDetails}
              className="submit"
              variant="primary"
              type="submit"
            >
              Signup
            </Button>
          </Form>
        </Container>
      </Container>
    </div>
  );
}

export default Signup;
