import {useState} from 'react'
import {Form, Button, Row, Col, InputGroup, ButtonGroup} from 'react-bootstrap'
import {FaUserAlt, FaVoicemail, FaBuilding, FaPlaystation, FaMarsDouble} from 'react-icons/fa'
import Validation from './validation'


function Registration() {
    const [studentForm, setStudenForm] = useState({
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
      address: {
        value:"",
        validation: {
          required: true,
          minimumLength: 10
        },
        errors: []
      },
      course: {
        value:"",
        validation: {
          required: true,
        },
        errors: []
      },
      gender: {
        value:"",
        validation: {
          required: true,
        },
        errors: []
      },
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
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3" id="Form-header">
          <h1>Registration</h1>
        </Row>
        <Row className="mb-3">
          {<Form.Group as={Col} md="5" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend"><FaUserAlt /></InputGroup.Text>
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
          <Form.Group as={Col} md="5" controlId="validationCustomUsername">
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
          <Form.Group controlId="validationCustomUsername">
            <Form.Label>Address</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend2"><FaBuilding /></InputGroup.Text>
              <Form.Control
                as="textarea"
                name="address"
                defaultValue={studentForm.address.value}
                type="text"
                placeholder="Street, number, city, zip"
                isInvalid={studentForm.address.errors.length}
                onBlur={validationHandler}
              />
              {studentForm.address.errors.map((error, index) => (
                <Form.Control.Feedback type="invalid" key={index}>
                  {error.value}
                </Form.Control.Feedback>
              ))}
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-4">
            <Form.Group as={Col} md="5" controlId="validationCustomUsername">
            <Form.Label>Course</Form.Label>
                <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend2"><FaPlaystation /></InputGroup.Text>
                    <Form.Control  
                      name="course"
                      as="select" 
                      aria-label='Default select example' 
                      isInvalid={studentForm.course.errors.length}
                      onBlur={validationHandler} 
                      defaultValue=""
                    >
                        <option value='' hidden>Select Course..</option>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                    </Form.Control>
                    {studentForm.course.errors.map((error, index) => (
                      <Form.Control.Feedback type="invalid" key={index}>
                        {error.value}
                      </Form.Control.Feedback>
                    ))}
                </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="validationCustom01">
            <Form.Label>Gender</Form.Label>
                <InputGroup id="buttonGroup">
                    <InputGroup.Text><FaMarsDouble /></InputGroup.Text>
                    <ButtonGroup 
                        aria-label = "gender"
                        defaultValue={studentForm.gender.value}
                        onClick={validationHandler}
                        className = {studentForm.gender.errors.length? "is-invalid" : ""}
                        >
                          <Button type="button" name="gender" value="male" className='rounded'>Male</Button>
                          <Button type="button" name="gender" value="female" className='rounded'>Female</Button>
                          <Button type="button" name="gender" value="other" className='rounded'>Other</Button>
                    </ButtonGroup>
                    {studentForm.gender.errors.map((error, index) => (
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
    );
  }
  
export default Registration