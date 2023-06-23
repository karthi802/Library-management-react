import React from "react";
import { useState } from "react";
import { cartbooks } from "../cartbooks";
import Cartitem from "../components/Cartitem";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(cartbooks);

  const handleDelete = (id) => {
    setCart(cart.filter((book) => book.id !== id));
  };

  const Itemscount = cart.length;
  const totalprice = cart.reduce((total, book) => total + book.price, 0); 

  return (
    <>
      <div className="cart">
        <div className="cart-left">
          {cart.map((book) => {
            return (
              <Cartitem key={book.id} book={book} onDelete={handleDelete} />
            );
          })}
        </div>
        <div className="cart-right">
          <h2>Order Summary</h2>

          <h3>No.of items: {Itemscount}</h3>
          <h3>Subtotal: ₹{totalprice}</h3>

          <button>Checkout</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
