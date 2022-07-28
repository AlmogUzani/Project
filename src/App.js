//import logo from './logo.svg';
import ProductDetails from './Components/ProductDetails';
import Login from './Components/Login';
import Registration from './Components/Registeration';
import Homepage from './Components/homePage';
import Categories from './Components/Categories';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className='container-fluid'>
      <Homepage></Homepage>
      <Categories></Categories>
      <ProductDetails></ProductDetails>
      <Login></Login>
      <Registration></Registration>

    </div>
  );
}

export default App;
