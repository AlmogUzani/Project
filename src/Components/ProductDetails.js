import {Container, Row, Col} from 'react-bootstrap'
import Navbar from './Navbar';
import Footer from './Footer';


function ProductDetails() {
        return (
            <div>
                <Navbar></Navbar>
                <main>
                    <Container style={{display: 'flex'}}>
                        <Row>
                            <Col id="card" sm={6}>
                                <div className="card text-bg-light mb-3" id='fullCard'>
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="false">

                                    <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="/../images/itemsByCategories/vegtables/cucumber1.jpg" className="d-block w-100" alt="Cucumber" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/../images/itemsByCategories/vegtables/cucumber2.jpg" className="d-block w-100" alt="Cucumber" />
                                    </div>
                                    <div className="carousel-item">
                                        <img src="/../images/itemsByCategories/vegtables/cucumber3.jpg" className="d-block w-100" alt="Cucumber" />
                                    </div>
                                    </div>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true" />
                                    <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                                </div>
                            </Col>
                            <Col sm={6} >
                                <div className="card text-bg-light" id='fullCard'>
                                    <div className="card" id='fullCard'>
                                        <div className="card-body">
                                        <h5 className="card-title">Cucumber</h5>
                                        <p className="card-text">
                                            Green & Fresh cucumber straight from the greenhouse.
                                        </p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <ul>
                                            <li>Size: L</li>
                                            <li>Shape: long</li>
                                            <li>Color: green</li>
                                            <li>Category: vegtables</li>
                                            </ul>
                                        </li>
                                        </ul>
                                        <div className="card-body">
                                            <p style={{marginTop: '13px'}}>
                                                <button type="button" className="btn btn-primary btn-sm">+</button>
                                                <span style={{alignItems: 'center', margin: '0 10px'}}>X</span>
                                                <button type="button" className="btn btn-secondary btn-sm" style={{marginRight: '10px'}}>-</button>
                                                Quantity: (154 pieces/Kg in stock)
                                            </p>
                                            <button type="button" className="btn btn-secondary">Add to cart <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" alt="cart" style={{height: '50px', width: '50px'}} /></button>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <Footer></Footer>
            </div>
)}

export default ProductDetails