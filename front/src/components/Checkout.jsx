import React from "react";
import { useCart } from "./CartContext";

function Checkout() {
  const { cart } = useCart();

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div className="checkout">
      <h2>Finalizar Compra</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
      <button>Finalizar Compra</button>
    </div>
  );
}

export default Checkout;
