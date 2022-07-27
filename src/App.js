//import logo from './logo.svg';
import ProductDetails from './Components/ProductDetails';
import Login from './Components/Login';
import Registration from './Components/Registeration';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <div className='container-fluid'>


      <ProductDetails></ProductDetails>
      <Login></Login>
      <Registration></Registration>

    </div>
  );
}

export default App;
