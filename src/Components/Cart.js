import { useEffect, useState, useCallback } from "react";
import { getCartByUserId } from "../DAL/api.js";
import Product from "./Product.js";

function Cart(params) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const getDataCallback = useCallback(getData);

  async function getData(id) {
    setCart(await getCartByUserId(id));
    setLoading(false);
  }

  params = {};
  useEffect(() => {
    getDataCallback(parseInt(params.id));
  }, []);
  return (
    <div>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <h1>Cart</h1>
          {cart.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
