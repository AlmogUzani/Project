import Navbar from './Navbar';
import Footer from './Footer';
import {Card, Button} from 'react-bootstrap';


function Categories() {
        return (
            <div>
                <Navbar></Navbar>
                <h1>Vegtables</h1>
                <div style={{display:'flex'}}>
                    <Card style={{ width: 'fit-content' }}>
                    <Card.Img variant="top" src="/../images/itemsByCategories/vegtables/cucumber1.jpg" alt='cucumber' className='productCategoryImg' />
                    <Card.Body>
                        <Card.Title>Cucumber</Card.Title>
                        <Card.Text>
                            Price: 2₪
                        </Card.Text>
                        <input type='number' className='quantityProduct' min='0'></input>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                    </Card>
                    <Card style={{ width:'fit-content'}}>
                    <Card.Img variant="top" src="/../images/itemsByCategories/vegtables/tomato1.jpg" alt='tomato' className='productCategoryImg' />
                    <Card.Body>
                        <Card.Title>Tomato</Card.Title>
                        <Card.Text>
                            Price: 2₪
                        </Card.Text>
                        <input type='number' className='quantityProduct' min='0'></input>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                    </Card>
                    <Card style={{ width: 'fit-content' }}>
                    <Card.Img variant="top" src="/../images/itemsByCategories/vegtables/carrot1.jpg" alt='carrot' className='productCategoryImg' />
                    <Card.Body>
                        <Card.Title>Carrot</Card.Title>
                        <Card.Text>
                            Price: 5₪
                        </Card.Text>
                        <input type='number' className='quantityProduct' min='0'></input>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                    </Card>
                    {/* <Card style={{ width: 'fit-content' }}>
                    <Card.Img variant="top" src="/../images/itemsByCategories/fruits/apple1.jpg" alt='apple' className='productCategoryImg' />
                    <Card.Body>
                        <Card.Title>Apple</Card.Title>
                        <Card.Text>
                            Price: 7₪
                        </Card.Text>
                        <input type='number' className='quantityProduct' min='0'></input>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                    </Card>
                    <Card style={{ width: 'fit-content' }}>
                    <Card.Img variant="top" src="/../images/itemsByCategories/fruits/pear1.jpg" alt='pear' className='productCategoryImg' />
                    <Card.Body>
                        <Card.Title>Pear</Card.Title>
                        <Card.Text>
                            Price: 9₪
                        </Card.Text>
                        <input type='number' className='quantityProduct' min='0'></input>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                    </Card> */}
                </div>
                <Footer></Footer>
            </div>
)}

export default Categories