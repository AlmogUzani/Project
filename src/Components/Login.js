import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from './Navbar';
import Footer from './Footer';

function Login() {
  return (
    <div className='loginForm'>
        <Navbar></Navbar>
        <Form>
            <span>Login</span>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Log in
            </Button>
        </Form>
        <Footer></Footer>
    </div>
  );
}

export default Login;