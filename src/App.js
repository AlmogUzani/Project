//import logo from './logo.svg';
import ProductDetails from './Components/ProductDetails';
import Login from './Components/Login';
import Registration from './Components/Registeration';
import Homepage from './Components/homePage';
import Categories from './Components/Categories';
import Cart from './Components/Cart';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className='container-fluid'>
      <Homepage></Homepage>
      <Categories id={1}></Categories>
      <ProductDetails id={1}></ProductDetails>
      <Cart ids={1}></Cart>
      <Login></Login>
      <Registration></Registration>

    </div>
  );
}

export default App;
