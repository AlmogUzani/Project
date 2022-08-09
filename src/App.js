//import logo from './logo.svg';
import ProductDetails from "./Components/ProductDetails";
import Login from "./Components/Login";
import Registration from "./Components/Registeration";
import Homepage from "./Components/homePage";
import Category from "./Components/Category";
import Cart from "./Components/Cart";
import { Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="container-fluid">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart/:id" element={<Cart id={1} />} />
      </Routes>
      <Footer></Footer>
      {/* <Homepage></Homepage>
      <Category id={1}></Category>
      <ProductDetails id={1}></ProductDetails>
      <Cart ids={1}></Cart>
      <Login></Login>
      <Registration></Registration> */}
    </div>
  );
}

export default App;
