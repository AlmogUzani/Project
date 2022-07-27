import Navbar from './Navbar';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

function Homepage() {
    return(
        <div id='homepage'>
            <Navbar></Navbar>
            <Container id='categoriesContainer'>
                <Row>
                    <h1>
                        Categories
                    </h1>
                </Row>
                <Row className='categoryRow'>
                    <Col className='category'>
                        <h3>Vegtables</h3>
                        <img src='/../images/categories/vegtables.jpg' className='categoryImg' alt='vetables'></img>
                    </Col>
                    <Col className='category'>
                        <h3>Fruits</h3>
                        <img src='/../images/categories/fruits.jpg' className='categoryImg' alt='vetables'></img>
                    </Col>
                    <Col className='category'>
                        <h3>Milk</h3>
                        <img src='/../images/categories/milk.jpg' className='categoryImg' alt='vetables'></img>
                    </Col>
                    <Col className='category'>
                        <h3>Meat</h3>
                        <img src='/../images/categories/meat.jpg' className='categoryImg' alt='vetables'></img>
                    </Col>
                </Row>
                <Row className='categoryRow'>
                    <Col className='category'>
                        <h3>Beverages</h3>
                        <img src='/../images/categories/beverages.jpg' className='categoryImg' alt='vetables'></img>
                    </Col>
                    <Col className='category'>
                        <h3>Bakery</h3>
                        <img src='/../images/categories/bakery.jpg' className='categoryImg' alt='vetables'></img>
                    </Col>
                    <Col className='category'>
                        <h3>Snacks</h3>
                        <img src='/../images/categories/snacks.jpg' className='categoryImg' alt='vetables'></img>
                    </Col>
                    <Col className='category'>
                        <h3>One-time</h3>
                        <img src='/../images/categories/onetime.jpg' className='categoryImg' alt='vetables'></img>
                    </Col>

                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}
export default Homepage;