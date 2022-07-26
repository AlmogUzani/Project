//import logo from './logo.svg';
import ProductDetails from './Components/ProductDetails';
import Login from './Components/Login';
import Registration from './Components/Registeration';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className='container-fluid'>
      <Navbar></Navbar>

      <ProductDetails></ProductDetails>
      <Login></Login>
      <Registration></Registration>

      <Footer></Footer>
    </div>
  );
}

export default App;
