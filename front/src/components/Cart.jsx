import React from "react";
import { useCart } from "./CartContext";

function Cart() {
  const { cart } = useCart();

  return (
    <div className="cart">
      <h2>Seu Carrinho</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
