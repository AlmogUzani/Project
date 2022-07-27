import {useState} from 'react'
import {Form, Button, Row, Col, InputGroup} from 'react-bootstrap'
import {FaUserAlt, FaVoicemail, FaUserCircle, FaUnlockAlt} from 'react-icons/fa'
import Validation from './validation'
import Navbar from './Navbar';
import Footer from './Footer';


function Registration() {
    const [studentForm, setStudenForm] = useState({
      firstname: {
        value:"",
        validation: {
          required: true,
          minimumLength: 2
        },
        errors: []
      },
      lastname: {
        value:"",
        validation: {
          required: true,
          minimumLength: 2
        },
        errors: []
      },
      username: {
        value:"",
        validation: {
          required: true,
          minimumLength: 2
        },
        errors: []
      },
      email: {
        value:"",
        validation: {
          required: true,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        },
        errors: []
      },
      password: {
        value:"",
        validation: {
          required: true,
          minimumLength: 8
        },
        errors: []
      },
      confirmPassword: {
        value:"",
        validation: {
          required: true,
          minimumLength: 8
        },
        errors: []
      }
    })

    const validationHandler = (e) => {
      const name = e.target.name
      const value = e.target.value
      const current = studentForm[name]
      current.errors = Validation(name, value, current.validation)
      setStudenForm({...studentForm})
    }
    
    const handleSubmit = (event) => {
      event.preventDefault();
      for (const obj in studentForm) {
        const current = studentForm[obj]
        current.errors = Validation(obj, studentForm[obj].value, current.validation)
        setStudenForm({...studentForm})
      }
    };
  
    return (
      <div>
        <Navbar></Navbar>
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3" id="Form-header">
            <h1>Registration</h1>
          </Row>
          <Row className="mb-3">
            {<Form.Group as={Col} md="5" controlId="validationCustomFirstname">
              <Form.Label>First Name</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend"><FaUserAlt /></InputGroup.Text>
                <Form.Control
                  name="firstname"
                  defaultValue={studentForm.firstname.value}
                  type="text"
                  placeholder="Enter Firstname"
                  isInvalid={studentForm.firstname.errors.length}
                  onBlur={validationHandler}
                />
                {studentForm.firstname.errors.map((error, index) => (
                  <Form.Control.Feedback type="invalid" key={index}>
                    {error.value}
                  </Form.Control.Feedback>
                ))}
              </InputGroup>
            </Form.Group>}
            {<Form.Group as={Col} md="5" controlId="validationCustomLastname">
              <Form.Label>Last Name</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend"><FaUserAlt /></InputGroup.Text>
                <Form.Control
                  name="lastname"
                  defaultValue={studentForm.lastname.value}
                  type="text"
                  placeholder="Enter Lastname"
                  isInvalid={studentForm.lastname.errors.length}
                  onBlur={validationHandler}
                />
                {studentForm.lastname.errors.map((error, index) => (
                  <Form.Control.Feedback type="invalid" key={index}>
                    {error.value}
                  </Form.Control.Feedback>
                ))}
              </InputGroup>
            </Form.Group>}
          </Row>
          <Row className="mb-3">
            {<Form.Group as={Col} md="5" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend"><FaUserCircle /></InputGroup.Text>
                <Form.Control
                  name="username"
                  defaultValue={studentForm.username.value}
                  type="text"
                  placeholder="Enter Username"
                  isInvalid={studentForm.username.errors.length}
                  onBlur={validationHandler}
                />
                {studentForm.username.errors.map((error, index) => (
                  <Form.Control.Feedback type="invalid" key={index}>
                    {error.value}
                  </Form.Control.Feedback>
                ))}
              </InputGroup>
            </Form.Group>}
            <Form.Group as={Col} md="5" controlId="validationCustomEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend"><FaVoicemail /></InputGroup.Text>
                <Form.Control
                  name="email"
                  defaultValue={studentForm.email.value}
                  type="text"
                  placeholder="Enter Email"
                  isInvalid={studentForm.email.errors.length}
                  onBlur={validationHandler}
                />
                {studentForm.email.errors.map((error, index) => (
                  <Form.Control.Feedback type="invalid" key={index}>
                    {error.value}
                  </Form.Control.Feedback>
                ))}
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-4">
          {<Form.Group as={Col} md="5" controlId="validationCustomPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend"><FaUnlockAlt /></InputGroup.Text>
                <Form.Control
                  name="password"
                  defaultValue={studentForm.password.value}
                  type="password"
                  placeholder="Enter password"
                  isInvalid={studentForm.password.errors.length}
                  onBlur={validationHandler}
                />
                {studentForm.password.errors.map((error, index) => (
                  <Form.Control.Feedback type="invalid" key={index}>
                    {error.value}
                  </Form.Control.Feedback>
                ))}
              </InputGroup>
            </Form.Group>}
            <Form.Group as={Col} md="5" controlId="validationCustomConfirmPassword">
              <Form.Label>Confirm password</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend"><FaUnlockAlt /></InputGroup.Text>
                <Form.Control
                  name="confirmPassword"
                  defaultValue={studentForm.confirmPassword.value}
                  type="passsword"
                  placeholder="Enter Password"
                  isInvalid={studentForm.confirmPassword.errors.length}
                  onBlur={validationHandler}
                />
                {studentForm.confirmPassword.errors.map((error, index) => (
                  <Form.Control.Feedback type="invalid" key={index}>
                    {error.value}
                  </Form.Control.Feedback>
                ))}
              </InputGroup>
            </Form.Group>
          </Row>
          <Row id="Form-footer">
          <Button type="submit">Submit</Button>
          </Row>
        </Form>
        <Footer></Footer>
      </div>
    );
  }
  
export default Registration