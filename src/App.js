import ProductDetails from "./Components/ProductDetails";
import Login from "./Components/Login";
import Registration from "./Components/Registeration";
import Homepage from "./Components/homePage";
import Category from "./Components/Category";
import Cart from "./Components/Cart";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import UserInfo from "./Components/UserInfo";

function App() {
  return (
    <div className="container-fluid">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/userInfo/:id" element={<UserInfo />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
