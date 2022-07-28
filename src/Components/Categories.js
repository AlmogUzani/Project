import Navbar from './Navbar';
import Footer from './Footer';
import {Card, Button} from 'react-bootstrap';
import {getProductsByCategory} from '../DAL/api'
import { getCategoriesById } from '../DAL/api'; 
import { useEffect, useState } from 'react';


function Categories(props) {
    const [products, setProducts] = useState([])
    const [currentCategory, setCurrentCategory] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getData(id) {
            setProducts(await getProductsByCategory(id))
            setCurrentCategory(await getCategoriesById(id))
            setLoading(false)
        }
        getData(props.id)
    },[])
        return (
            <div>
                <Navbar></Navbar>
                {loading? 'Loading' :
                <div style={{display:'flex'}}>
                <h1>{currentCategory.name}</h1>
                    {
                        products.map(product =>
                    <Card key={product.id} style={{ width: 'fit-content' }}>
                    <Card.Img variant="top" src={product.image1} alt={product.name} className='productCategoryImg' />
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            Price: {product.unit_price}
                        </Card.Text>
                        <input type='number' className='quantityProduct' min='0'></input>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                    </Card>
                    )}
                </div>}
                <Footer></Footer>
            </div>
)}

export default Categories